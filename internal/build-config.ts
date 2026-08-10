import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';

export const { FRAMEWORK } = process.env;

const buildConfigMap = {
  vue: {
    plugin: vue,
    globals: { vue: 'Vue' },
    external: ['vue'],
  },
  react: {
    plugin: react,
    globals: { react: 'React', 'react-dom': 'ReactDOM', 'react/jsx-runtime': 'react_jsx_runtime' },
    /**
     * 需連子路徑一併排除（react/jsx-runtime、react-dom/client 等）。
     * 只列裸套件名時，automatic jsx runtime 注入的 react/jsx-runtime 會被打包進 dist，
     * 而它只有 CJS 版本，內部 require('react') 在 Rolldown 下會被轉成執行期拋錯的 __require shim。
     */
    external: [/^react($|\/)/, /^react-dom($|\/)/],
  },
};

const config = buildConfigMap[FRAMEWORK as 'vue' | 'react'];

/**
 * vite-plugin-dts 在 `bundleTypes` 模式下，會把 TS program 內所有通過 include/exclude
 * 過濾的 `.d.ts` 原封不動餵給 api-extractor，因此要把型別來源限縮在自家 src。
 *
 * 這裡採 `include` 白名單而非 `exclude` 黑名單：@rollup/pluginutils 只有在 pattern
 * 為絕對路徑或以 `**` 開頭時才不錨定，其餘一律接到套件根目錄下，所以 tsconfig 的
 * `"node_modules"` 實際被錨定成 `<package>/node_modules/**`，匹配不到 pnpm 提升到
 * workspace 根目錄的實體，導致 lib.*.d.ts 與 @testing-library/jest-dom 的
 * TestingLibraryMatchers 被整包 bundle 進產出。錨定在 `src/**` 可一次擋掉
 * node_modules、dist 與另一個 framework 的既有產物，新增建置目錄時也不必再補黑名單。
 */
export const dtsOptions = {
  bundleTypes: true,
  include: ['src/**'],
  exclude: ['**/*.test.*'],
};

export const vitePlugin = config.plugin;
export const libEntry = `src/${FRAMEWORK}/index.ts`;
export const outDir = `dist/${FRAMEWORK}`;
export const rollupGlobals = config.globals;
export const rollupExternal = config.external;
