<script setup lang="ts">
import HeaderContainer from '@/components/Header.vue';
</script>

<template>
  <header-container />
  <main class="h-dvh overflow-y-auto p-8 lg:p-12">
    <router-view />
  </main>
</template>

<style></style>
