// @vitest-environment node
import { oxfmtConfig } from './configs/oxfmt/index.ts';
import { prettierConfig } from './configs/prettier.ts';
import plugin, { reactPreset, vuePreset } from './index.ts';

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
