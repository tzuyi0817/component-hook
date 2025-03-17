<script lang="ts" setup>
import { watch } from 'vue';

interface Props {
  teleport?: string | Element;
  modelValue: boolean;
}

interface Emits {
  'update:modelValue': [isShow: boolean];
  open: [];
  close: [];
  closed: [];
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
    <transition name="chook-picker-fade">
      <div
        v-show="modelValue"
        class="chook-picker-mask"
        @click="$emit('update:modelValue', false)"
      ></div>
    </transition>

    <transition
      name="chook-picker-slide"
      @after-leave="$emit('closed')"
    >
      <div
        v-show="modelValue"
        class="chook-picker-container"
      >
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>
