<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRoute, type RouteRecordRaw } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
import SidebarNav from './SidebarNav.vue';

defineOptions({ name: 'Sidebar' });

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

<style lang="css" scoped>
.sidebar {
  position: fixed;
  padding: 48px 32px;
  width: 288px;
  transition: translate 300ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--bg-color);
  height: 100%;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

@media (min-width: 1024px) {
  .sidebar {
    top: 56px;
    padding: 48px 48px;
    translate: 0;
  }
}
</style>
