import type { Linter } from 'eslint';
import { pluginSecurity } from '../plugins';

export default [pluginSecurity.configs.recommended] as Linter.Config[];
