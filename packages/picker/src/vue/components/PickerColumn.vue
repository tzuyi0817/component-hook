<script setup lang="ts">
import { toRef } from 'vue';
import { OPTION_HEIGHT, OPTION_ROTATE_FACTOR } from '../../shared/constants';
import { useScrollSnap } from '../hooks/use-scroll-snap';
import type { PickerColumn, PickerFields } from '../../shared/types';

interface Props {
  column: PickerColumn;
  fields: Required<PickerFields>;
  selectedIndex?: number;
}

interface Emits {
  change: [number];
}

const props = withDefaults(defineProps<Props>(), {
  selectedIndex: 0,
});
const emits = defineEmits<Emits>();

const { offsetY, transitionDuration, onPointerDown, onPointerMove, onPointerUp, stopInertialSliding, scrollToIndex } =
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
    class="chook-picker-column"
    @touchstart.passive="onPointerDown"
    @touchmove.passive="onPointerMove"
    @touchend.passive="onPointerUp"
    @touchcancel="onPointerUp"
    @mousedown.passive="onPointerDown"
    @mousemove.passive="onPointerMove"
    @mouseup.passive="onPointerUp"
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
        v-for="(option, index) in column"
        :key="option[fields.value]"
        class="chook-picker-column-item"
        role="button"
        tabindex="0"
        @click="onClick(index)"
      >
        <p
          class="chook-picker-column-label"
          :style="{
            transform: `rotate3d(1, 0, 0, ${(index * OPTION_HEIGHT + offsetY) * OPTION_ROTATE_FACTOR}deg)`,
          }"
        >
          {{ option[fields.label] }}
        </p>
      </li>
    </ul>
  </div>
</template>
