<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import SvgIcon from '@/components/SvgIcon.vue';

const isSidebarOpen = ref(false);
const route = useRoute();
const children = route.matched[0].children;
</script>

<template>
  <div class="sidebar-nav">
    <div
      role="button"
      class="flex items-center gap-2"
      @click="isSidebarOpen = true"
    >
      <svg-icon
        name="menu"
        class="w-5 h-5 text-[#606266]"
      />
      Menu
    </div>
  </div>

  <div
    :class="['sidebar-mask', { hidden: !isSidebarOpen }]"
    @click="isSidebarOpen = false"
  ></div>

  <ul :class="['sidebar', { '-translate-x-full': !isSidebarOpen }]">
    <li
      v-for="child of children"
      :key="child.name"
      class="flex"
    >
      <router-link
        :to="child.path"
        class="flex-1 px-4 py-2.5 rounded-lg text-sm hover:text-primary transition-colors"
        @click="isSidebarOpen = false"
      >
        {{ child.meta?.title }}
      </router-link>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.sidebar {
  @apply fixed px-8 py-12 w-72 transition-transform duration-300 bg-bg-color h-full top-0 z-10 lg:top-14 lg:px-12 lg:translate-x-0;
  &-mask {
    @apply fixed w-full h-full inset-0 bg-black/60 z-10 lg:hidden animate-[fadeIn_0.6s];
  }
  &-nav {
    @apply sticky top-0 z-10 px-4 py-3.5 border-b border-b-border-color bg-bg-color lg:hidden;
  }
}

.router-link-active {
  @apply text-primary bg-blue-500/15;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
