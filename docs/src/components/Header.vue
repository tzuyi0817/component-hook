<script setup lang="ts"></script>

<template>
  <header class="fixed w-full top-0 left-0 px-4 border-b border-b-border-color bg-bg-color z-10 lg:px-12">
    <nav class="flex items-center">
      <router-link to="/home">
        <img
          class="w-8 mr-2"
          src="/logo.png"
          alt="Component Hook Logo"
        />
      </router-link>
      <router-link
        to="/picker"
        class="link-item"
      >
        Picker
      </router-link>
      <router-link
        to="/pdf-canvas"
        class="link-item"
      >
        PDF Canvas
      </router-link>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
.link-item {
  @apply transition-colors hover:text-primary p-4 border-b-2 border-transparent;
  &.router-link-active {
    @apply border-primary;
  }
}
</style>
