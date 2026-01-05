import { YAML } from '../constants';
import { parserYaml, pluginYaml } from '../plugins';
import type { YamlRules } from '../typegen/yaml';
import type { Config } from '../types';
import type { Linter } from 'eslint';

export const yamlConfigs: Config<YamlRules>[] = [
  {
    name: 'component-hook/yaml',
    files: [YAML],
    plugins: {
      yml: pluginYaml,
    },
    languageOptions: {
      parser: parserYaml,
    },
    rules: {
      ...(pluginYaml.configs.standard.rules as Linter.RulesRecord),
      ...(pluginYaml.configs.prettier.rules as Linter.RulesRecord),
      'yml/no-empty-mapping-value': 'off',
    },
  },
  {
    name: 'component-hook/yaml/pnpm-workspace',
    files: ['**/pnpm-workspace.yaml'],
    rules: {
      'yml/sort-keys': [
        'error',
        {
          order: [
            'packages',
            'overrides',
            'patchedDependencies',

            'defines',
            'catalog',
            'catalogs',

            { order: { type: 'asc' } },
          ],
          pathPattern: '^$',
        },
        {
          allowLineSeparatedGroups: true,
          order: { type: 'asc' },
          pathPattern: '^(catalog|catalogs|overrides)$',
        },
        {
          allowLineSeparatedGroups: true,
          order: { type: 'asc' },
          pathPattern: String.raw`^catalogs\..+$`,
        },
      ],
    },
  },
];
