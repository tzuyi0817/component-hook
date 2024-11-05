<script setup lang="ts">
import { ref } from 'vue';
import Hamburger from '../Hamburger.vue';
import Navbar from './Navbar.vue';
import { useLockScreen } from '@/hooks/use-lock-screen';

const isShowFullNavbar = ref(false);
const { lock, cleanup } = useLockScreen();
</script>

<template>
  <header class="header">
    <div class="flex items-center justify-between text-sm">
      <router-link to="/home">
        <img
          class="w-8 mr-2 drop-shadow"
          src="/logo.png"
          alt="Component Hook Logo"
        />
      </router-link>

      <transition
        name="fade"
        @enter="lock"
        @after-leave="cleanup"
      >
        <div
          v-if="isShowFullNavbar"
          class="navbar-full-screen"
        >
          <navbar class="flex flex-col" />
        </div>
      </transition>

      <navbar class="hidden lg:flex" />
      <hamburger v-model="isShowFullNavbar" />
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
  @apply absolute left-0 bg-bg-color w-full h-dvh top-[var(--header-height)] z-[15] px-8;
}
</style>
