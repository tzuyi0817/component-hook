<script lang="ts" setup>
defineOptions({ name: 'PageFooter' });
</script>

<template>
  <footer class="w-full border-t border-gutter px-6 py-8">
    <p class="message">Released under the MIT license</p>
    <p class="copyright">Copyright © 2024-present Component Hook</p>
  </footer>
</template>

<style lang="css" scoped>
.message,
.copyright {
  color: var(--text-color-secondary);
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
}
</style>
