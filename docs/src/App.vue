<script setup lang="ts">
import { ref } from 'vue';
import HeaderContainer from '@/components/Header.vue';

const mainRef = ref<HTMLBaseElement | null>(null);

function scrollToTop() {
  mainRef.value?.scrollTo({ top: 0 });
}
</script>

<template>
  <header-container />
  <main
    ref="mainRef"
    class="h-dvh overflow-y-auto flex flex-col items-center p-8 lg:p-12"
  >
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
        @before-enter="scrollToTop"
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
