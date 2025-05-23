<script setup lang="ts">
import { computed, ref } from 'vue';
import { DEFAULT_TIME_COLUMNS, DEFAULT_TIME_TITLE } from '../../shared/constants';
import { formatTime, generateOptions, getDefaultTime, getValidTime } from '../../shared/utils/common';
import type { PickerFormatLabel, TimePickerColumnType } from '../../shared/types';
import Picker from './Picker.vue';

interface Props {
  show: boolean;
  modelValue?: number[];
  title?: string;
  columnsType?: TimePickerColumnType[];
  minTime?: string;
  maxTime?: string;
  teleport?: string | Element;
  confirmButtonText?: string;
  cancelButtonText?: string;
  formatHourLabel?: PickerFormatLabel;
  formatMinuteLabel?: PickerFormatLabel;
  formatSecondLabel?: PickerFormatLabel;
}

interface Emits {
  'update:show': [isShow: boolean];
  'update:modelValue': [values: number[]];
  confirm: [values: number[]];
  cancel: [];
  open: [];
  closed: [];
}

const props = withDefaults(defineProps<Props>(), {
  title: DEFAULT_TIME_TITLE,
  columnsType: () => DEFAULT_TIME_COLUMNS,
  formatHourLabel: formatTime,
  formatMinuteLabel: formatTime,
  formatSecondLabel: formatTime,
});
const emits = defineEmits<Emits>();
const selectedValues = ref<number[]>([]);
const internalModelValue = ref<number[]>([]);

const isShowPicker = computed({
  get: () => props.show,
  set: value => emits('update:show', value),
});

const columns = computed(() => {
  const { columnsType } = props;
  const generateOptionsMap = {
    hour: generateHourOptions,
    minute: generateMinuteOptions,
    second: generateSecondOptions,
  };

  return columnsType.map(type => generateOptionsMap[type]());
});

const formattedMinTime = computed(() => {
  const minTime = getValidTime(props.minTime ?? '');

  return minTime ?? { hour: 0, minute: 0, second: 0 };
});

const formattedMaxTime = computed(() => {
  const maxTime = getValidTime(props.maxTime ?? '');

  return maxTime ?? { hour: 23, minute: 59, second: 59 };
});

function generateHourOptions() {
  const minHour = formattedMinTime.value.hour;
  const maxHour = formattedMaxTime.value.hour;

  return generateOptions(minHour, maxHour, props.formatHourLabel);
}

function generateMinuteOptions() {
  const selectedHour = getSelectedValue('hour');
  const { hour: minH, minute: minM } = formattedMinTime.value;
  const { hour: maxH, minute: maxM } = formattedMaxTime.value;
  const minMinute = selectedHour === minH ? minM : 0;
  const maxMinute = selectedHour === maxH ? maxM : 59;

  return generateOptions(minMinute, maxMinute, props.formatMinuteLabel);
}

function generateSecondOptions() {
  const selectedHour = getSelectedValue('hour');
  const selectedMinute = getSelectedValue('minute');
  const { hour: minH, minute: minM, second: minS } = formattedMinTime.value;
  const { hour: maxH, minute: maxM, second: maxS } = formattedMaxTime.value;
  const minSecond = selectedHour === minH && selectedMinute === minM ? minS : 0;
  const maxSecond = selectedHour === maxH && selectedMinute === maxM ? maxS : 59;

  return generateOptions(minSecond, maxSecond, props.formatSecondLabel);
}

function getSelectedValue(type: TimePickerColumnType) {
  const { columnsType } = props;
  const columnIndex = columnsType.indexOf(type);
  const value = selectedValues.value[columnIndex];

  if (value !== undefined) return Number(value);

  return getDefaultTime(formattedMinTime.value, formattedMaxTime.value, type);
}

function onConfirm(value: number[]) {
  emits('update:modelValue', value);
  internalModelValue.value = value;
  emits('confirm', value);
}

function onCancel() {
  emits('cancel');
}

function setDefaultValues() {
  emits('open');

  if (props.modelValue && props.modelValue.length) {
    selectedValues.value = [...props.modelValue];
    return;
  }
  const { columnsType } = props;

  selectedValues.value = columnsType.map(type => getSelectedValue(type));
}

function resetSelectedValues() {
  selectedValues.value = props.modelValue ? [...props.modelValue] : [...internalModelValue.value];
  emits('closed');
}
</script>

<template>
  <Picker
    v-model="selectedValues"
    v-model:show="isShowPicker"
    :title="title"
    :columns="columns"
    :teleport="teleport"
    :confirm-button-text="confirmButtonText"
    :cancel-button-text="cancelButtonText"
    linkage
    @confirm="onConfirm"
    @cancel="onCancel"
    @open="setDefaultValues"
    @closed="resetSelectedValues"
  />
</template>
