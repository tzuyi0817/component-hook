import { useState, useMemo } from 'react';
import { isHaveValue, generateList, isLeapYear } from '../../shared/utils/common';
import type { PickerProps } from '../../shared/types/picker';

export function useDate() {
  const START_YEAR = 1900;
  const END_YEAR = 2100;
  const date = new Date();
  const defaultYear = date.getFullYear();
  const defaultMonth = date.getMonth() + 1;
  const defaultDay = date.getDate();
  const [selectYear, setSelectYear] = useState(defaultYear);
  const [selectMonth, setSelectMonth] = useState(defaultMonth);

  const yearList = generateList(START_YEAR, END_YEAR);
  const monthList = generateList(1, 12);

  const dayList = useMemo(() => {
    const thirty = [4, 6, 9, 11];
    const thirtyOne = [1, 3, 5, 7, 8, 10, 12];

    if (thirty.includes(selectMonth)) {
      return generateList(1, 30);
    }
    if (thirtyOne.includes(selectMonth)) {
      return generateList(1, 31);
    }
    if (isLeapYear(selectYear)) {
      return generateList(1, 29);
    }
    return generateList(1, 28);
  }, [selectMonth, selectYear]);

  const dateList = useMemo(() => {
    return [yearList, monthList, dayList];
  }, [dayList]);

  function getDateAnchors(anchor: PickerProps['anchor']) {
    const anchors = isHaveValue(anchor) ? anchor : [defaultYear, defaultMonth, defaultDay];

    return anchors.map((target, index) => {
      const pos = dateList[index].indexOf(target);
      return pos !== -1 ? pos : 0;
    });
  }

  function updateDateSelect(pickerAnchors: Array<number>) {
    const [year, month] = pickerAnchors;

    setSelectYear(dateList[0][year]);
    setSelectMonth(dateList[1][month]);
  }

  return {
    dateList,
    setSelectYear,
    setSelectMonth,
    updateDateSelect,
    getDateAnchors,
  };
}
