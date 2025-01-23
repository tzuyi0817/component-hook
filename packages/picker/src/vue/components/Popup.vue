<script lang="ts" setup>
import { watch } from 'vue';

interface Props {
  teleport?: string;
  modelValue: boolean;
}

interface Emits {
  'update:modelValue': [boolean];
  open: [];
  close: [];
}

const props = withDefaults(defineProps<Props>(), {
  teleport: 'body',
});
const emits = defineEmits<Emits>();

watch(
  () => props.modelValue,
  value => {
    if (value) {
      document.body.style.overflow = 'hidden';
      emits('open');
    } else {
      document.body.style.overflow = '';
      emits('close');
    }
  },
  { immediate: true },
);
</script>

<template>
  <teleport :to="teleport">
    <transition name="component-hook-picker-fade">
      <div
        v-show="modelValue"
        class="component-hook-picker-mask"
        @click="$emit('update:modelValue', false)"
      ></div>
    </transition>

    <slot></slot>
  </teleport>
</template>
