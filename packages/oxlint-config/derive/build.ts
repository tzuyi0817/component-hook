import plugin from '@component-hook/eslint-plugin';
import { deriveIgnorePatterns, deriveOxlintConfig } from './config/index.ts';
import { readOxcCorrectnessRules } from './oxc/index.ts';

/**
 * 產生所有要發佈的 oxlint 設定。`scripts/generate.ts` 用它寫入快照，
 * 測試用它比對快照是否過期，兩邊共用同一套推導邏輯。
 * 產生時經 package exports 讀 eslint-plugin 的 dist（`build:generate` 會先重新 build），
 * 測試則經 root vitest alias 讀原始碼，因此兩邊讀到的 preset 一致。
 */
export function buildConfigs() {
  const basic = deriveOxlintConfig(plugin.configs.basic, { extraRules: readOxcCorrectnessRules() });
  const inherited = basic.rules ?? {};

  return {
    basic,
    react: deriveOxlintConfig(plugin.configs.react, { inherited }),
    vue: deriveOxlintConfig(plugin.configs.vue, { inherited }),
    ignorePatterns: deriveIgnorePatterns(plugin.configs.basic),
  };
}
