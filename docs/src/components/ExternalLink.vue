<script lang="ts" setup>
interface Props {
  href: string;
}

defineProps<Props>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="link"
  >
    <slot></slot>
  </a>
</template>
