import { mkdir, rm, writeFile } from 'node:fs/promises';
import { styleText } from 'node:util';
import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import { commentsConfigs } from '../configs/comments.ts';
import { deMorganConfig } from '../configs/de-morgan.ts';
import { importConfigs } from '../configs/import.ts';
import { jsdocConfig } from '../configs/jsdoc.ts';
import { jsoncConfigs } from '../configs/jsonc.ts';
import { markdownConfigs } from '../configs/markdown.ts';
import { perfectionistConfig } from '../configs/perfectionist.ts';
import { playwrightConfig } from '../configs/playwright.ts';
import { prettierConfig } from '../configs/prettier.ts';
import { reactConfigs } from '../configs/react.ts';
import { regexpConfig } from '../configs/regexp.ts';
import { securityConfig } from '../configs/security.ts';
import { sonarjsConfigs } from '../configs/sonarjs.ts';
import {
  testingLibraryAngularConfig,
  testingLibraryDomConfig,
  testingLibraryMarkoConfig,
  testingLibraryReactConfig,
  testingLibraryVueConfig,
} from '../configs/testing-library.ts';
import { typescriptConfigs } from '../configs/typescript.ts';
import { unicornConfigs } from '../configs/unicorn.ts';
import { vueConfigs } from '../configs/vue.ts';
import { yamlConfigs } from '../configs/yaml.ts';

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

function fixPlaywrightValidTitle(dts: string) {
  return dts.replaceAll(/(type PlaywrightValidTitle = \[\]\|\s*\[\{)([\s\S]*?)(\}\])/g, (_, start, body, end) => {
    const newBody = body.replaceAll(/\[k: string\]: \([\s\S]*?\}\)/g, '[k: string]: unknown');

    return start + newBody + end;
  });
}

function dedupeInterfaces(dts: string) {
  const seen = new Set<string>();

  return dts.replaceAll(/^interface \w+ \{[\s\S]+?^\}\n?/gm, match => {
    if (seen.has(match)) return '';
    seen.add(match);

    return match;
  });
}

function fixDts(dts: string) {
  return dedupeInterfaces(fixPlaywrightValidTitle(dts));
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
