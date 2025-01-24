<script setup lang="ts">
import { computed, ref } from 'vue';
import Picker from './Picker.vue';
import { generateOptions, getValidTime, formatTime } from '../../shared/utils/common';
import type { TimePickerColumnType, PickerSelectedValues, PickerFormatLabel } from '../../shared/types';

interface Props {
  show: boolean;
  modelValue?: PickerSelectedValues;
  title?: string;
  columnsType?: TimePickerColumnType[];
  minTime?: string;
  maxTime?: string;
  teleport?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  formatHourLabel?: PickerFormatLabel;
  formatMinuteLabel?: PickerFormatLabel;
  formatSecondLabel?: PickerFormatLabel;
}

interface Emits {
  'update:show': [boolean];
  'update:modelValue': [PickerSelectedValues];
  confirm: [PickerSelectedValues];
  cancel: [];
  open: [];
  closed: [];
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Select Time',
  columnsType: () => ['hour', 'minute', 'second'],
  formatHourLabel: () => formatTime,
  formatMinuteLabel: () => formatTime,
  formatSecondLabel: () => formatTime,
});
const emits = defineEmits<Emits>();
const selectedValues = ref<PickerSelectedValues>([]);
const internalModelValue = ref<PickerSelectedValues>([]);

const isShowPicker = computed({
  get: () => props.show,
  set: value => emits('update:show', value),
});

const columns = computed(() => {
  const { columnsType, minTime, maxTime } = props;
  const generateOptionsMap = {
    hour: generateHourOptions,
    minute: generateMinuteOptions,
    second: generateSecondOptions,
  };

  return columnsType.map(type => generateOptionsMap[type](minTime, maxTime));
});

function generateHourOptions(minTime?: string, maxTime?: string) {
  const minHour = 0;
  const maxHour = 23;

  return generateOptions(minHour, maxHour, props.formatHourLabel);
}

function generateMinuteOptions(minTime?: string, maxTime?: string) {
  // const selectedHour = getSelectedValue('year');
  const minMinute = 0;
  const maxMinute = 59;

  return generateOptions(minMinute, maxMinute, props.formatMinuteLabel);
}

function generateSecondOptions(minTime?: string, maxTime?: string) {
  // const selectedHour = getSelectedValue('year');
  // const selectedMinute = getSelectedValue('month');
  const minSecond = 0;
  const maxSecond = 59;

  return generateOptions(minSecond, maxSecond, props.formatSecondLabel);
}

function getSelectedValue(type: TimePickerColumnType) {
  // const { columnsType } = props;
  // const columnIndex = columnsType.indexOf(type);
  // const value = selectedValues.value[columnIndex];
  // if (value) return Number(value);
  // if (type === 'year') return new Date().getFullYear();
  // if (type === 'month') return new Date().getMonth() + 1;
  // return new Date().getDate();
}

function onConfirm(value: PickerSelectedValues) {
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
  // const { columnsType } = props;

  // selectedValues.value = columnsType.map(type => getSelectedValue(type));
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
