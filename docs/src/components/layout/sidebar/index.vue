<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRoute, type RouteRecordRaw } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
import SidebarNav from './SidebarNav.vue';

const route = useRoute();
const children = route.matched[0].children;
const isSidebarOpen = ref(false);

const groupedChildren = computed(() => {
  const groupsMap = new Map();
  const result: RouteRecordRaw[] = [];

  for (const child of children) {
    const group = child.meta?.group ?? 'Other';

    if (!groupsMap.has(group)) {
      groupsMap.set(group, []);
    }
    const routes = groupsMap.get(group);

    routes.push(child);
  }

  for (const [group, routes] of groupsMap) {
    result.push({
      name: group,
      children: routes,
      redirect: '',
      path: '',
      meta: { title: group },
    });
  }
  return result;
});
</script>

<template>
  <sidebar-nav v-model:is-sidebar-open="isSidebarOpen" />

  <ul :class="['sidebar', { '-translate-x-full': !isSidebarOpen }]">
    <sidebar-item
      v-for="item of groupedChildren"
      :key="item.name"
      :item="item"
      @close-sidebar="isSidebarOpen = false"
    />
  </ul>
</template>

<style lang="postcss" scoped>
.sidebar {
  @apply fixed 
  px-8 
  py-12 
  w-72 
  transition-transform 
  duration-300 
  bg-bg-color 
  h-full 
  top-0
  z-10 
  flex
  flex-col
  gap-y-6
  lg:top-14 
  lg:px-12 
  lg:translate-x-0;
}
</style>
