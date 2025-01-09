import prompts, { type PromptObject } from 'prompts';
import { existsSync } from 'fs-extra';
import colors from 'picocolors';
import { isEmptyFolder } from './utils';
import { DEFAULT_PROJECT_NAME, TEMPLATES } from './config';

interface PromptsArgs {
  targetDir?: string;
  template?: string;
}

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

  const overwrite: PromptObject<'projectName' | 'overwrite'> = {
    type: (_, { projectName: name }) => {
      return existsSync(name) && !isEmptyFolder(name) ? 'select' : null;
    },
    name: 'overwrite',
    message: (_, { projectName: name }) => {
      const isCurrentDir = name === '.';
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

  const overwriteChecker: PromptObject<'overwrite' | 'overwriteChecker'> = {
    type: (_, { overwrite: overwriteAnswer }) => {
      if (overwriteAnswer === 'cancel') onCancel();
      return null;
    },
    name: 'overwriteChecker',
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

  return prompts([projectName, overwrite, overwriteChecker, framework], { onCancel });
}
