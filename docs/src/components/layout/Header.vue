<script setup lang="ts">
import { ref } from 'vue';
import Hamburger from '../Hamburger.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import SocialLink from '../SocialLink.vue';
import Navbar from './Navbar.vue';
import { useLockScreen } from '@/hooks/use-lock-screen';
import { useResize } from '@/hooks/use-resize';

const isShowFullNavbar = ref(false);
const { lock, cleanup } = useLockScreen();

useResize(isShowFullNavbar, () => {
  isShowFullNavbar.value = false;
});
</script>

<template>
  <header class="header">
    <div class="flex items-center justify-between text-sm">
      <router-link
        to="/home"
        class="flex items-center"
      >
        <img
          class="w-8 mr-2 drop-shadow"
          src="/logo.png"
          alt="Component Hook Logo"
        />

        <span class="text-base font-medium">Component Hook</span>
      </router-link>

      <transition
        name="bounce"
        @enter="lock"
        @after-leave="cleanup"
      >
        <div
          v-if="isShowFullNavbar"
          class="navbar-full-screen"
        >
          <navbar
            class="flex flex-col"
            @close-full-navbar="isShowFullNavbar = false"
          />

          <div class="bg-code-bg-color rounded-lg p-3 mt-4 flex justify-between">
            <p>Color Theme</p>
            <theme-switcher class="px-3" />
          </div>
        </div>
      </transition>

      <div class="flex items-center">
        <navbar class="hidden lg:flex" />

        <theme-switcher class="px-3 hidden lg:flex" />

        <social-link
          class="px-3"
          href="https://github.com/tzuyi0817/component-hook"
          title="GitHub"
          icon="github"
        />
        <hamburger v-model="isShowFullNavbar" />
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply w-full 
  top-0 
  left-0 
  px-4 
  border-b 
  border-b-border-color 
  box-border 
  bg-bg-color 
  z-10 
  h-[var(--header-height)]
  lg:px-12 
  lg:fixed;
}

.navbar-full-screen {
  @apply absolute left-0 bg-bg-color w-full h-dvh top-[var(--header-height)] z-[15] px-8 py-6;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
