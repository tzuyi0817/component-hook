import { useState } from 'react';
import { isHaveValue, generateTime } from '@shared/utils/common';
import type { PickerProps } from '@shared/types/picker';

export function useTime() {
  const hours = generateTime(0, 23);
  const minutes = generateTime(0, 59);
  const seconds = generateTime(0, 59);
  const [defaultTime, setDefaultTime] = useState<number[]>([]);

  updateDefaultTime();

  function updateDefaultTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    setDefaultTime([hour, minute, second]);
  }

  function getTimeAnchors(anchor: PickerProps['anchor']) {
    const anchors = isHaveValue(anchor) ? anchor : defaultTime;

    return anchors.map(target => +target);
  }

  return {
    timeList: [hours, minutes, seconds],
    updateDefaultTime,
    getTimeAnchors,
  };
}
