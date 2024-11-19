export {};

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    group?: string;
  }
}
