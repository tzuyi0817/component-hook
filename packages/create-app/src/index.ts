import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import artTemplate from 'art-template';
import { copy, ensureDirSync } from 'fs-extra/esm';
import minimist from 'minimist';
import ora from 'ora';
import colors from 'picocolors';
import { operationPrompts } from './prompts';
import { clearFolder, formatTargetDir, getPkgManagerInfo, getProjectName } from './utils';

interface MinimistParsedArgs {
  _: string[];
  t?: string;
  template?: string;
  lab?: boolean;
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
`;

async function copyTemplateFolder(root: string, templateDir: string, packageName: string) {
  const isGitlab = argv.lab || argv.gitlab;
  const [files, pkgJson] = await Promise.all([
    readdir(templateDir),
    readFile(path.join(templateDir, 'package.json'), 'utf-8'),
  ]);
  const filterFiles = files.filter(file => {
    const filterCi = isGitlab ? '.github' : '.gitlab';
    const filterCiYml = isGitlab ? '' : '_gitlab-ci.yml';

    return file !== 'package.json' && file !== filterCi && file !== filterCiYml;
  });
  const pkg = JSON.parse(pkgJson);

  const rewriteOrCopyFile = (file: string, content?: string) => {
    const targetPath = path.join(root, renameFiles?.[file] ?? file);

    if (content) {
      return writeFile(targetPath, content);
    }
    const templatePath = path.join(templateDir, file);

    if (file.endsWith('.art')) {
      const name = packageName
        .split('-')
        .map(str => `${str[0].toUpperCase()}${str.slice(1)}`)
        .join(' ');

      const renderedResult: string = artTemplate(templatePath, { projectName: name });

      return writeFile(targetPath.replace('.art', ''), renderedResult);
    }
    return copy(templatePath, targetPath);
  };

  pkg.name = packageName;

  return Promise.all([
    ...filterFiles.map(file => rewriteOrCopyFile(file)),
    rewriteOrCopyFile('package.json', `${JSON.stringify(pkg, null, 2)}\n`),
    new Promise(resolve => setTimeout(resolve, 300)),
  ]);
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
  const packageName = result.packageName || getProjectName(result.projectName);
  const framework = result.framework || template;
  const root = path.join(cwd, result.projectName);
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

  const templateDir = path.resolve(fileURLToPath(import.meta.url), '../..', `template-${framework}`);

  copyTemplateFolder(root, templateDir, packageName)
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
