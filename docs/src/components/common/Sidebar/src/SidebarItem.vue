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
      <p class="mb-2 font-bold">{{ item.meta?.title }}</p>

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
      class="hover:text-primary flex-1 rounded-lg px-4 py-2.5 text-sm transition-colors"
      @click="$emit('closeSidebar')"
    >
      {{ item.meta?.title }}
    </router-link>
  </li>
</template>

<style lang="css" scoped>
.router-link-active {
  color: var(--primary);
  background-color: #3b82f626;
}
</style>
