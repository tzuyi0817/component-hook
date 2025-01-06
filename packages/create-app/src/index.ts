import path from 'node:path';
import minimist from 'minimist';
import prompts, { type PromptObject } from 'prompts';
import colors from 'picocolors';
import { readdir, readFile, writeFile, copy, ensureDirSync } from 'fs-extra';
import artTemplate from 'art-template';

const DEFAULT_PROJECT_NAME = 'basic-project';
const TEMPLATES = ['vue'];
const cwd = process.cwd();

const argv = minimist(process.argv.slice(2), {
  alias: { t: 'template', lab: 'gitlab' },
});

const renameFiles: Record<string, string> = {
  _gitignore: '.gitignore',
  '_gitlab-ci.yml': '.gitlab-ci.yml',
};

function formatTargetDir(targetDir?: string) {
  if (!targetDir) return targetDir;

  targetDir = targetDir.trim();

  if (targetDir[0] === '/') {
    targetDir = targetDir.slice(1);
  }
  if (targetDir.at(-1) === '/') {
    targetDir = targetDir.slice(0, -1);
  }
  return targetDir;
}

function onCancel() {
  throw new Error(`${colors.red('✖')} Operation cancelled`);
}

function builtinTemplate(template: string) {
  return template && TEMPLATES.includes(template);
}

function styleTitle(title: string) {
  return colors.bold(colors.magenta(title));
}

function operationPrompts() {
  const targetDir = formatTargetDir(argv._[0]);
  const template = argv.t || argv.template;

  const projectName: PromptObject<'projectName'> = {
    type: targetDir ? null : 'text',
    name: 'projectName',
    message: styleTitle('Project name:'),
    initial: DEFAULT_PROJECT_NAME,
  };

  const framework: PromptObject<'framework'> = {
    type: builtinTemplate(template) ? null : 'select',
    name: 'framework',
    message: template
      ? styleTitle(`${colors.red(template)} isn't a valid template. Please choose from below:`)
      : styleTitle('Select a framework:'),
    initial: 0,
    choices: [
      { title: colors.green('Vue'), value: 'vue' },
      // { title: 'colors.blue('React'), value: 'react' },
    ],
  };

  return prompts([projectName, framework], { onCancel });
}

function getPkgManagerInfo() {
  const userAgent = process.env.npm_config_user_agent;

  if (!userAgent) return;
  const [pkgManager] = userAgent.split(' ');
  const [name, version] = pkgManager.split('/');

  return { name, version };
}

async function copyTemplateFolder(root: string, templateDir: string, projectName: string) {
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
      const name = projectName
        .split('-')
        .map(str => `${str[0].toUpperCase()}${str.slice(1)}`)
        .join(' ');

      const renderedResult: string = artTemplate(templatePath, { projectName: name });

      return writeFile(targetPath.replace('.art', ''), renderedResult);
    }
    return copy(templatePath, targetPath);
  };

  pkg.name = projectName;

  return Promise.all([
    ...filterFiles.map(file => rewriteOrCopyFile(file)),
    rewriteOrCopyFile('package.json', `${JSON.stringify(pkg, null, 2)}\n`),
  ]);
}

async function createApp() {
  const result = await operationPrompts();
  const { projectName, framework } = result;
  const root = path.join(cwd, projectName);
  const pkgManagerInfo = getPkgManagerInfo();
  const pkgManager = pkgManagerInfo?.name ?? 'npm';

  ensureDirSync(root);

  console.log(`\nScaffolding project in ${colors.cyan(root)}...`);
  const templateDir = path.join(__dirname, `../template-${framework}`);

  await copyTemplateFolder(root, templateDir, projectName);
  console.log(pkgManager);

  const cdProjectName = path.relative(cwd, root);
  const formattedCdProjectName = cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName;

  console.log(`\nDone. Now run:\n`);
  console.log(`  cd ${formattedCdProjectName}`);
}

createApp().catch(error => {
  console.error(colors.red(error.message));
});
