import { watch, ref, nextTick, computed } from 'vue';
import BScroll from '@better-scroll/core';
import Wheel from '@better-scroll/wheel';
import { isArray } from '@/utils/checkType';
import useDate from "@/hooks/useDate";
import type { PickerEmit, PickerProps, OriginData, NormalData } from "@/types";
BScroll.use(Wheel);

export default (props: PickerProps, emit: PickerEmit) => {
  const pickerData = ref<Array<OriginData>>([]);
  const wheelWrapper = ref();
  const wheels = ref<Array<BScroll>>([]);
  const { selectYear, selectMonth, dateList, defaultAnchors } = useDate();
  const isCascadeData = computed(() => isArray(props.data[0]));
  const pickerAnchors = computed(() => {
    if (props.type === 'date') {
      const anchors = isArray(props.anchor) && props.anchor.length === 3 ? props.anchor : defaultAnchors;
      return anchors.map((target, index) => {
        const pos = dateList.value[index].indexOf(target);
        return pos > -1 ? pos : 0;
      });
    }
    return isArray(props.anchor) ? props.anchor : [props.anchor];
  });

  async function setPickerData(isUpdate = false) {
    isUpdate ? updatePickerData() : updateSelect();
    await nextTick();
    pickerData.value.forEach((_, index) => createWheel(index));
    !isUpdate && scrollToAnchor();
    checkWheels();
  }

  function updateSelect() {
    if (props.type !== 'date') return;
    const [year, month] = pickerAnchors.value;
    selectYear.value = dateList.value[0][year];
    selectMonth.value = dateList.value[1][month];
  }

  function updatePickerData() {
    const defaultData = {
      date: dateList,
    };
    const type = props.type as keyof typeof defaultData;
    pickerData.value = defaultData[type]?.value ?? (isCascadeData.value ? [...props.data] as Array<OriginData> : [props.data]);
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
      wheel.on('scrollEnd', () => handleScrollEnd(index));
    }
    return wheel;
  }

  function handleScrollEnd(index: number) {
    if (props.type !== 'date' || index === 2) return;
    const position = wheels.value[index].getSelectedIndex();
    const value = dateList.value[index][position];
    if (index === 0) selectYear.value = value;
    if (index === 1) selectMonth.value = value;
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
