import type { Linter } from 'eslint';
import { typescriptEslint } from '../plugins';

export const rules: Linter.Config<Linter.RulesRecord>['rules'] = {
  '@typescript-eslint/no-unused-expressions': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
};

export default typescriptEslint.config({
  extends: [...typescriptEslint.configs.recommended],
  files: ['**/*.ts', '**/*.tsx'],
  rules,
}) as Linter.Config[];
