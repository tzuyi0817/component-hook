// @vitest-environment node
import { oxfmtConfig } from './configs/oxfmt/index.ts';
import { prettierConfig } from './configs/prettier.ts';
import plugin, { reactPreset, vuePreset } from './index.ts';
import type { Linter } from 'eslint';

/** 取出規則所屬的 plugin 名稱；核心規則沒有斜線，回傳 undefined */
function pluginIdOf(ruleId: string) {
  const segments = ruleId.split('/');

  if (segments.length < 2) return;

  return ruleId.startsWith('@') && segments.length >= 3 ? segments.slice(0, 2).join('/') : segments[0];
}

/** formatter config 的職責就是關閉各種 plugin 的樣式規則，不納入 plugin 註冊檢查 */
function isFormatterConfig(config: Linter.Config) {
  return config.name === 'component-hook/prettier' || config.name === 'component-hook/oxfmt';
}

describe.each([
  ['reactPreset', reactPreset],
  ['vuePreset', vuePreset],
])('%s', (_, preset) => {
  it('only references rules of plugins registered in the preset', () => {
    const configs: Linter.Config[] = preset;
    const registered = new Set(configs.flatMap(config => Object.keys(config.plugins ?? {})));
    const dangling = configs
      .filter(config => !isFormatterConfig(config))
      .flatMap(config => Object.keys(config.rules ?? {}))
      .map(pluginIdOf)
      .filter((pluginId): pluginId is string => pluginId !== undefined && !registered.has(pluginId));

    expect([...new Set(dangling)]).toEqual([]);
  });
});

describe('plugin configs', () => {
  it('exposes oxfmt config alongside prettier', () => {
    expect(plugin.configs.oxfmt).toBe(oxfmtConfig);
    expect(plugin.configs.prettier).toBe(prettierConfig);
  });

  it('keeps presets on prettier to avoid breaking changes', () => {
    for (const preset of [reactPreset, vuePreset]) {
      expect(preset).toContain(prettierConfig);
      expect(preset).not.toContain(oxfmtConfig);
    }
  });
});
