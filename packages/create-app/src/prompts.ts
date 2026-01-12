import { existsSync } from 'node:fs';
import colors from 'picocolors';
import prompts, { type PromptObject } from 'prompts';
import { DEFAULT_PROJECT_NAME, TEMPLATES } from './constants';
import { getProjectName, isEmptyFolder, isValidPackageName, toValidPackageName } from './utils';

interface PromptsArgs {
  targetDir?: string;
  template?: string;
}

type OverwriteAnswer = 'cancel' | 'overwrite' | 'ignore';

function builtinTemplate(template?: string) {
  return template && TEMPLATES.includes(template);
}

function onCancel() {
  throw new Error(`${colors.red('✖')} Operation cancelled`);
}

function styleTitle(title: string) {
  return colors.bold(colors.magenta(title));
}

export function operationPrompts({ targetDir, template }: PromptsArgs) {
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

  return prompts([projectName, overwrite, overwriteChecker, packageName, framework], { onCancel });
}
