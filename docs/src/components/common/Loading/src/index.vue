<script setup lang="ts">
defineOptions({ name: 'Loading' });
</script>

<template>
  <div class="loading">
    <p class="loading-text animate-pulse font-mono">Loading...</p>
  </div>
</template>

<style lang="css" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
</style>
