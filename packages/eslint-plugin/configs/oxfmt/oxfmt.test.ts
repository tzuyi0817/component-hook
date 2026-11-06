// @vitest-environment node
import { Linter } from 'eslint';
import { configPrettier, typescriptEslint, vueParser } from '../../plugins.ts';
import { jsoncConfigs } from '../jsonc/index.ts';
import { oxfmtConfig } from './index.ts';

const presetOxfmtRule = oxfmtConfig.rules?.['oxfmt/oxfmt'];
/** preset 傳給 oxfmt 規則的選項，隔離測試沿用以驗證 preset 本身的行為 */
const presetOxfmtOptions = Array.isArray(presetOxfmtRule) ? presetOxfmtRule[1] : {};

/** 關閉設定檔與 ignore 探索，讓測試結果不受 repo 內的 oxfmt 設定影響 */
const isolatedOptions = {
  ...presetOxfmtOptions,
  useConfig: false,
  editorconfig: false,
  respectOxfmtDefaultIgnores: false,
  singleQuote: true,
};

const isolatedOxfmtConfig = {
  ...oxfmtConfig,
  rules: {
    ...oxfmtConfig.rules,
    'oxfmt/oxfmt': ['warn', isolatedOptions],
  },
} satisfies Linter.Config;

const typescriptLanguageConfig: Linter.Config = {
  files: ['**/*.ts'],
  languageOptions: {
    parser: typescriptEslint.parser,
  },
};

const vueLanguageConfig: Linter.Config = {
  files: ['**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: typescriptEslint.parser,
      extraFileExtensions: ['.vue'],
      sourceType: 'module',
    },
  },
};

describe('oxfmt config', () => {
  it('registers the oxfmt plugin and rule as warning with package.json sorting left to jsonc', () => {
    expect(oxfmtConfig.name).toBe('component-hook/oxfmt');
    expect(oxfmtConfig.plugins?.oxfmt).toBeDefined();
    expect(oxfmtConfig.rules?.['oxfmt/oxfmt']).toEqual(['warn', { sortPackageJson: false }]);
  });

  it('turns off every eslint-config-prettier rule except vue/html-self-closing', () => {
    const conflictingRules = Object.keys(configPrettier.rules ?? {}).filter(name => name !== 'vue/html-self-closing');

    expect(conflictingRules.length).toBeGreaterThan(0);

    for (const name of conflictingRules) {
      expect([0, 'off'], name).toContain(oxfmtConfig.rules?.[name]);
    }

    expect([0, 'off']).toContain(oxfmtConfig.rules?.['arrow-body-style']);
    expect([0, 'off']).toContain(oxfmtConfig.rules?.['prefer-arrow-callback']);
  });

  it('does not include prettier rule and keeps vue/html-self-closing untouched', () => {
    expect(oxfmtConfig.rules).not.toHaveProperty('prettier/prettier');
    expect(oxfmtConfig.rules).not.toHaveProperty('vue/html-self-closing');
  });

  it('reports and fixes unformatted javascript', () => {
    const linter = new Linter({ cwd: import.meta.dirname });
    const code = 'const a = {b:1}\n';

    const messages = linter.verify(code, [isolatedOxfmtConfig], { filename: 'sample.js' });

    expect(messages).toHaveLength(1);
    expect(messages[0]).toMatchObject({ ruleId: 'oxfmt/oxfmt', severity: 1 });

    const result = linter.verifyAndFix(code, [isolatedOxfmtConfig], { filename: 'sample.js' });

    expect(result.fixed).toBe(true);
    expect(result.output).toBe('const a = { b: 1 };\n');
  });

  it('does not report already formatted code', () => {
    const linter = new Linter({ cwd: import.meta.dirname });
    const code = 'const greet = (name: string) => `hi ${name}`;\n\nexport { greet };\n';

    const messages = linter.verify(code, [typescriptLanguageConfig, isolatedOxfmtConfig], {
      filename: 'formatted.ts',
    });

    expect(messages).toHaveLength(0);
  });

  it('reports and fixes unformatted typescript', () => {
    const linter = new Linter({ cwd: import.meta.dirname });
    const code = 'const x: {a:number} = {a:1}\n';

    const result = linter.verifyAndFix(code, [typescriptLanguageConfig, isolatedOxfmtConfig], {
      filename: 'sample.ts',
    });

    expect(result.fixed).toBe(true);
    expect(result.output).toBe('const x: { a: number } = { a: 1 };\n');
  });

  it('leaves package.json key order to jsonc rules without fighting them', () => {
    const linter = new Linter({ cwd: import.meta.dirname });
    const code = [
      '{',
      '  "version": "1.0.0",',
      '  "license": "MIT",',
      '  "name": "sample",',
      '  "author": "someone",',
      '  "devEngines": { "runtime": { "name": "node" }, "cpu": { "name": "x64" } }',
      '}',
      '',
    ].join('\n');

    const result = linter.verifyAndFix(code, [...jsoncConfigs, isolatedOxfmtConfig], {
      filename: 'package.json',
    });

    expect(Object.keys(JSON.parse(result.output))).toEqual(['name', 'version', 'author', 'license', 'devEngines']);
    expect(Object.keys(JSON.parse(result.output).devEngines)).toEqual(['cpu', 'runtime']);
    expect(result.messages).toHaveLength(0);
  });

  it('formats vue single file components', () => {
    const linter = new Linter({ cwd: import.meta.dirname });
    const code = [
      '<script setup lang="ts">',
      'const a = {b:1}',
      '</script>',
      '',
      '<template>',
      '  <div   class="x">{{ a.b }}</div>',
      '</template>',
      '',
    ].join('\n');

    const result = linter.verifyAndFix(code, [vueLanguageConfig, isolatedOxfmtConfig], {
      filename: 'Sample.vue',
    });

    expect(result.fixed).toBe(true);
    expect(result.output).toContain('const a = { b: 1 };');
    expect(result.output).toContain('<div class="x">{{ a.b }}</div>');
  });
});
