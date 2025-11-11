<script setup lang="ts">
import { computed } from 'vue';
import { DEFAULT_DATE_COLUMNS } from '../../shared/constants';
import {
  formatLabel,
  generateOptions,
  getDefaultDate,
  getLastDay,
  isMaxMonth,
  isMaxYear,
  isMinMonth,
  isMinYear,
} from '../../shared/utils/common';
import type { DatePickerColumnType, PickerFormatLabel } from '../../shared/types';
import Picker from './Picker.vue';

interface Props {
  columnsType?: DatePickerColumnType[];
  minDate?: Date;
  maxDate?: Date;
  formatYearLabel?: PickerFormatLabel;
  formatMonthLabel?: PickerFormatLabel;
  formatDayLabel?: PickerFormatLabel;
}

interface Emits {
  change: [values: number[]];
}

const props = withDefaults(defineProps<Props>(), {
  columnsType: () => DEFAULT_DATE_COLUMNS,
  minDate: () => new Date(new Date().getFullYear() - 10, 0, 1),
  maxDate: () => new Date(new Date().getFullYear() + 10, 11, 31),
  formatYearLabel: formatLabel,
  formatMonthLabel: formatLabel,
  formatDayLabel: formatLabel,
});
const emits = defineEmits<Emits>();
const modelValue = defineModel<number[]>({ default: [] });

const columns = computed(() => {
  const { columnsType, minDate, maxDate } = props;
  const generateOptionsMap = {
    year: generateYearOptions,
    month: generateMonthOptions,
    day: generateDayOptions,
  };

  return columnsType.map(type => generateOptionsMap[type](minDate, maxDate));
});

if (!modelValue.value.length) {
  setDefaultValues();
}

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
  const value = modelValue.value[columnIndex];

  if (value) return Number(value);

  return getDefaultDate(props.minDate, props.maxDate, type);
}

function setDefaultValues() {
  const { columnsType } = props;

  modelValue.value = columnsType.map(type => getDefaultDate(props.minDate, props.maxDate, type));
}

defineExpose({
  setCurrentDate: setDefaultValues,
});
</script>

<template>
  <Picker
    v-model="modelValue"
    :columns="columns"
    @change="emits('change', $event)"
  />
</template>
