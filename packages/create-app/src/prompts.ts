import prompts, { type PromptObject } from 'prompts';
import colors from 'picocolors';
import { DEFAULT_PROJECT_NAME, TEMPLATES } from './config';

function builtinTemplate(template?: string) {
  return template && TEMPLATES.includes(template);
}

function onCancel() {
  throw new Error(`${colors.red('✖')} Operation cancelled`);
}

function styleTitle(title: string) {
  return colors.bold(colors.magenta(title));
}

export function operationPrompts(targetDir?: string, template?: string) {
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
