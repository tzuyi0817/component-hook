import type { Linter } from 'eslint';

interface Plugins {
  // Relax plugins type limitation, as most of the plugins did not have correct type info yet.
  plugins?: Record<string, any>;
}

export type Config = Omit<Linter.Config<Linter.RulesRecord>, 'plugins'> & Plugins;
