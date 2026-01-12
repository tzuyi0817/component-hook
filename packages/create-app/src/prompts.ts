import { existsSync } from 'node:fs';
import colors from 'picocolors';
import prompts, { type PromptObject } from 'prompts';
import { CI, DEFAULT_PROJECT_NAME, TEMPLATES } from './constants';
import { getProjectName, isEmptyFolder, isValidPackageName, toValidPackageName } from './utils';

interface PromptsArgs {
  targetDir?: string;
  template?: string;
  ci?: string;
}

type OverwriteAnswer = 'cancel' | 'overwrite' | 'ignore';

function builtinTemplate(template?: string) {
  return template && TEMPLATES.includes(template);
}

export function checkCi(ci?: string) {
  return ci && CI.includes(ci);
}

function onCancel() {
  throw new Error(`${colors.red('✖')} Operation cancelled`);
}

function styleTitle(title: string) {
  return colors.bold(colors.magenta(title));
}

export function operationPrompts({ targetDir, template, ci }: PromptsArgs) {
  const projectName: PromptObject<'projectName'> = {
    type: targetDir ? null : 'text',
    name: 'projectName',
    message: styleTitle('Project name:'),
    initial: DEFAULT_PROJECT_NAME,
  };

  const overwrite: PromptObject<'overwrite'> = {
    type: (nameAnswer: string) => {
      const dir = nameAnswer ?? targetDir;

      return existsSync(dir) && !isEmptyFolder(dir) ? 'select' : null;
    },
    name: 'overwrite',
    message: (nameAnswer: string) => {
      const dirName = nameAnswer ?? targetDir;
      const isCurrentDir = dirName === '.';
      const dir = isCurrentDir ? 'current directory' : `Target directory "${dirName}"`;

      return styleTitle(`${dir} is not empty. Please choose how to proceed:`);
    },
    initial: 0,
    choices: [
      { title: 'Cancel operation', value: 'cancel' },
      { title: 'Remove existing files and continue', value: 'overwrite' },
      { title: 'Ignore files and continue', value: 'ignore' },
    ],
  };

  const overwriteChecker: PromptObject<'overwriteChecker'> = {
    type: (overwriteAnswer: OverwriteAnswer) => {
      if (overwriteAnswer === 'cancel') onCancel();
      return null;
    },
    name: 'overwriteChecker',
  };

  const packageName: PromptObject<'projectName' | 'packageName'> = {
    type: (_, { projectName: nameAnswer }) => {
      const dir = nameAnswer ?? targetDir;

      return isValidPackageName(getProjectName(dir)) ? null : 'text';
    },
    name: 'packageName',
    message: styleTitle('Package name:'),
    initial: (_, { projectName: nameAnswer }) => {
      const dir = nameAnswer ?? targetDir;

      return toValidPackageName(getProjectName(dir));
    },
    validate: (name: string) => {
      return isValidPackageName(name) || 'Invalid package.json name';
    },
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
      { title: colors.blue('React'), value: 'react' },
    ],
  };

  const ciPrompt: PromptObject<'ci'> = {
    type: checkCi(ci) ? null : 'select',
    name: 'ci',
    message: ci
      ? styleTitle(`${colors.red(ci)} isn't a valid CI/CD. Please choose from below:`)
      : styleTitle('Choose CI/CD:'),
    choices: [
      { title: 'GitHub Actions', value: 'github-actions' },
      { title: 'GitLab CI', value: 'gitlab-ci' },
      { title: 'None', value: 'none' },
    ],
    initial: 0,
  };

  return prompts([projectName, overwrite, overwriteChecker, packageName, framework, ciPrompt], { onCancel });
}
