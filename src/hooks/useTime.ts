import { ref } from 'vue';
import { isHaveValue } from '@/utils/common';
import type { PickerProps } from "@/types";

export default () => {
  const hours = generateTime(0, 23);
  const minutes = generateTime(0, 59);
  const seconds = generateTime(0, 59);
  const defaultTime = ref<number[]>([]);

  updateDefaultTime();

  function generateTime(start: number, end: number) {
    const result: Array<string> = [];
    for (let index = start; index <= end; index++) {
      result.push(`${index}`.padStart(2, '0'));
    }
    return result;
  }

  function updateDefaultTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    defaultTime.value = [hour, minute, seconds];
  }

  function getTimeAnchors(anchor: PickerProps['anchor']) {
    const anchors = isHaveValue(anchor) ? anchor : defaultTime.value;
    return anchors.map(target => +target);
  }

  return {
    timeList: [hours, minutes, seconds],
    updateDefaultTime,
    getTimeAnchors,
  }
}
