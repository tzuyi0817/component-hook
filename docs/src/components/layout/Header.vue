<script setup lang="ts"></script>

<template>
  <header class="w-full top-0 left-0 px-4 border-b border-b-border-color bg-bg-color z-10 lg:px-12 lg:fixed">
    <div class="flex items-center justify-between text-sm">
      <div class="flex items-center">
        <router-link to="/home">
          <img
            class="w-8 mr-2"
            src="/logo.png"
            alt="Component Hook Logo"
          />
        </router-link>
      </div>

      <nav class="flex">
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
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.link-item {
  @apply transition-colors hover:text-primary p-4 border-b-2 border-transparent;
  &.active {
    @apply border-primary;
  }
}
</style>
