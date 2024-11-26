<script lang="ts" setup>
import SourceCode from '@/components/SourceCode.vue';
import ExternalLink from '@/components/ExternalLink.vue';
import basicUsage from '@/examples/eslint-plugin/basic.config.ts?raw';
import reactPresets from '@/examples/eslint-plugin/react-presets.config.ts?raw';
import vuePresets from '@/examples/eslint-plugin/vue-presets.config.ts?raw';
import installationMd from '@/markdowns/eslint-plugin/installation.md?raw';
import configsTypeMd from '@/markdowns/eslint-plugin/configs-type.md?raw';
import { md, highlight } from '@/utils/highlight';
import { BASE_URL, CONFIGS_MAP } from '@/configs/eslint-plugin';

function encode(source: string, filetype: string) {
  const code = highlight(source, filetype);

  return encodeURIComponent(code);
}
</script>

<template>
  <div class="container">
    <h2>ESLint Plugin</h2>

    <p>A opinionated ESLint config preset for JavaScript, TypeScript, Vue, and Prettier.</p>

    <div v-html="md.render(installationMd)"></div>
    <p class="font-mono text-xs my-4">Require ESLint >= 9.0.0</p>

    <h3>Basic Usage</h3>
    <p class="mb-4">Choose a packaged ESLint config reference based on your needs.</p>
    <source-code
      :source="encode(basicUsage, 'javascript')"
      :raw="encodeURIComponent(basicUsage)"
    />
    <p class="font-mono text-xs my-4">
      See
      <external-link
        :href="`${BASE_URL}/configs/ignores.ts`"
        title="ESLint Plugin Ignores GitHub Page"
      >
        ignores
      </external-link>
      for more details.
    </p>

    <h3>React Presets Usage</h3>
    <p class="mb-4">Includes basic, react, markdown, prettier, sonarjs, security configs.</p>
    <source-code
      :source="encode(reactPresets, 'javascript')"
      :raw="encodeURIComponent(reactPresets)"
    />

    <h3>Vue Presets Usage</h3>
    <p class="mb-4">Includes basic, vue, markdown, prettier, sonarjs, security configs.</p>
    <source-code
      :source="encode(vuePresets, 'javascript')"
      :raw="encodeURIComponent(vuePresets)"
    />

    <h3>Build-in Configs Type</h3>
    <div v-html="md.render(configsTypeMd)"></div>

    <h3>Build-in Configs Reference</h3>
    <ol>
      <li
        v-for="(config, name) in CONFIGS_MAP"
        :key="name"
      >
        <external-link
          :href="config.url"
          :title="`ESLint Plugin ${name} GitHub Page`"
        >
          {{ name }}
        </external-link>
        <ul>
          <li
            v-for="plugin of config.plugins"
            :key="plugin.name"
          >
            <external-link
              :href="plugin.url"
              :title="`${plugin.name} GitHub Page`"
            >
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
