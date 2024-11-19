<script setup lang="ts">
import { type RouteRecordRaw } from 'vue-router';

interface Props {
  item: RouteRecordRaw;
}

defineProps<Props>();
defineEmits(['closeSidebar']);
</script>

<template>
  <li class="flex flex-col">
    <template v-if="item.children">
      <p class="font-bold mb-2">{{ item.meta?.title }}</p>

      <ul class="w-full">
        <sidebar-item
          v-for="child of item.children"
          :key="child.name"
          :item="child"
          @close-sidebar="$emit('closeSidebar')"
        />
      </ul>
    </template>

    <router-link
      v-else
      :to="item.path"
      class="flex-1 px-4 py-2.5 rounded-lg text-sm transition-colors hover:text-primary"
      @click="$emit('closeSidebar')"
    >
      {{ item.meta?.title }}
    </router-link>
  </li>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-primary bg-blue-500/15;
}
</style>
