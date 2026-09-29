// @vitest-environment node
import { typescriptConfigs } from './index.ts';

describe('typescript config', () => {
  it('relaxes declaration file rules through registered plugin prefixes', () => {
    const dtsConfig = typescriptConfigs.find(config => config.name === 'component-hook/typescript/dts-rules');

    expect(dtsConfig?.files).toEqual(['**/*.d.ts']);
    expect(dtsConfig?.rules?.['@eslint-community/eslint-comments/no-unlimited-disable']).toBe('off');
    expect(dtsConfig?.rules?.['import/no-duplicates']).toBe('off');
    expect(dtsConfig?.rules?.['no-restricted-syntax']).toBe('off');
    expect(dtsConfig?.rules).not.toHaveProperty('eslint-comments/no-unlimited-disable');
    expect(dtsConfig?.rules).not.toHaveProperty('unused-imports/no-unused-vars');
  });
});
