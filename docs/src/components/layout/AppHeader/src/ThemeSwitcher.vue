<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import { SvgIcon } from '@/components/common';
import { usePrefersTheme } from '@/hooks/use-prefers-theme';

const TRANSITION_DURATION = 400;
const isDarkTheme = usePrefersTheme('dark');
const themeSwitcherRef = useTemplateRef<HTMLLinkElement>('theme-switcher');

async function handleChange(event: Event) {
  const isDark = (event.target as HTMLInputElement).checked;

  await beforeChange(isDark);
  changeTheme(isDark);
  isDarkTheme.value = isDark;
}

function beforeChange(isDark: boolean) {
  return new Promise(resolve => {
    const isReducedMotion = globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReducedMotion || !themeSwitcherRef.value) {
      resolve(true);
      return;
    }
    const rect = themeSwitcherRef.value.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const distalRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const ratioX = (100 * x) / innerWidth;
    const ratioY = (100 * y) / innerHeight;
    const referR = Math.hypot(innerWidth, innerHeight) / Math.SQRT2;
    const ratioR = (100 * distalRadius) / referR;

    const transition = document.startViewTransition(() => {
      resolve(true);
    });

    transition.ready.then(() => {
      const clipPath = [`circle(${ratioR}% at ${ratioX}% ${ratioY}%)`, `circle(0% at ${ratioX}% ${ratioY}%)`];

      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath : clipPath.toReversed(),
        },
        {
          duration: TRANSITION_DURATION,
          easing: 'ease-in',
          fill: 'both',
          pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
        },
      );
    });
  });
}

function changeTheme(isDark: boolean) {
  document.documentElement.classList.toggle('dark-scheme', isDark);
}

onMounted(() => {
  changeTheme(isDarkTheme.value);
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
          class="w-3 h-3 text-text"
        />
      </span>
    </label>
  </div>
</template>

<style lang="css" scoped>
.theme-switch {
  position: relative;
  display: flex;
  align-items: center;
  height: 20px;
  min-width: 40px;
  border-radius: 9999px;
  border: 1px solid var(--border-color);
  background-color: var(--switch-bg-color);
  cursor: pointer;
}

.theme-slider {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 3px;
  left: 2px;
  border-radius: 9999px;
  background-color: var(--bg-color);
  transition: translate 300ms cubic-bezier(0, 0, 0.2, 1);
}
</style>
