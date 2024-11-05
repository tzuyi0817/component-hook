<script setup lang="ts"></script>

<template>
  <nav>
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
  @apply transition-colors hover:text-primary p-4 border-b-2 border-transparent;

  &.active {
    @apply border-primary;
  }
}
</style>
