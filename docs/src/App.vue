<script setup lang="ts">
import HeaderContainer from '@/components/layout/Header.vue';
import { useMarkdownGroup } from '@/hooks/use-markdown-group';
import { useCopyCode } from '@/hooks/use-copy-code';
import { scrollToTop } from '@/utils/common';

useMarkdownGroup();
useCopyCode();
</script>

<template>
  <header-container />

  <main class="w-screen lg:pt-14">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
        @before-enter="() => scrollToTop()"
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
