import { watch, ref, nextTick, computed } from 'vue';
import BScroll from '@better-scroll/core';
import Wheel from '@better-scroll/wheel';
import { isArray } from '@/utils/checkType';
import { isHaveValue } from '@/utils/common';
import useDate from "@/hooks/useDate";
import useTime from "@/hooks/useTime";
import type { PickerEmit, PickerProps, OriginData, PickerSelectItems } from "@/types";
BScroll.use(Wheel);

export default (props: PickerProps, emit: PickerEmit) => {
  const pickerData = ref<Array<OriginData>>([]);
  const wheelWrapper = ref();
  const wheels = ref<Array<BScroll>>([]);
  const isCascadeData = computed(() => isArray(props.data[0]));
  const isDate = computed(() => props.type === 'date');
  const isTime = computed(() => props.type === 'time');
  const { selectYear, selectMonth, dateList, updateDateSelect, getDateAnchors } = useDate(isDate.value);
  const { timeList, updateDefaultTime, getTimeAnchors } = useTime(isTime.value);
  const pickerAnchors = computed(() => {
    if (isDate.value) return getDateAnchors!(props.anchor);
    if (isTime.value) return getTimeAnchors!(props.anchor);

    return isArray(props.anchor) ? props.anchor : [props.anchor];
  });

  async function setPickerData(isUpdate = false) {
    isUpdate ? updatePickerData() : updateSelect();
    await nextTick();
    pickerData.value.forEach((_, index) => createWheel(index));
    !isUpdate && scrollToAnchor();
    checkWheels();
  }

  function updatePickerData() {
    const builtIn = {
      date: dateList?.value,
      time: timeList,
    };
    const type = props.type as keyof typeof builtIn;
    pickerData.value = builtIn[type] ?? (isCascadeData.value ? [...props.data] as Array<OriginData> : [props.data]);
  }

  function updateSelect() {
    isDate.value && updateDateSelect!(pickerAnchors.value);
    isTime.value && !isHaveValue(props.anchor) && updateDefaultTime!();
  }

  function createWheel(index: number) {
    const node = wheelWrapper.value?.children[index] as HTMLElement;
    if (!node) throw new Error("It's not find wheelWrapper");

    let wheel = wheels.value[index];

    if (wheel) {
      wheel.refresh();
    } else {
      wheel = wheels.value[index] = new BScroll(node, {
        wheel: {
          selectedIndex: 0,
          rotate: 25
        },
        swipeTime: props.swipeTime,
      });
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
    isInTransition && stopWheels();
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
    const { item, anchor } = wheels.value.reduce((result, wheel, index) => {
      const position = wheel.getSelectedIndex();
      const item = pickerData.value[index][position];
      result.item.push(isTime.value ? +item : item);
      result.anchor.push(isDate.value ? item : position);
      return result;
    }, { item: [], anchor: [] } as PickerSelectItems);

    return item.length > 1 ? { item, anchor } : { item: item[0], anchor: anchor[0] };
  }

  watch(() => props.data, () => setPickerData(true), { immediate: true });
  watch(() => props.isShowPicker, (isShow: boolean) => isShow && setPickerData());

  return {
    wheels,
    pickerData,
    wheelWrapper,
    cancel,
    confirm,
    closePicker,
  }
}
