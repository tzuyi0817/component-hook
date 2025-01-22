import { type Ref, isRef, readonly, ref } from 'vue';
import { usePointer } from './use-pointer';
import {
  BASE_ROOT_FONT_SIZE,
  DEFAULT_DURATION,
  INERTIAL_DISTANCE,
  INERTIAL_FACTOR,
  INERTIAL_TIME,
  OPTION_HEIGHT,
} from '../../shared/constants';

interface ScrollSnapProps<T> {
  column: Ref<T[]> | T[];
  onChange?: (index: number) => void;
}

export function useScrollSnap<T>({ column, onChange }: ScrollSnapProps<T>) {
  const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
  const remBaseValue = rootFontSize / BASE_ROOT_FONT_SIZE;
  const offsetY = ref(0);
  const transitionDuration = ref(0);
  const pointer = usePointer();
  let startOffset = 0;
  let touchStartTime = 0;
  let inertialOffset = 0;
  let moving = false;
  let changeSelected: (() => void) | null = null;

  function onPointerDown(event: MouseEvent | TouchEvent) {
    pointer.start(event);
    moving = true;
    transitionDuration.value = 0;
    touchStartTime = Date.now();
    startOffset = offsetY.value;
    inertialOffset = startOffset;
    changeSelected = null;
  }

  function onPointerMove(event: MouseEvent | TouchEvent) {
    const isPointerUp = pointer.move(event);

    if (isPointerUp) return;
    const n = isRef(column) ? column.value.length : column.length;
    const moveOffset = startOffset + pointer.deltaY.value;
    const minOffset = getActualHeight((n - 1) * -OPTION_HEIGHT);
    const newOffset = Math.min(Math.max(moveOffset, minOffset), 0);
    const now = Date.now();

    offsetY.value = newOffset;
    if (now - touchStartTime <= INERTIAL_TIME) return;

    touchStartTime = now;
    inertialOffset = newOffset;
  }

  function onPointerUp() {
    pointer.stop();

    const distance = offsetY.value - inertialOffset;
    const duration = Date.now() - touchStartTime;

    if (duration < INERTIAL_TIME && Math.abs(distance) > INERTIAL_DISTANCE) {
      inertialSliding(distance, duration);
      return;
    }
    const index = getIndexByOffset(offsetY.value);

    transitionDuration.value = DEFAULT_DURATION;
    updateOffsetByIndex(index);
    moving = false;
  }

  function inertialSliding(distance: number, duration: number) {
    const speed = Math.abs(distance / duration);
    const offset = offsetY.value + (speed / INERTIAL_FACTOR) * (distance < 0 ? -1 : 1);
    const index = getIndexByOffset(offset);

    transitionDuration.value = INERTIAL_TIME;
    updateOffsetByIndex(index);
  }

  function stopInertialSliding() {
    transitionDuration.value = 0;
    moving = false;

    if (!changeSelected) return;
    changeSelected();
    changeSelected = null;
  }

  function updateOffsetByIndex(index: number) {
    const offset = -index * getActualHeight(OPTION_HEIGHT);
    const changeCallback = () => onChange?.(index);

    if (moving && offset !== offsetY.value) {
      changeSelected = changeCallback;
    } else {
      changeCallback();
    }
    offsetY.value = offset;
  }

  function getIndexByOffset(offset: number) {
    const n = isRef(column) ? column.value.length : column.length;
    const index = Math.round(-offset / getActualHeight(OPTION_HEIGHT));

    if (index < 0) return 0;
    if (index >= n) return n - 1;
    return index;
  }

  function getActualHeight(height: number) {
    return height * remBaseValue;
  }

  function scrollToIndex(index: number, behavior: ScrollBehavior = 'auto') {
    if (moving && behavior === 'smooth') return;

    changeSelected = null;
    transitionDuration.value = behavior === 'smooth' ? DEFAULT_DURATION : 0;
    updateOffsetByIndex(index);
  }

  return {
    offsetY: readonly(offsetY),
    transitionDuration: readonly(transitionDuration),
    onPointerDown,
    onPointerMove,
    onPointerUp,
    stopInertialSliding,
    scrollToIndex,
  };
}
