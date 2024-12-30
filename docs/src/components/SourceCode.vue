<script setup lang="ts">
interface Props {
  source: string;
  raw: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="source-code"
    v-html="decodeURIComponent(source)"
  ></div>
</template>
