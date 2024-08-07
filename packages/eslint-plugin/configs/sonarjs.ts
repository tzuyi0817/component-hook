import type { Linter } from 'eslint';
import { pluginSonarjs } from '../plugins';

export default [pluginSonarjs.configs.recommended] as Linter.Config[];