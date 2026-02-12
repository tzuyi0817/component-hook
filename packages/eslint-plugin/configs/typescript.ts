import { defineConfig } from 'eslint/config';
import { typescriptEslint } from '../plugins';
import type { TypescriptRules } from '../typegen/typescript';
import type { Config } from '../types';
import type { Linter } from 'eslint';

export const typescriptCoreConfig = defineConfig({
  extends: [...typescriptEslint.configs.recommended],
  files: ['**/*.ts', '**/*.tsx'],
  name: 'component-hook/typescript',
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
    ],
    // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-redeclare': 'error',

    'no-restricted-syntax': ['error', 'TSEnumDeclaration[const=true]'],
  } satisfies TypescriptRules & Linter.RulesRecord,
});

export const typescriptConfigs: Config<TypescriptRules>[] = [
  ...typescriptCoreConfig,
  {
    files: ['**/*.d.ts'],
    name: 'component-hook/typescript/dts-rules',
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'import/no-duplicates': 'off',
      'no-restricted-syntax': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
];
