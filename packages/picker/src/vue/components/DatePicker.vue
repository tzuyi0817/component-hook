<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  generateOptions,
  getLastDay,
  isMaxMonth,
  isMaxYear,
  isMinMonth,
  isMinYear,
  formatLabel,
  getDefaultDate,
} from '../../shared/utils/common';
import { DEFAULT_DATE_COLUMNS, DEFAULT_DATE_TITLE } from '../../shared/constants';
import type { DatePickerColumnType, PickerFormatLabel } from '../../shared/types';
import Picker from './Picker.vue';

interface Props {
  show: boolean;
  modelValue?: number[];
  title?: string;
  columnsType?: DatePickerColumnType[];
  minDate?: Date;
  maxDate?: Date;
  teleport?: string | Element;
  confirmButtonText?: string;
  cancelButtonText?: string;
  formatYearLabel?: PickerFormatLabel;
  formatMonthLabel?: PickerFormatLabel;
  formatDayLabel?: PickerFormatLabel;
}

interface Emits {
  'update:show': [boolean];
  'update:modelValue': [number[]];
  confirm: [number[]];
  cancel: [];
  open: [];
  closed: [];
}

const props = withDefaults(defineProps<Props>(), {
  title: DEFAULT_DATE_TITLE,
  columnsType: () => DEFAULT_DATE_COLUMNS,
  minDate: () => new Date(new Date().getFullYear() - 10, 0, 1),
  maxDate: () => new Date(new Date().getFullYear() + 10, 11, 31),
  formatYearLabel: formatLabel,
  formatMonthLabel: formatLabel,
  formatDayLabel: formatLabel,
});
const emits = defineEmits<Emits>();
const selectedValues = ref<number[]>([]);
const internalModelValue = ref<number[]>([]);

const isShowPicker = computed({
  get: () => props.show,
  set: value => emits('update:show', value),
});

const columns = computed(() => {
  const { columnsType, minDate, maxDate } = props;
  const generateOptionsMap = {
    year: generateYearOptions,
    month: generateMonthOptions,
    day: generateDayOptions,
  };

  return columnsType.map(type => generateOptionsMap[type](minDate, maxDate));
});

function generateYearOptions(minDate: Date, maxDate: Date) {
  const minYear = minDate.getFullYear();
  const maxYear = maxDate.getFullYear();

  return generateOptions(minYear, maxYear, props.formatYearLabel);
}

function generateMonthOptions(minDate: Date, maxDate: Date) {
  const selectedYear = getSelectedValue('year');
  const minMonth = isMinYear(selectedYear, minDate) ? minDate.getMonth() + 1 : 1;
  const maxMonth = isMaxYear(selectedYear, maxDate) ? maxDate.getMonth() + 1 : 12;

  return generateOptions(minMonth, maxMonth, props.formatMonthLabel);
}

function generateDayOptions(minDate: Date, maxDate: Date) {
  const selectedYear = getSelectedValue('year');
  const selectedMonth = getSelectedValue('month');
  const isMinYearAndMinMonth = isMinYear(selectedYear, minDate) && isMinMonth(selectedMonth, minDate);
  const isMaxYearAndMaxMonth = isMaxYear(selectedYear, maxDate) && isMaxMonth(selectedMonth, maxDate);
  const minDay = isMinYearAndMinMonth ? minDate.getDate() : 1;
  const maxDay = isMaxYearAndMaxMonth ? maxDate.getDate() : getLastDay(selectedYear, selectedMonth);

  return generateOptions(minDay, maxDay, props.formatDayLabel);
}

function getSelectedValue(type: DatePickerColumnType) {
  const { columnsType } = props;
  const columnIndex = columnsType.indexOf(type);
  const value = selectedValues.value[columnIndex];

  if (value) return Number(value);

  return getDefaultDate(props.minDate, props.maxDate, type);
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
