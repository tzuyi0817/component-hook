<script setup lang="ts">
import SvgIcon from './SvgIcon.vue';

interface Props {
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
});
const checked = defineModel<boolean>({ required: true });

function handleChange(event: Event) {
  checked.value = (event.target as HTMLInputElement).checked;
}
</script>

<template>
  <div class="theme-switcher">
    <label class="theme-switch">
      <input
        type="checkbox"
        class="theme-input absolute w-0 h-0 opacity-0"
        role="switch"
        :checked="checked"
        :aria-checked="checked"
        :aria-disabled="disabled"
        aria-label="switch between dark and light themes"
        :disabled="disabled"
        tabindex="1"
        @change="handleChange"
      />
      <span :class="['theme-slider', { 'translate-x-5': checked }]">
        <svg-icon
          :name="checked ? 'dark' : 'light'"
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
