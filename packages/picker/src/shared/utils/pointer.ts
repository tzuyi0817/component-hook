import { TAP_OFFSET } from '../constants';
import type { Direction } from '../types';
import { getDirection } from './common';

export function createPointerTracker() {
  const pointer = {
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
  };
  let direction: Direction = '';
  let isTap = true;

  const isVertical = () => direction === 'vertical';
  const isHorizontal = () => direction === 'horizontal';

  function reset() {
    pointer.deltaX = 0;
    pointer.deltaY = 0;
    pointer.offsetX = 0;
    pointer.offsetY = 0;
    direction = '';
    isTap = true;
  }

  function start(event: MouseEvent | TouchEvent) {
    const pointerEvent = 'touches' in event ? event.touches[0] : event;

    reset();
    pointer.startX = pointerEvent.clientX;
    pointer.startY = pointerEvent.clientY;
  }

  function move(event: MouseEvent | TouchEvent) {
    if (!pointer.startX || !pointer.startY) return true;
    const pointerEvent = 'touches' in event ? event.touches[0] : event;

    // safari back will set clientX to negative number
    pointer.deltaX = Math.max(pointerEvent.clientX, 0) - pointer.startX;
    pointer.deltaY = pointerEvent.clientY - pointer.startY;
    pointer.offsetX = Math.abs(pointer.deltaX);
    pointer.offsetY = Math.abs(pointer.deltaY);

    // lock direction when distance is greater than a certain value
    const LOCK_DIRECTION_DISTANCE = 10;

    if (!direction || (pointer.offsetX < LOCK_DIRECTION_DISTANCE && pointer.offsetY < LOCK_DIRECTION_DISTANCE)) {
      direction = getDirection(pointer.offsetX, pointer.offsetY);
    }

    if (isTap && (pointer.offsetX > TAP_OFFSET || pointer.offsetY > TAP_OFFSET)) {
      isTap = false;
    }
  }

  function stop() {
    pointer.startX = 0;
    pointer.startY = 0;
  }

  return {
    pointer,
    move,
    start,
    stop,
    reset,
    isVertical,
    isHorizontal,
  };
}
