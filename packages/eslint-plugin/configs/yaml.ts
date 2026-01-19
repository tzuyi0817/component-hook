import { pluginYaml } from '../plugins';
import type { YamlRules } from '../typegen/yaml';
import type { Config } from '../types';

const initialRules: Config<YamlRules> = {
  rules: {
    'yml/no-empty-mapping-value': 'off',
  },
};
const configs = Array.from(new Set([...pluginYaml.configs.standard, ...pluginYaml.configs.prettier, initialRules]));
const mergedConfig: Config<YamlRules> = configs.reduce((map, config) => {
  return { ...map, ...config, rules: { ...map.rules, ...config.rules } };
}, {});

export const yamlConfigs: Config<YamlRules>[] = [
  {
    ...mergedConfig,
    name: 'component-hook/yaml',
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
