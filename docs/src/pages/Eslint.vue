<script lang="ts" setup>
import SourceCode from '@/components/SourceCode.vue';
import ExternalLink from '@/components/ExternalLink.vue';
import basicUsage from '@/examples/eslint-plugin/basic.config.ts?raw';
import reactPresets from '@/examples/eslint-plugin/reactPresets.config.ts?raw';
import vuePresets from '@/examples/eslint-plugin/vuePresets.config.ts?raw';
import installationMd from '@/markdowns/eslint-plugin/installation.md?raw';
import { md, highlight } from '@/utils/highlight';
import { BASE_URL, CONFIGS_MAP } from '@/configs/eslint-plugin';

function encode(source: string, filetype: string) {
  const code = highlight(source, filetype);

  return encodeURIComponent(code);
}
</script>

<template>
  <div class="container">
    <h1>ESLint Plugin</h1>

    <p>A opinionated ESLint config preset for JavaScript, TypeScript, Vue, and Prettier.</p>

    <div v-html="md.render(installationMd)"></div>
    <p class="font-mono text-xs my-4">
      Require ESLint >= 9.0.0
    </p>

    <h2>Basic Usage</h2>
    <p class="mb-4">
      Choose a packaged ESLint config reference based on your needs.
    </p>
    <source-code
      :source="encode(basicUsage, 'javascript')"
      :raw="basicUsage"
    />
    <p class="font-mono text-xs my-4">
      See
      <external-link :href="`${BASE_URL}/configs/ignores.ts`">
        ignores
      </external-link>
      for more details.
    </p>

    <h2>React Presets Usage</h2>
    <p class="mb-4">
      Includes basic, react, markdown, sonarjs, security configs.
    </p>
    <source-code
      :source="encode(reactPresets, 'javascript')"
      :raw="reactPresets"
    />

    <h2>Vue Presets Usage</h2>
    <p class="mb-4">
      Includes basic, vue, markdown, sonarjs, security configs.
    </p>
    <source-code
      :source="encode(vuePresets, 'javascript')"
      :raw="vuePresets"
    />

    <h2>Build-in Configs</h2>
    <ol>
      <li
        v-for="(config, name) in CONFIGS_MAP"
        :key="name"
      >
        <external-link :href="config.url">
          {{ name }}
        </external-link>
        <ul>
          <li
            v-for="plugin of config.plugins"
            :key="plugin.name"
          >
            <external-link :href="plugin.url">
              {{ plugin.name }}
            </external-link>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<style lang="postcss" scoped>
ol {
  @apply list-decimal pl-6;
}

ul {
  @apply list-disc pl-6;
}
</style>
