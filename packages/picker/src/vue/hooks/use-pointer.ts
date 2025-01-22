import { ref } from 'vue';
import { getDirection } from '../../shared/utils/common';
import { TAP_OFFSET } from '../../shared/constants';
import type { Direction } from '../../shared/types';

export function usePointer() {
  const startX = ref(0);
  const startY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const direction = ref<Direction>('');
  const isTap = ref(true);

  const isVertical = () => direction.value === 'vertical';
  const isHorizontal = () => direction.value === 'horizontal';

  const reset = () => {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = '';
    isTap.value = true;
  };

  const start = (event: MouseEvent | TouchEvent) => {
    const pointer = event instanceof TouchEvent ? event.touches[0] : event;

    reset();
    startX.value = pointer.clientX;
    startY.value = pointer.clientY;
  };

  const move = (event: MouseEvent | TouchEvent) => {
    if (!startX.value || !startY.value) return true;
    const pointer = event instanceof TouchEvent ? event.touches[0] : event;

    // safari back will set clientX to negative number
    deltaX.value = Math.max(pointer.clientX, 0) - startX.value;
    deltaY.value = pointer.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);

    // lock direction when distance is greater than a certain value
    const LOCK_DIRECTION_DISTANCE = 10;

    if (!direction.value || (offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE)) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }

    if (isTap.value && (offsetX.value > TAP_OFFSET || offsetY.value > TAP_OFFSET)) {
      isTap.value = false;
    }
  };

  const stop = () => {
    startX.value = 0;
    startY.value = 0;
  };

  return {
    move,
    start,
    stop,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
    isTap,
  };
}
