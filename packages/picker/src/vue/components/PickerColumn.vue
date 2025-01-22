<script setup lang="ts">
import { toRef } from 'vue';
import { OPTION_HEIGHT, OPTION_ROTATE_FACTOR } from '../../shared/constants';
import { useScrollSnap } from '../hooks/use-scroll-snap';
import type { PickerColumn } from '../../shared/types';

interface Props {
  column: PickerColumn;
  selectedIndex?: number;
}

interface Emits {
  change: [number];
}

const props = withDefaults(defineProps<Props>(), {
  selectedIndex: 0,
});
const emits = defineEmits<Emits>();

const { offsetY, transitionDuration, onTouchStart, onTouchMove, onTouchEnd, stopInertialSliding, scrollToIndex } =
  useScrollSnap({
    column: toRef(props, 'column'),
    onChange: onSelectedChange,
  });

function onSelectedChange(index: number) {
  if (index === props.selectedIndex) return;

  emits('change', index);
}

function scrollToSelected(index = props.selectedIndex, behavior?: ScrollBehavior) {
  scrollToIndex(index, behavior);
}

function onClick(index: number) {
  if (index === props.selectedIndex) return;

  scrollToSelected(index, 'smooth');
}

defineExpose({ scrollToSelected });
</script>

<template>
  <div
    class="component-hook-picker-column"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <ul
      :style="{
        overflowY: 'hidden',
        transform: `translate3d(0, ${offsetY}px, 0)`,
        transitionDuration: `${transitionDuration}ms`,
        transitionProperty: transitionDuration ? 'all' : 'none',
      }"
      @transitionend="stopInertialSliding"
    >
      <li
        v-for="({ label, value }, index) in column"
        :key="value"
        class="component-hook-picker-column-item"
        @click="onClick(index)"
      >
        <p
          class="component-hook-picker-column-label"
          :style="{
            transform: `rotate3d(1, 0, 0, ${(index * OPTION_HEIGHT + offsetY) * OPTION_ROTATE_FACTOR}deg)`,
          }"
        >
          {{ label }}
        </p>
      </li>
    </ul>
  </div>
</template>
