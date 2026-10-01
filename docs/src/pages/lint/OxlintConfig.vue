<script lang="ts" setup>
import indexMd from '@/markdowns/oxlint-config/index.md?raw';
import { md } from '@/utils/highlight';
</script>

<template>
  <div
    class="markdown-doc"
    v-html="md.render(indexMd)"
  ></div>
</template>
