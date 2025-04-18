<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useConfigStore } from '@/stores';

defineProps<{ msg: string }>();

const { locale } = useI18n();
const { version } = useConfigStore();
const count = ref(0);

function changeLocale() {
  locale.value = locale.value === 'en-US' ? 'zh-TW' : 'en-US';
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="p-8">
    <button @click="count++">count is {{ count }}</button>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a
      href="https://github.com/vuejs/language-tools"
      target="_blank"
      >Volar</a
    >
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <p class="read-the-docs">
    {{ version }}
  </p>
  <button @click="changeLocale">
    {{ $t('language') }}
  </button>
</template>

<style lang="css" scoped>
.read-the-docs {
  color: #888;
}
</style>
