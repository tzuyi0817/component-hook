<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const children = route.matched[0].children;
</script>

<template>
  <ul class="sidebar fixed p-12">
    <li
      v-for="child of children"
      :key="child.name"
      class="flex"
    >
      <router-link
        :to="child.path"
        class="flex-1 px-4 py-2.5 rounded-lg text-sm hover:text-primary transition-colors"
      >
        {{ child.meta?.title }}
      </router-link>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-primary bg-blue-500/15;
}
</style>
