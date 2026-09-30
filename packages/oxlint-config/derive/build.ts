import plugin from '@component-hook/eslint-plugin';
import { deriveIgnorePatterns, deriveOxlintConfig } from './config/index.ts';
import { readOxcCorrectnessRules } from './oxc.ts';

/**
 * 產生所有要發佈的 oxlint 設定。`scripts/generate.ts` 用它寫入快照，
 * 測試用它比對快照是否過期，兩邊必定走同一條路徑。
 */
export function buildConfigs() {
  return {
    basic: deriveOxlintConfig(plugin.configs.basic, readOxcCorrectnessRules()),
    react: deriveOxlintConfig(plugin.configs.react),
    vue: deriveOxlintConfig(plugin.configs.vue),
    ignorePatterns: deriveIgnorePatterns(plugin.configs.basic),
  };
}
