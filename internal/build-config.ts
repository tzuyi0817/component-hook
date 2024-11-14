import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';

export const { FRAMEWORK } = process.env;
const buildConfigMap = {
  vue: {
    plugin: vue,
    globals: { vue: 'Vue' },
    external: ['vue'],
  },
  react: {
    plugin: react,
    globals: { react: 'React', 'react-dom': 'ReactDOM' },
    external: ['react', 'react-dom'],
  },
};

const config = buildConfigMap[FRAMEWORK as 'vue' | 'react'];

export const vitePlugin = config.plugin;
export const libEntry = `src/${FRAMEWORK}/index.ts`;
export const outDir = `dist/${FRAMEWORK}`;
export const rollupGlobals = config.globals;
export const rollupExternal = config.external;
