import { isHaveValue, generateTime } from '../../shared/utils/common';
import type { PickerAnchor } from '../../shared/types';

export function useTime() {
  const hours = generateTime(0, 23);
  const minutes = generateTime(0, 59);
  const seconds = generateTime(0, 59);

  return {
    timeList: [hours, minutes, seconds],
    getTimeAnchors,
  };
}

function getTimeAnchors<T = PickerAnchor>(anchor: T) {
  const anchors = isHaveValue(anchor) ? anchor : getDefaultTime();

  return anchors.map(target => Number(target));
}

function getDefaultTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [hour, minute, second];
}
