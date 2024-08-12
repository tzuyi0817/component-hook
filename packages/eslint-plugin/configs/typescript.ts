import type { Linter } from 'eslint';
import { typescriptEslint } from '../plugins';

export const rules: Linter.RulesRecord = {
  '@typescript-eslint/no-unused-expressions': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unsafe-function-type': 'off',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
};

export const typescriptConfigs = typescriptEslint.config({
  extends: [...typescriptEslint.configs.recommended],
  files: ['**/*.ts', '**/*.tsx'],
  name: 'component-hook/typescript',
  rules,
}) as Linter.Config[];
