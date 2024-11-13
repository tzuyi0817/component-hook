import { useState, useRef, useMemo, useEffect } from 'react';
import BScroll, { createBScroll } from '@better-scroll/core';
import Wheel from '@better-scroll/wheel';
import { useDate } from './use-date';
import { useTime } from './use-time';
import { isArray } from '../../shared/utils/check-type';
import { isHaveValue } from '../../shared/utils/common';
import type { PickerProps, NormalData, PickerSelectItems, PickerAnchor } from '../../shared/types/picker';
import type { PickerEmit } from '../../shared/types/react-picker';

BScroll.use(Wheel);

export function usePicker<T = NormalData, D = PickerAnchor>({
  data,
  isShowPicker,
  anchor,
  swipeTime,
  type,
  onChangeAnchor,
  onClose,
  onCancel,
  onConfirm,
}: PickerProps<D> & PickerEmit<T, D>) {
  const [pickerData, setPickerData] = useState<NormalData[][]>([]);
  const [wheels, setWheels] = useState<BScroll[]>([]);
  const [updateAnchor, setUpdateAnchor] = useState(false);
  const wheelWrapper = useRef<HTMLDivElement | null>(null);

  const { dateList, setSelectYear, setSelectMonth, updateDateSelect, getDateAnchors } = useDate();
  const { timeList, getTimeAnchors } = useTime();

  const isDate = type === 'date';
  const isTime = type === 'time';

  const pickerAnchors = useMemo(() => {
    if (isDate) return getDateAnchors(anchor);
    if (isTime) return getTimeAnchors(anchor);

    return isArray(anchor) ? anchor : [anchor];
  }, [isDate, isTime, anchor, updateAnchor]);

  useEffect(() => {
    updatePickerData();
  }, [data, type, dateList]);

  useEffect(() => {
    if (!isShowPicker) return;

    createOrRefreshWheels();
    updateSelect();
    scrollToAnchor();
  }, [isShowPicker]);

  useEffect(() => {
    createOrRefreshWheels();
  }, [pickerData]);

  function createOrRefreshWheels() {
    pickerData.forEach((_, index) => createWheel(index));
    checkWheels();
  }

  function updatePickerData() {
    const builtIn = {
      date: dateList,
      time: timeList,
    } as const;
    const isCascadeData = isArray(data[0]);
    const customData = (isCascadeData ? [...data] : [data]) as NormalData[][];
    const currentData = type ? builtIn[type] : customData;

    setPickerData(currentData);
  }

  function updateSelect() {
    if (isDate) {
      updateDateSelect(pickerAnchors as number[]);
    }
    if (isTime && !isHaveValue(anchor)) {
      setUpdateAnchor(!updateAnchor);
    }
  }

  function createWheel(index: number) {
    const node = wheelWrapper.current?.children[index] as HTMLElement;

    if (!node) return;
    const wheel = wheels[index];

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
        const cloneWheels = [...wheels];

        cloneWheels[index] = bScroll;
        return cloneWheels;
      });

      bScroll.on('scrollEnd', () => handleScrollEnd(index, bScroll));
    }
  }

  function handleScrollEnd(index: number, bScroll: BScroll) {
    if (isDate) {
      if (index === 2) return;
      const position = bScroll.getSelectedIndex();
      const value = dateList[index][position];

      if (index === 0) setSelectYear(value);
      if (index === 1) setSelectMonth(value);
    }
  }

  function scrollToAnchor() {
    setTimeout(() => {
      wheels.forEach((wheel, index) => {
        const targetPos = pickerAnchors[index];

        wheel.wheelTo(targetPos ?? 0);
      });
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
    onCancel?.();
    closePicker();
  }

  function confirm() {
    const isInTransition = wheels.some(wheel => wheel.isInTransition);

    if (isInTransition) stopWheels();
    const { item, anchor } = getSelectedItem();

    onConfirm?.(item as T);
    onChangeAnchor(anchor as D);
    closePicker();
  }

  function closePicker() {
    onClose();
  }

  function stopWheels() {
    wheels.forEach(wheel => wheel.stop());
  }

  function getSelectedItem() {
    const { item, anchor } = wheels.reduce(
      (result, wheel, index) => {
        const position = wheel.getSelectedIndex();
        const data = pickerData[index][position];

        result.item.push((isTime ? +data : data) as T);
        result.anchor.push(isDate ? data : position);
        return result;
      },
      { item: [], anchor: [] } as PickerSelectItems<T>,
    );

    return item.length > 1 ? { item, anchor } : { item: item[0], anchor: anchor[0] };
  }

  return {
    pickerData,
    wheelWrapper,
    cancel,
    confirm,
    closePicker,
  };
}
