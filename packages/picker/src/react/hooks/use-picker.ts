import { useState, useRef, useMemo, useEffect } from 'react';
import BScroll, { createBScroll } from '@better-scroll/core';
import Wheel from '@better-scroll/wheel';
import { isArray } from '@shared/utils/check-type';
import { isHaveValue } from '@shared/utils/common';
import type { PickerProps, OriginData, PickerSelectItems } from '@shared/types/picker';
import type { PickerEmit } from '@shared/types/react-picker';
import { useDate } from './use-date';
import { useTime } from './use-time';

BScroll.use(Wheel);

export function usePicker({
  data,
  isShowPicker,
  anchor,
  swipeTime,
  type,
  setShowPicker,
  setAnchor,
  onCancel,
  onConfirm,
}: PickerProps & PickerEmit) {
  const [pickerData, setPickerData] = useState<OriginData[]>([]);
  const [wheels, setWheels] = useState<BScroll[]>([]);
  const wheelWrapper = useRef<HTMLDivElement | null>(null);

  const { dateList, setSelectYear, setSelectMonth, updateDateSelect, getDateAnchors } = useDate();
  const { timeList, updateDefaultTime, getTimeAnchors } = useTime();

  const isDate = useMemo(() => type === 'date', [type]);
  const isTime = useMemo(() => type === 'time', [type]);

  const pickerAnchors = useMemo(() => {
    if (isDate) return getDateAnchors!(anchor);
    if (isTime) return getTimeAnchors!(anchor);

    return isArray(anchor) ? anchor : [anchor];
  }, [isDate, isTime, anchor]);

  function setupPickerData(isUpdate = false) {
    if (isUpdate) {
      updatePickerData();
    } else {
      updateSelect();
    }

    pickerData.forEach((_, index) => createWheel(index));
    if (!isUpdate) scrollToAnchor();
    checkWheels();
  }

  function updatePickerData() {
    const builtIn = {
      date: dateList,
      time: timeList,
    };
    const pickerType = type as keyof typeof builtIn;
    const isCascadeData = isArray(data[0]);
    const pickerData = (isCascadeData ? [...data] : [data]) as OriginData[];

    setPickerData(builtIn[pickerType] ?? pickerData);
  }

  function updateSelect() {
    if (!isDate && !isTime) return;
    if (isDate) updateDateSelect(pickerAnchors);
    if (isTime && !isHaveValue(anchor)) {
      updateDefaultTime();
    }
  }

  function createWheel(index: number) {
    const node = wheelWrapper.current?.children[index] as HTMLElement;

    if (!node) return;
    let wheel = wheels[index];

    if (wheel) {
      wheel.refresh();
    } else {
      const bScroll = createBScroll(node, {
        wheel: {
          selectedIndex: 0,
          rotate: 25,
        },
        swipeTime,
      });

      setWheels(wheels => {
        return [...wheels, bScroll];
      });
      wheel = bScroll;
      wheel.on('scrollEnd', () => handleScrollEnd(index));
    }
    return wheel;
  }

  function handleScrollEnd(index: number) {
    if (!isDate || index === 2) return;
    const position = wheels[index].getSelectedIndex();
    const value = dateList![index][position];

    if (index === 0) setSelectYear(value);
    if (index === 1) setSelectMonth(value);

    setupPickerData(true);
  }

  function scrollToAnchor() {
    wheels.forEach((wheel, index) => {
      const targetPos = pickerAnchors?.[index];

      wheel.wheelTo(targetPos ?? 0);
    });
  }

  function checkWheels() {
    const DATA_LENGTH = pickerData.length;

    if (wheels.length <= DATA_LENGTH) return;
    const extraWheels = wheels.splice(DATA_LENGTH);

    setWheels(wheels => wheels.slice(0, DATA_LENGTH));
    extraWheels.forEach(wheel => wheel.destroy());
  }

  function cancel() {
    onCancel();
    closePicker();
  }

  function confirm() {
    const isInTransition = wheels.some(wheel => wheel.isInTransition);

    if (isInTransition) stopWheels();
    const { item, anchor } = getSelectedItem();

    onConfirm(item);
    setAnchor(anchor);
    closePicker();
  }

  function closePicker() {
    setShowPicker(false);
  }

  function stopWheels() {
    wheels.forEach(wheel => wheel.stop());
  }

  function getSelectedItem() {
    const { item, anchor } = wheels.reduce(
      (result, wheel, index) => {
        const position = wheel.getSelectedIndex();
        const data = pickerData[index][position];

        result.item.push(isTime ? +data : data);
        result.anchor.push(isDate ? data : position);
        return result;
      },
      { item: [], anchor: [] } as PickerSelectItems,
    );

    return item.length > 1 ? { item, anchor } : { item: item[0], anchor: anchor[0] };
  }

  useEffect(() => {
    setupPickerData(true);
  }, [data]);

  useEffect(() => {
    if (!isShowPicker) return;

    setupPickerData();
  }, [isShowPicker]);

  useEffect(() => {
    updateSelect();
    setupPickerData(true);
  }, [type]);

  return {
    pickerData,
    wheelWrapper,
    cancel,
    confirm,
    closePicker,
  };
}
