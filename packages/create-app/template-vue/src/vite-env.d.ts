/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_BUILD_EPOCH?: string;
  readonly VITE_APP_MOCK?: string;
}
