import { typescriptEslint } from '../plugins';
import type { TypescriptRules } from '../typegen/typescript';
import type { Config } from '../types';
import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {
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
};

export const typescriptConfigs = typescriptEslint.config({
  extends: [...typescriptEslint.configs.recommended],
  files: ['**/*.ts', '**/*.tsx'],
  name: 'component-hook/typescript',
  rules,
}) as Config<TypescriptRules>[];
