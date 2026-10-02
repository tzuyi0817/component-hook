// @vitest-environment node
import { deriveIgnorePatterns, deriveOxlintConfig } from './index.ts';
import type { Linter } from 'eslint';

describe('deriveOxlintConfig', () => {
  it('keeps only rules oxlint implements and maps plugin prefixes', () => {
    const config = deriveOxlintConfig([
      {
        rules: {
          'no-console': ['warn', { allow: ['warn'] }],
          '@typescript-eslint/ban-ts-comment': 'off',
          '@typescript-eslint/method-signature-style': ['error', 'property'],
          'react-hooks/rules-of-hooks': 2,
          'jsx-a11y/alt-text': 1,
          'perfectionist/sort-imports': 'error',
        },
      },
    ]);

    expect(config).toEqual({
      plugins: ['jsx-a11y', 'react', 'typescript'],
      categories: { correctness: 'off' },
      rules: {
        'no-console': ['warn', { allow: ['warn'] }],
        'typescript/method-signature-style': ['error', 'property'],
        'react/rules-of-hooks': 'error',
        'jsx-a11y/alt-text': 'warn',
      },
    });
  });

  it('maps rules oxlint implements under a different name', () => {
    const config = deriveOxlintConfig([
      {
        rules: {
          'unicorn/no-double-comparison': 'error',
          'unicorn/prefer-math-constants': ['warn', { ignore: [] }],
          'no-restricted-syntax': ['error', 'TSEnumDeclaration[const=true]', 'ForInStatement', 'LabeledStatement'],
        },
      },
    ]);

    expect(config.plugins).toEqual(['oxc']);
    expect(config.rules).toEqual({
      'oxc/double-comparisons': 'error',
      'oxc/approx-constant': 'warn',
      'oxc/no-const-enum': 'error',
      'no-labels': 'error',
    });
  });

  it('replaces restricted syntax selectors as eslint does', () => {
    const config = deriveOxlintConfig([
      { rules: { 'no-restricted-syntax': ['error', 'LabeledStatement'] } },
      { files: ['**/*.ts'], rules: { 'no-restricted-syntax': ['error', 'TSEnumDeclaration[const=true]'] } },
    ]);

    expect(config.rules).toEqual({ 'no-labels': 'error' });
    expect(config.overrides).toEqual([
      { files: ['**/*.ts'], rules: { 'oxc/no-const-enum': 'error', 'no-labels': 'off' } },
    ]);
  });

  it('rejects severity only restricted syntax since eslint keeps the previous selectors', () => {
    expect(() => deriveOxlintConfig([{ rules: { 'no-restricted-syntax': 'warn' } }])).toThrow('no-restricted-syntax');
  });

  it('keeps the preset severity of aliased rules over extra oxc rules', () => {
    const config = deriveOxlintConfig(
      [{ rules: { 'unicorn/no-double-comparison': 'off', 'unicorn/no-chained-comparison': 'warn' } }],
      {
        extraRules: {
          'oxc/double-comparisons': 'error',
          'oxc/bad-comparison-sequence': 'error',
          'oxc/missing-throw': 'error',
        },
      },
    );

    expect(config.rules).toEqual({ 'oxc/bad-comparison-sequence': 'warn', 'oxc/missing-throw': 'error' });
  });

  it('keeps top-level off entries that turn off inherited rules', () => {
    const config = deriveOxlintConfig(
      [{ rules: { 'unicorn/prefer-global-this': 'off', 'react/display-name': 'off', 'react/jsx-key': 'error' } }],
      { inherited: { 'unicorn/prefer-global-this': 'error' } },
    );

    expect(config.rules).toEqual({ 'unicorn/prefer-global-this': 'off', 'react/jsx-key': 'error' });
  });

  it('prefers the typescript-eslint extension over the core rule in the same config', () => {
    const config = deriveOxlintConfig([
      {
        files: ['**/*.ts'],
        rules: {
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
          '@typescript-eslint/no-shadow': 'error',
        },
      },
    ]);

    expect(config.overrides).toEqual([
      {
        files: ['**/*.ts'],
        rules: {
          'no-unused-vars': ['error', { argsIgnorePattern: '_' }],
          'no-shadow': 'error',
        },
      },
    ]);
  });

  it('turns off no-redeclare where the typescript-eslint extension is enabled', () => {
    const config = deriveOxlintConfig([
      { rules: { 'no-redeclare': 'error' } },
      { files: ['**/*.ts'], rules: { '@typescript-eslint/no-redeclare': 'error' } },
    ]);

    expect(config.rules).toEqual({ 'no-redeclare': 'error' });
    expect(config.overrides).toEqual([{ files: ['**/*.ts'], rules: { 'no-redeclare': 'off' } }]);
  });

  it('leaves vue plugin rules and template dependent checks to eslint', () => {
    const config = deriveOxlintConfig([
      {
        files: ['**/*.vue'],
        rules: {
          'vue/no-v-html': 'error',
          '@typescript-eslint/no-unused-vars': 'error',
          '@typescript-eslint/consistent-type-imports': 'error',
          '@typescript-eslint/no-shadow': 'error',
        },
      },
    ]);

    expect(config.plugins).toEqual([]);
    expect(config.overrides).toEqual([{ files: ['**/*.vue'], rules: { 'no-shadow': 'error' } }]);
  });

  it('merges consecutive overrides with the same files and drops top-level off entries', () => {
    const config = deriveOxlintConfig([
      { rules: { 'no-console': 'error', 'unicorn/import-style': 'error' } },
      { rules: { 'unicorn/import-style': 'off' } },
      { files: ['**/*.ts', '**/*.tsx'], rules: { 'no-with': 'off', 'prefer-spread': 'error' } },
      {
        files: [
          ['**/*.ts', '**/*.ts'],
          ['**/*.tsx', '**/*.tsx'],
          ['**/*.ts', '**/*.mts'],
        ],
        rules: { 'no-shadow': 'error' },
      },
      { files: ['**/*.d.ts'], rules: { 'no-console': 'off', '@typescript-eslint/ban-ts-comment': 'off' } },
      { files: ['**/*.json'], rules: { 'no-console': 'off' } },
    ]);

    expect(config).toEqual({
      plugins: ['typescript'],
      categories: { correctness: 'off' },
      rules: { 'no-console': 'error' },
      overrides: [
        {
          files: ['**/*.ts', '**/*.tsx'],
          rules: { 'no-with': 'off', 'prefer-spread': 'error', 'no-shadow': 'error' },
        },
        // override 的 off 可能關掉其他設定啟用的規則，因此保留
        { files: ['**/*.d.ts'], rules: { 'no-console': 'off', 'typescript/ban-ts-comment': 'off' } },
      ],
    });
  });

  it('converts options into json friendly values', () => {
    const config = deriveOxlintConfig([
      {
        rules: {
          'unicorn/filename-case': ['error', { cases: { kebabCase: true }, ignore: [/^[A-Z]+\..*$/] }],
          'import/no-duplicates': ['error', { 'prefer-inline': true }],
        },
      },
    ]);

    expect(config.rules).toEqual({
      'unicorn/filename-case': ['error', { cases: { kebabCase: true }, ignore: [String.raw`^[A-Z]+\..*$`] }],
      'import/no-duplicates': ['error', { preferInline: true }],
    });
  });

  it('rejects regexp options with flags instead of silently dropping them', () => {
    expect(() =>
      deriveOxlintConfig([{ rules: { 'unicorn/filename-case': ['error', { ignore: [/^readme/i] }] } }]),
    ).toThrow('/^readme/i');
  });

  it('converts eslint globs in override files', () => {
    const config = deriveOxlintConfig([
      { rules: { 'import/no-default-export': 'error' } },
      {
        files: ['**/*.md/**', '**/{views,pages}/**/*.?([cm])[jt]s?(x)'],
        rules: { 'import/no-default-export': 'off' },
      },
    ]);

    expect(config.overrides).toEqual([
      {
        files: ['**/{views,pages}/**/*.{js,jsx,ts,tsx,mjs,mts,cjs,cts}'],
        rules: { 'import/no-default-export': 'off' },
      },
    ]);
  });
});

describe('deriveIgnorePatterns', () => {
  it('collects global ignores and expands extglobs', () => {
    const configs: Linter.Config[] = [
      { ignores: ['**/dist', '**/auto-import?(s).d.ts'] },
      { files: ['**/*.ts'], ignores: ['**/scoped'], rules: {} },
      { rules: { 'no-console': 'error' } },
    ];

    expect(deriveIgnorePatterns(configs)).toEqual(['**/dist', '**/auto-import.d.ts', '**/auto-imports.d.ts']);
  });
});
