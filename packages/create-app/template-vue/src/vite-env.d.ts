/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<any, {}, any>;
  export default component;
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_BUILD_EPOCH?: string;
}
