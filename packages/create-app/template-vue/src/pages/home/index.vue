<script setup lang="ts">
import { SvgIcon } from '@/components/svg-icon';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      />
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <svg-icon
        name="vue"
        class="logo hover:drop-shadow-[0_0_2em_#42b883aa]"
      />
    </a>
  </div>

  <hello-world msg="Vite + Vue" />
</template>

<style lang="css" scoped>
.logo {
  width: 96px;
  height: 96px;
  margin: 0 auto;
  padding: 24px;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
}
</style>
