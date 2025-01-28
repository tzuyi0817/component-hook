<script setup lang="ts">
import { computed, ref } from 'vue';
import Picker from './Picker.vue';
import { generateOptions, getLastDay, isMaxMonth, isMaxYear, isMinMonth, isMinYear } from '../../shared/utils/common';
import type { DatePickerColumnType, PickerSelectedValues, PickerFormatLabel } from '../../shared/types';

interface Props {
  show: boolean;
  modelValue?: PickerSelectedValues;
  title?: string;
  columnsType?: DatePickerColumnType[];
  minDate?: Date;
  maxDate?: Date;
  teleport?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  formatYearLabel?: PickerFormatLabel;
  formatMonthLabel?: PickerFormatLabel;
  formatDayLabel?: PickerFormatLabel;
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
  title: 'Select Date',
  columnsType: () => ['year', 'month', 'day'],
  minDate: () => new Date(new Date().getFullYear() - 10, 0, 1),
  maxDate: () => new Date(new Date().getFullYear() + 10, 11, 31),
  formatYearLabel: (label: string) => label,
  formatMonthLabel: (label: string) => label,
  formatDayLabel: (label: string) => label,
});
const emits = defineEmits<Emits>();
const selectedValues = ref<PickerSelectedValues>([]);
const internalModelValue = ref<PickerSelectedValues>([]);

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
  if (type === 'year') return new Date().getFullYear();
  if (type === 'month') return new Date().getMonth() + 1;
  return new Date().getDate();
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
