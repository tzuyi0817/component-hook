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
      to="/cli"
      class="link-item"
      active-class="active"
    >
      CLI
    </router-link>

    <router-link
      to="/eslint"
      class="link-item"
      active-class="active"
    >
      ESLint
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
  font-medium
  lg:border-b-2
  lg:border-transparent;

  &.active {
    @apply text-primary lg:border-primary lg:text-text-color hover:text-primary;
  }
}
</style>
