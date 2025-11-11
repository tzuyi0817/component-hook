<script setup lang="ts">
import { computed } from 'vue';
import { DEFAULT_TIME_COLUMNS } from '../../shared/constants';
import { formatTime, generateOptions, getDefaultTime, getValidTime } from '../../shared/utils/common';
import type { PickerFormatLabel, TimePickerColumnType } from '../../shared/types';
import Picker from './Picker.vue';

interface Props {
  columnsType?: TimePickerColumnType[];
  minTime?: string;
  maxTime?: string;
  formatHourLabel?: PickerFormatLabel;
  formatMinuteLabel?: PickerFormatLabel;
  formatSecondLabel?: PickerFormatLabel;
}

interface Emits {
  change: [values: number[]];
}

const props = withDefaults(defineProps<Props>(), {
  columnsType: () => DEFAULT_TIME_COLUMNS,
  formatHourLabel: formatTime,
  formatMinuteLabel: formatTime,
  formatSecondLabel: formatTime,
});
const emits = defineEmits<Emits>();
const modelValue = defineModel<number[]>({ default: [] });

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

if (!modelValue.value.length) {
  setDefaultValues();
}

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
  const value = modelValue.value[columnIndex];

  if (value !== undefined) return Number(value);

  return getDefaultTime(formattedMinTime.value, formattedMaxTime.value, type);
}

function setDefaultValues() {
  const { columnsType } = props;

  modelValue.value = columnsType.map(type => getDefaultTime(formattedMinTime.value, formattedMaxTime.value, type));
}

defineExpose({
  setCurrentTime: setDefaultValues,
});
</script>

<template>
  <Picker
    v-model="modelValue"
    :columns="columns"
    @change="emits('change', $event)"
  />
</template>
