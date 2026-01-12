import { readdirSync, statSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import artTemplate from 'art-template';
import { copy, ensureDirSync } from 'fs-extra/esm';
import minimist from 'minimist';
import ora from 'ora';
import colors from 'picocolors';
import { GITHUB_ACTIONS, GITLAB_CI } from './constants';
import { operationPrompts } from './prompts';
import { clearFolder, formatTargetDir, getPkgManagerInfo, getProjectName, toUpperCasePackageName } from './utils';

interface MinimistParsedArgs {
  _: string[];
  t?: string;
  template?: string;
  l?: boolean;
  gitlab?: boolean;
  h?: boolean;
  help?: boolean;
}

const cwd = process.cwd();

const argv = minimist<MinimistParsedArgs>(process.argv.slice(2), {
  default: { gitlab: false, help: false },
  alias: { t: 'template', l: 'gitlab', h: 'help' },
  string: ['_'],
});

const renameFiles: Record<string, string> = {
  _gitignore: '.gitignore',
  '_gitlab-ci.yml': '.gitlab-ci.yml',
};

const helpMessage = `
Usage: create-component-hook [project name] [options]

Create a new project in TypeScript.
With no arguments, start the CLI in interactive mode.

Options:
  -t, --template [name]  Choose a framework template
  -l, --gitlab  Use Gitlab CI/CD, default is Github CI/CD
  -h, --help  Display this help message

Available templates:
  ${colors.green('vue')}
  ${colors.blue('react')}
`;

async function writePackageJson(root: string, dir: string, packageName: string) {
  const pkgJson = await readFile(path.join(dir, 'package.json'), 'utf8');
  const pkg = JSON.parse(pkgJson);
  const targetPath = path.join(root, 'package.json');

  pkg.name = packageName;
  return writeFile(targetPath, `${JSON.stringify(pkg, null, 2)}\n`);
}

async function copyFolder(root: string, dir: string, packageName: string) {
  const isGitlab = argv.l || argv.gitlab;
  const files = await readdir(dir);
  const filterFiles = files.filter(file => {
    const filterCi = isGitlab ? '.github' : '.gitlab';
    const filterCiYml = isGitlab ? '' : '_gitlab-ci.yml';

    return file !== 'package.json' && file !== filterCi && file !== filterCiYml;
  });

  const rewriteOrCopyFile = (file: string): Promise<void> => {
    const targetPath = path.join(root, renameFiles?.[file] ?? file);
    const templatePath = path.join(dir, file);

    if (file.endsWith('.art')) {
      const isScript = file.endsWith('.js.art') || file.endsWith('.ts.art');
      const name = isScript ? packageName : toUpperCasePackageName(packageName);
      const replacedPath = targetPath.replace('.art', '');
      const renderedResult: string = artTemplate(templatePath, {
        projectName: name,
        gitRepository: isGitlab ? GITLAB_CI : GITHUB_ACTIONS,
      });

      ensureDirSync(path.dirname(replacedPath));

      return writeFile(replacedPath, renderedResult);
    }

    if (statSync(templatePath).isDirectory()) {
      const subFiles = readdirSync(templatePath);
      const rewriteOrCopySubFilePromises = subFiles.map(subFile => rewriteOrCopyFile(path.join(file, subFile)));

      return Promise.all(rewriteOrCopySubFilePromises).then(() => {});
    } else {
      return copy(templatePath, targetPath);
    }
  };

  return Promise.all(filterFiles.map(file => rewriteOrCopyFile(file)));
}

async function createApp() {
  const help = argv.h || argv.help;

  if (help) {
    console.log(helpMessage);
    return;
  }
  const targetDir = formatTargetDir(argv._[0]);
  const template = argv.t || argv.template;
  const result = await operationPrompts({ targetDir, template });
  const projectName = result.projectName ?? targetDir;
  const packageName = result.packageName || getProjectName(projectName);
  const framework = result.framework || template;
  const root = path.join(cwd, projectName);
  const pkgManagerInfo = getPkgManagerInfo();
  const pkgManager = pkgManagerInfo?.name ?? 'npm';
  const spinner = ora();

  console.log();
  spinner.start(colors.yellow(`Scaffolding project...`));

  if (result.overwrite === 'overwrite') {
    await clearFolder(root);
  } else {
    ensureDirSync(root);
  }

  const filePath = fileURLToPath(import.meta.url);
  const sharedDir = path.resolve(filePath, '../..', 'template-shared');
  const templateDir = path.resolve(filePath, '../..', `template-${framework}`);
  const copyPromises = Promise.all([
    copyFolder(root, sharedDir, packageName),
    copyFolder(root, templateDir, packageName),
    writePackageJson(root, templateDir, packageName),
    new Promise(resolve => setTimeout(resolve, 300)),
  ]);

  copyPromises
    .then(() => {
      const cdProjectName = path.relative(cwd, root);
      const formattedCdProjectName = cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName;

      spinner.succeed(`${colors.green('Scaffolded project in')} ${root}`);
      console.log(`\n${colors.green('Done. Now run:')}\n`);
      console.log(colors.cyan(`  cd ${formattedCdProjectName}`));

      if (pkgManager === 'yarn') {
        console.log(colors.cyan(`  yarn`));
        console.log(colors.cyan(`  yarn dev`));
      } else {
        console.log(colors.cyan(`  ${pkgManager} install`));
        console.log(colors.cyan(`  ${pkgManager} run dev`));
      }
      console.log();
    })
    .catch(() => {
      spinner.fail(colors.red('Failed to scaffold project'));
    });
}

createApp().catch(error => {
  console.error(colors.red(error.message));
});
