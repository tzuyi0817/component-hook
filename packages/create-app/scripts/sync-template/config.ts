import type { Framework } from './types.ts';

export const FRAMEWORKS: Framework[] = ['vue', 'react'];

/** 預設來源：與 component-hook 並列的兩個參考專案，相對於 repo 根目錄 */
export const DEFAULT_SOURCE_DIRS: Record<Framework, string> = {
  react: '../template-react',
  vue: '../coding-standards',
};

/** 安裝或工具產物，與 template 無關，不比對 */
export const IGNORED_PATHS = new Set(['pnpm-lock.yaml', 'public/mockServiceWorker.js']);

/** 刻意與來源不同的檔案，報告為 SKIP 並附原因 */
export const KNOWN_DIVERGENT: Record<string, string> = {
  '.github/renovate.json': 'template 保留獨立的 inline 設定，不指向個人 preset',
  'CODE_OF_CONDUCT.md': 'repo 專屬文件',
  LICENSE: 'template 的版權人留白，由使用者填寫',
  'pnpm-workspace.yaml': '來源另有自己的 pnpm policy，template 只放 allowBuilds',
};

/** 依賴版本比對時各 template 要排除的套件 */
export const DEPENDENCY_SKIP: Record<Framework, string[]> = {
  react: [],
  vue: [],
};
