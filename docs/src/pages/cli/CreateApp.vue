<script lang="ts" setup>
import creteAppMd from '@/markdowns/create-app/index.md?raw';
import { md } from '@/utils/highlight';
</script>

<template>
  <div
    class="markdown-doc"
    v-html="md.render(creteAppMd)"
  ></div>
</template>
