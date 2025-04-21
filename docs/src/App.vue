<script setup lang="ts">
import HeaderContainer from '@/components/layout/Header.vue';
import { useCopyCode } from '@/hooks/use-copy-code';
import { useMarkdownGroup } from '@/hooks/use-markdown-group';
import { scrollToTop } from '@/utils/common';

useMarkdownGroup();
useCopyCode();
</script>

<template>
  <header-container />

  <main class="w-screen lg:pt-14">
    <router-view v-slot="{ Component, route }">
      <transition
        name="fade"
        mode="out-in"
        @before-enter="() => scrollToTop()"
      >
        <component
          :is="Component"
          :key="route.matched[0]?.name"
        />
      </transition>
    </router-view>
  </main>
</template>

<style lang="css">
.fade-enter-active {
  transition: opacity 300ms cubic-bezier(0, 0, 0.2, 1);
}

.fade-leave-active {
  transition: opacity 300ms cubic-bezier(0.4, 0, 1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
