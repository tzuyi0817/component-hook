import { configPrettier, configPrettierOverrides, pluginOxfmt } from '../../plugins.ts';
import type { OxfmtRules } from '../../typegen/oxfmt.ts';
import type { Config } from '../../types.ts';

const rules = Object.fromEntries(
  Object.entries(configPrettier.rules ?? {}).filter(([name]) => name !== 'vue/html-self-closing'),
);

export const oxfmtConfig: Config<OxfmtRules> = {
  name: 'component-hook/oxfmt',
  plugins: {
    oxfmt: pluginOxfmt,
  },
  rules: {
    ...rules,
    ...configPrettierOverrides.rules,
    'oxfmt/oxfmt': 'warn',
  },
};
