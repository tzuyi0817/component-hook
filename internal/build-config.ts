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

export const vitePlugin = config.plugin;
export const libEntry = `src/${FRAMEWORK}/index.ts`;
export const outDir = `dist/${FRAMEWORK}`;
export const rollupGlobals = config.globals;
export const rollupExternal = config.external;
