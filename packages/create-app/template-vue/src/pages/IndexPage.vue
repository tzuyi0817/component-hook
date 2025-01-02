<script setup lang="ts">
import HelloWorld from '@/components/indexPage/HelloWorld.vue';
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

<style lang="postcss" scoped>
.logo {
  @apply w-24 h-24 p-6 mx-auto will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa];
}
</style>
