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
      class="text-text h-5 w-5"
    />
  </external-link>
</template>
