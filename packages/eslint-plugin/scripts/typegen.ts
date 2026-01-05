import { mkdir, rm, writeFile } from 'node:fs/promises';
import { styleText } from 'node:util';
import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import { commentsConfigs } from '../configs/comments';
import { deMorganConfig } from '../configs/de-morgan';
import { importConfigs } from '../configs/import';
import { jsdocConfig } from '../configs/jsdoc';
import { jsoncConfigs } from '../configs/jsonc';
import { markdownConfigs } from '../configs/markdown';
import { perfectionistConfig } from '../configs/perfectionist';
import { playwrightConfig } from '../configs/playwright';
import { prettierConfig } from '../configs/prettier';
import { reactConfigs } from '../configs/react';
import { regexpConfig } from '../configs/regexp';
import { securityConfig } from '../configs/security';
import { sonarjsConfigs } from '../configs/sonarjs';
import {
  testingLibraryAngularConfig,
  testingLibraryDomConfig,
  testingLibraryMarkoConfig,
  testingLibraryReactConfig,
  testingLibraryVueConfig,
} from '../configs/testing-library';
import { typescriptConfigs } from '../configs/typescript';
import { unicornConfigs } from '../configs/unicorn';
import { vueConfigs } from '../configs/vue';
import { yamlConfigs } from '../configs/yaml';

const configs = {
  typescript: typescriptConfigs,
  comments: commentsConfigs,
  import: importConfigs,
  unicorn: unicornConfigs,
  jsdoc: [jsdocConfig],
  regexp: [regexpConfig],
  'de-morgan': [deMorganConfig],
  perfectionist: [perfectionistConfig],
  jsonc: jsoncConfigs,
  yaml: yamlConfigs,
  markdown: markdownConfigs,
  playwright: [playwrightConfig],
  prettier: [prettierConfig],
  react: reactConfigs,
  security: [securityConfig],
  sonarjs: sonarjsConfigs,
  'testing-library': [
    testingLibraryDomConfig,
    testingLibraryVueConfig,
    testingLibraryReactConfig,
    testingLibraryAngularConfig,
    testingLibraryMarkoConfig,
  ],
  vue: vueConfigs,
};

function capitalize(name: string) {
  if (name.includes('-')) {
    const words = name.split('-');

    for (let index = 0; index < words.length; index++) {
      words[index] = capitalize(words[index]);
    }

    return words.join('');
  }

  return `${name[0].toUpperCase()}${name.slice(1)}`;
}

function fixDts(dts: string) {
  return dts.replaceAll(/(type PlaywrightValidTitle = \[\]\|\s*\[\{)([\s\S]*?)(\}\])/g, (_, start, body, end) => {
    const newBody = body.replaceAll(/\[k: string\]: \([\s\S]*?\}\)/g, '[k: string]: unknown');

    return start + newBody + end;
  });
}

await rm('typegen', { recursive: true, force: true });

for (const [name, config] of Object.entries(configs)) {
  const dts = await flatConfigsToRulesDTS(config, {
    includeAugmentation: false,
    exportTypeName: `${capitalize(name)}Rules`,
    filterPlugin(pluginName: string) {
      return pluginName !== 'component-hook';
    },
  });

  await mkdir('typegen', { recursive: true });
  await writeFile(`typegen/${name}.ts`, fixDts(dts));
}

console.log(styleText('green', 'Type definitions generated!'));
