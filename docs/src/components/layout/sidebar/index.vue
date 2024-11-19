<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import SidebarNav from './SidebarNav.vue';
import SidebarItem from './SidebarItem.vue';

const route = useRoute();
const children = route.matched[0].children;
const isSidebarOpen = ref(false);
</script>

<template>
  <sidebar-nav v-model:is-sidebar-open="isSidebarOpen" />

  <ul :class="['sidebar', { '-translate-x-full': !isSidebarOpen }]">
    <sidebar-item
      v-for="item of children"
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
  lg:top-14 
  lg:px-12 
  lg:translate-x-0;
}
</style>
