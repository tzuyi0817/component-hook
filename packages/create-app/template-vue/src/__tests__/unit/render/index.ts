import type { Component } from 'vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import { render } from '@testing-library/vue';
import type { RenderOptions } from '@testing-library/vue/types';
import { setActivePinia, createPinia } from 'pinia';
import i18n from '@/plugins/i18n';
import { routes } from '@/router';

interface RenderComponentOptions extends RenderOptions<unknown> {
  provide?: Record<PropertyKey, unknown>;
}

const pinia = createPinia();
const router = createRouter({ history: createMemoryHistory(), routes });

setActivePinia(pinia);

export function renderComponent(testComponent: Component, options?: RenderComponentOptions) {
  const { provide, ...componentOptions } = options ?? {};

  return render(testComponent, {
    ...componentOptions,
    global: {
      plugins: [pinia, i18n, router],
      provide,
    },
  });
}
