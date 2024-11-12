import { watch, ref, nextTick, computed } from 'vue';
import BScroll, { createBScroll } from '@better-scroll/core';
import Wheel from '@better-scroll/wheel';
import { isArray } from '../../shared/utils/check-type';
import { isHaveValue } from '../../shared/utils/common';
import type { PickerProps, OriginData, PickerSelectItems } from '../../shared/types/picker';
import type { PickerEmit } from '../../shared/types/vue-picker';
import { useDate } from './use-date';
import { useTime } from './use-time';

BScroll.use(Wheel);

export function usePicker(props: PickerProps, emit: PickerEmit) {
  const pickerData = ref<OriginData[]>([]);
  const wheelWrapper = ref<HTMLElement | undefined>();
  const wheels = ref<BScroll[]>([]);
  const isDate = computed(() => props.type === 'date');
  const isTime = computed(() => props.type === 'time');
  const { selectYear, selectMonth, dateList, updateDateSelect, getDateAnchors } = useDate();
  const { timeList, updateDefaultTime, getTimeAnchors } = useTime();
  const pickerAnchors = computed(() => {
    if (isDate.value) return getDateAnchors!(props.anchor);
    if (isTime.value) return getTimeAnchors!(props.anchor);

    return isArray(props.anchor) ? props.anchor : [props.anchor];
  });

  async function setPickerData(isUpdate = false) {
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
    wheels.value.forEach(wheel => wheel.stop());
  }

  function getSelectedItem() {
    const { item, anchor } = wheels.value.reduce(
      (result, wheel, index) => {
        const position = wheel.getSelectedIndex();
        const data = pickerData.value[index][position];

        result.item.push(isTime.value ? +data : data);
        result.anchor.push(isDate.value ? data : position);
        return result;
      },
      { item: [], anchor: [] } as PickerSelectItems,
    );

    return item.length > 1 ? { item, anchor } : { item: item[0], anchor: anchor[0] };
  }

  watch(
    () => props.data,
    () => setPickerData(true),
    { immediate: true },
  );

  watch(
    () => props.isShowPicker,
    (isShow: boolean) => isShow && setPickerData(),
  );

  watch(
    () => props.type,
    () => {
      updateSelect();
      setPickerData(true);
    },
  );

  return {
    pickerData,
    wheelWrapper,
    cancel,
    confirm,
    closePicker,
  };
}
