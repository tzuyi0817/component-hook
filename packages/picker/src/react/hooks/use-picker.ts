import { useState, useRef, useMemo, useEffect } from 'react';
import BScroll, { createBScroll } from '@better-scroll/core';
import Wheel from '@better-scroll/wheel';
import { isArray } from '@shared/utils/check-type';
import { isHaveValue } from '@shared/utils/common';
import type { PickerEmit, PickerProps, OriginData, PickerSelectItems } from '@shared/types/picker';
import { useDate } from './use-date';
import { useTime } from './use-time';

BScroll.use(Wheel);

export function usePicker(props: PickerProps, emit: PickerEmit) {
  const [pickerData, setPickerData] = useState<OriginData[]>([]);
  const [wheels, setWheels] = useState<BScroll[]>([]);
  const wheelWrapper = useRef<HTMLElement | undefined>();

  const { selectYear, selectMonth, dateList, updateDateSelect, getDateAnchors } = useDate();
  const { timeList, updateDefaultTime, getTimeAnchors } = useTime();

  const isDate = useMemo(() => props.type === 'date', [props.type]);
  const isTime = useMemo(() => props.type === 'time', [props.type]);

  const pickerAnchors = useMemo(() => {
    if (isDate) return getDateAnchors!(props.anchor);
    if (isTime) return getTimeAnchors!(props.anchor);

    return isArray(props.anchor) ? props.anchor : [props.anchor];
  }, [isDate, isTime, props.anchor]);

  async function setupPickerData(isUpdate = false) {
    if (isUpdate) {
      updatePickerData();
    } else {
      updateSelect();
    }
    await nextTick();
    pickerData.value.forEach((_, index) => createWheel(index));
    if (!isUpdate) scrollToAnchor();
    checkWheels();
  }

  function updatePickerData() {
    const builtIn = {
      date: dateList?.value,
      time: timeList,
    };
    const type = props.type as keyof typeof builtIn;
    const isCascadeData = isArray(props.data[0]);
    const data = (isCascadeData ? [...props.data] : [props.data]) as OriginData[];

    pickerData.value = builtIn[type] ?? data;
  }

  function updateSelect() {
    if (!isDate.value && !isTime.value) return;
    if (isDate.value) updateDateSelect(pickerAnchors.value);
    if (isTime.value && !isHaveValue(props.anchor)) {
      updateDefaultTime();
    }
  }

  function createWheel(index: number) {
    const node = wheelWrapper.value?.children[index] as HTMLElement;
    if (!node) return;

    let wheel = wheels.value[index];

    if (wheel) {
      wheel.refresh();
    } else {
      const bScroll = createBScroll(node, {
        wheel: {
          selectedIndex: 0,
          rotate: 25,
        },
        swipeTime: props.swipeTime ?? 500,
      });

      wheel = wheels.value[index] = bScroll;
      wheel.on('scrollEnd', () => handleScrollEnd(index));
    }
    return wheel;
  }

  function handleScrollEnd(index: number) {
    if (!isDate.value || index === 2) return;
    const position = wheels.value[index].getSelectedIndex();
    const value = dateList!.value[index][position];
    if (index === 0) selectYear!.value = value;
    if (index === 1) selectMonth!.value = value;
    setPickerData(true);
  }

  function scrollToAnchor() {
    wheels.value.forEach((wheel, index) => {
      const targetPos = pickerAnchors.value?.[index];

      wheel.wheelTo(targetPos ?? 0);
    });
  }

  function checkWheels() {
    const DATA_LENGTH = pickerData.value.length;
    if (wheels.value.length <= DATA_LENGTH) return;
    const extraWheels = wheels.value.splice(DATA_LENGTH);
    extraWheels.forEach(wheel => wheel.destroy());
  }

  function cancel() {
    emit('cancel');
    closePicker();
  }

  function confirm() {
    const isInTransition = wheels.value.some(wheel => wheel.isInTransition);

    if (isInTransition) stopWheels();
    const { item, anchor } = getSelectedItem();

    emit('confirm', item);
    emit('update:anchor', anchor);
    closePicker();
  }

  function closePicker() {
    emit('update:isShowPicker', false);
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
  }, [props.data]);

  useEffect(() => {
    if (!props.isShowPicker) return;
    setupPickerData();
  }, [props.isShowPicker]);

  useEffect(() => {
    updateSelect();
    setupPickerData(true);
  }, [props.type]);

  return {
    pickerData,
    wheelWrapper,
    cancel,
    confirm,
    closePicker,
  };
}
