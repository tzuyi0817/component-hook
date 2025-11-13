import { useMemo, useRef, useState } from 'react';
import {
  BASE_ROOT_FONT_SIZE,
  DEFAULT_DURATION,
  INERTIAL_DISTANCE,
  INERTIAL_FACTOR,
  INERTIAL_TIME,
  OPTION_HEIGHT,
} from '../../shared/constants';
import { createPointerTracker } from '../../shared/utils/pointer';

interface ScrollSnapProps<T> {
  column: T[];
  onChange?: (index: number) => void;
}

export function useScrollSnap<T>({ column, onChange }: ScrollSnapProps<T>) {
  const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
  const remBaseValue = rootFontSize / BASE_ROOT_FONT_SIZE;
  const [transitionDuration, setTransitionDuration] = useState(0);
  const columnRef = useRef<HTMLUListElement>(null);
  const offsetYRef = useRef(0);
  const startOffset = useRef(0);
  const touchStartTime = useRef(0);
  const inertialOffset = useRef(0);
  const moving = useRef(false);
  const changeSelected = useRef<(() => void) | null>(null);

  const { pointer, start, move, stop } = useMemo(() => createPointerTracker(), []);

  function getActualHeight(height: number) {
    return height * remBaseValue;
  }

  function getIndexByOffset(offset: number) {
    const n = column.length;
    const index = Math.round(-offset / getActualHeight(OPTION_HEIGHT));

    if (index < 0) return 0;
    if (index >= n) return n - 1;
    return index;
  }

  function updateOffsetByIndex(index: number) {
    const offset = -index * getActualHeight(OPTION_HEIGHT);
    const changeCallback = () => onChange?.(index);

    if (moving.current && offset !== offsetYRef.current) {
      changeSelected.current = changeCallback;
    } else {
      changeCallback();
    }
    setOffsetY(offset);
  }

  function onPointerDown(event: React.MouseEvent | React.TouchEvent) {
    start(event as unknown as MouseEvent | TouchEvent);
    moving.current = true;
    setTransitionDuration(0);
    touchStartTime.current = Date.now();
    startOffset.current = offsetYRef.current;
    inertialOffset.current = startOffset.current;
    changeSelected.current = null;
  }

  function onPointerMove(event: React.MouseEvent | React.TouchEvent) {
    const isPointerUp = move(event as unknown as MouseEvent | TouchEvent);

    if (isPointerUp) return;
    const n = column.length;
    const moveOffset = startOffset.current + pointer.deltaY;
    const minOffset = getActualHeight((n - 1) * -OPTION_HEIGHT);
    const newOffset = Math.min(Math.max(moveOffset, minOffset), 0);
    const now = Date.now();

    setOffsetY(newOffset);
    if (now - touchStartTime.current <= INERTIAL_TIME) return;

    touchStartTime.current = now;
    inertialOffset.current = newOffset;
  }

  function setOffsetY(offset: number) {
    offsetYRef.current = offset;

    if (columnRef.current) {
      columnRef.current.style.setProperty('--offset-y', `${offset}`);
    }
  }

  function onPointerUp() {
    stop();

    const distance = offsetYRef.current - inertialOffset.current;
    const duration = Date.now() - touchStartTime.current;

    if (duration < INERTIAL_TIME && Math.abs(distance) > INERTIAL_DISTANCE) {
      inertialSliding(distance, duration);
      return;
    }
    const index = getIndexByOffset(offsetYRef.current);

    setTransitionDuration(DEFAULT_DURATION);
    updateOffsetByIndex(index);
    moving.current = false;
  }

  function inertialSliding(distance: number, duration: number) {
    const speed = Math.abs(distance / duration);
    const offset = offsetYRef.current + (speed / INERTIAL_FACTOR) * (distance < 0 ? -1 : 1);
    const index = getIndexByOffset(offset);

    setTransitionDuration(INERTIAL_TIME);
    updateOffsetByIndex(index);
  }

  function stopInertialSliding() {
    setTransitionDuration(0);
    moving.current = false;

    if (!changeSelected.current) return;
    changeSelected.current();
    changeSelected.current = null;
  }

  function scrollToIndex(index: number, behavior: ScrollBehavior = 'auto') {
    if (moving.current && behavior === 'smooth') return;

    changeSelected.current = null;
    moving.current = behavior === 'smooth';
    setTransitionDuration(behavior === 'smooth' ? DEFAULT_DURATION : 0);
    updateOffsetByIndex(index);
  }

  return {
    columnRef,
    transitionDuration,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    stopInertialSliding,
    scrollToIndex,
  };
}
