<script lang="ts" setup>
import indexMd from '@/markdowns/eslint-plugin/index.md?raw';
import { md } from '@/utils/highlight';
</script>

<template>
  <div class="container">
    <div
      class="markdown-doc"
      v-html="md.render(indexMd)"
    ></div>
  </div>
</template>
