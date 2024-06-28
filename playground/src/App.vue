<script setup lang="ts">
import HeaderContainer from '@/components/Header.vue';
</script>

<template>
  <header-container />
  <main class="h-dvh overflow-y-auto flex flex-col items-center p-8 lg:p-12">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style lang="postcss">
.fade-enter-active {
  @apply transition-opacity duration-300 ease-out;
}

.fade-leave-active {
  @apply transition-opacity duration-300 ease-in;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
