import { existsSync } from 'node:fs';
import prompts, { type PromptObject } from 'prompts';
import colors from 'picocolors';
import { isEmptyFolder, isValidPackageName, getProjectName, toValidPackageName } from './utils';
import { DEFAULT_PROJECT_NAME, TEMPLATES } from './config';

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
      return existsSync(nameAnswer) && !isEmptyFolder(nameAnswer) ? 'select' : null;
    },
    name: 'overwrite',
    message: (nameAnswer: string) => {
      const isCurrentDir = nameAnswer === '.';
      const dir = isCurrentDir ? 'current directory' : `Target directory "${targetDir}"`;

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
      return isValidPackageName(getProjectName(nameAnswer)) ? null : 'text';
    },
    name: 'projectName',
    message: styleTitle('Package name:'),
    initial: (_, { projectName: nameAnswer }) => toValidPackageName(getProjectName(nameAnswer)),
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
      // { title: 'colors.blue('React'), value: 'react' },
    ],
  };

  return prompts([projectName, overwrite, overwriteChecker, packageName, framework], { onCancel });
}
