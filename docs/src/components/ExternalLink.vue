<script lang="ts" setup>
interface Props {
  href: string;
  title: string;
}

defineProps<Props>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="link"
    :aria-label="title"
  >
    <slot></slot>
  </a>
</template>
