/// <reference types="vite/client" />

declare module 'virtual:svg-icons-register';

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_MOCK?: 'service-worker';
  readonly VITE_APP_BUILD_EPOCH?: string;
}
