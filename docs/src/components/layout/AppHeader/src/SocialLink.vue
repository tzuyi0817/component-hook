<script setup lang="ts">
import { ExternalLink, SvgIcon } from '@/components/common';

interface Props {
  href: string;
  title: string;
  icon: string;
}

defineProps<Props>();
</script>

<template>
  <external-link
    :href="href"
    :title="title"
  >
    <svg-icon
      :name="icon"
      class="w-5 h-5 text-text"
    />
  </external-link>
</template>
