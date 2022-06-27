import { watch, ref, nextTick, computed, Ref } from 'vue';
import BScroll from '@better-scroll/core';
import Wheel from '@better-scroll/wheel';
import { isArray } from '@/utils/checkType';
import type { PickerEmit, PickerProps, OriginData, NormalData } from "@/types";
BScroll.use(Wheel);

export default (props: PickerProps, emit: PickerEmit) => {
  const pickerData = ref<Array<OriginData>>([]);
  const wheelWrapper = ref();
  const wheels = ref<Array<BScroll>>([]);
  const isCascadeData = computed(() => isArray(props.data[0]));

  async function setPickerData(isUpdate = false) {
    isUpdate && updatePickerData();
    await nextTick();
    pickerData.value.forEach((_, index) => createWheel(index));
    scrollToAnchor();
    checkWheels();
  }

  function updatePickerData() {
    pickerData.value = isCascadeData.value ? [...props.data] as Array<OriginData> : [props.data];
  }

  function createWheel(index: number) {
    const node = wheelWrapper.value!.children[index] as HTMLElement;
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
      // wheel.on('scrollEnd', scrollToAnchor, index);
    }
    return wheel;
  }

  function scrollToAnchor() {
    wheels.value.forEach((wheel, index) => {
      const targetPos = props.anchor[index]; 
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
    emit('confirm', getSelectedItem());
    closePicker();
  }

  function closePicker() {
    emit("update:isShowPicker", false);
  }

  function stopWheels() {
    wheels.value.forEach(wheel => wheel.stop());
  }

  function getSelectedItem() {
    const items = wheels.value.reduce((result, wheel, index) => {
      const position = wheel.getSelectedIndex();
      const item = pickerData.value[index][position];
      result.push(item);
      return result;
    }, [] as Array<NormalData>);
    return items.length > 1 ? items : items[0];
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
