<script setup lang="ts">
defineEmits(['closeFullNavbar']);
</script>

<template>
  <nav @click="$emit('closeFullNavbar')">
    <router-link
      to="/component"
      class="link-item"
      active-class="active"
    >
      Component
    </router-link>
    <router-link
      to="/eslint"
      class="link-item"
      active-class="active"
    >
      ESLint Plugin
    </router-link>
  </nav>
</template>

<style lang="postcss" scoped>
.link-item {
  @apply transition-colors 
  hover:text-primary
  px-3
  py-4 
  border-b
  border-border-color 
  lg:border-b-2
  lg:border-transparent;

  &.active {
    @apply text-primary lg:border-primary lg:text-text-color;
  }
}
</style>
