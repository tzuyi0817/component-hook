<script setup lang="ts">
import { watchEffect, useTemplateRef, nextTick } from 'vue';
import prismVs from 'prism-themes/themes/prism-vs.css?url';
import prismVscDark from 'prism-themes/themes/prism-vsc-dark-plus.css?url';
import SvgIcon from './SvgIcon.vue';
import { usePrefersTheme } from '@/hooks/use-prefers-theme';

const isDarkTheme = usePrefersTheme('dark');
const themeSwitcherRef = useTemplateRef<HTMLLinkElement>('theme-switcher');

async function handleChange(event: Event) {
  const isDark = (event.target as HTMLInputElement).checked;

  await beforeChange();

  isDarkTheme.value = isDark;
}

function beforeChange() {
  return new Promise(resolve => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReducedMotion || !themeSwitcherRef.value) {
      resolve(true);
      return;
    }
    const rect = themeSwitcherRef.value.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const distalRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(async () => {
      resolve(true);
      await nextTick();
    });

    transition.ready.then(() => {
      const clipPath = [`circle(${distalRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`];

      document.documentElement.animate(
        {
          clipPath: isDarkTheme.value ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 300,
          easing: 'ease-in',
          pseudoElement: isDarkTheme.value ? '::view-transition-old(root)' : '::view-transition-new(root)',
        },
      );
    });
  });
}

watchEffect(() => {
  const themeStylesheet = document.querySelector('#dynamic-theme');

  document.documentElement.classList.toggle('dark-scheme', isDarkTheme.value);

  if (!themeStylesheet || !(themeStylesheet instanceof HTMLLinkElement)) return;

  themeStylesheet.href = isDarkTheme.value ? prismVscDark : prismVs;
});
</script>

<template>
  <div
    ref="theme-switcher"
    class="theme-switcher"
  >
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
          class="w-3 h-3 text-text-color"
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
  @apply w-3.5 h-3.5 top-[3px] absolute rounded-full left-0.5 transition-transform duration-300 bg-bg-color;
}
</style>
