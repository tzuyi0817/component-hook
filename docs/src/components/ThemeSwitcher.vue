<script setup lang="ts">
import { watchEffect } from 'vue';
import prismVs from 'prism-themes/themes/prism-vs.css?url';
import prismVscDark from 'prism-themes/themes/prism-vsc-dark-plus.css?url';
import SvgIcon from './SvgIcon.vue';
import { useMediaQuery } from '@/hooks/use-media-query';

const isDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

function handleChange(event: Event) {
  isDarkTheme.value = (event.target as HTMLInputElement).checked;
}

watchEffect(() => {
  const themeStylesheet = document.querySelector('#dynamic-theme');

  document.documentElement.classList.toggle('dark-scheme', isDarkTheme.value);

  if (!themeStylesheet || !(themeStylesheet instanceof HTMLLinkElement)) return;

  themeStylesheet.href = isDarkTheme.value ? prismVscDark : prismVs;
});
</script>

<template>
  <div class="theme-switcher">
    <label class="theme-switch">
      <input
        type="checkbox"
        class="theme-input absolute w-0 h-0 opacity-0"
        role="switch"
        :checked="isDarkTheme"
        :aria-checked="isDarkTheme"
        :aria-disabled="isDarkTheme"
        aria-label="switch between dark and light themes"
        @change="handleChange"
      />
      <span :class="['theme-slider', { 'translate-x-5': isDarkTheme }]">
        <svg-icon
          :name="isDarkTheme ? 'dark' : 'light'"
          class="w-3.5 h-3.5 text-text-color"
        />
      </span>
    </label>
  </div>
</template>

<style lang="postcss" scoped>
.theme-switch {
  @apply relative 
  flex 
  items-center 
  h-5
  min-w-10
  rounded-full
  border
  border-border-color 
  transition-[background-color_border-color]
  bg-switch-bg-color
  cursor-pointer 
  duration-300;
}

.theme-slider {
  @apply w-3.5 h-3.5 absolute rounded-full left-0.5 transition-transform duration-300 bg-bg-color;
}
</style>
