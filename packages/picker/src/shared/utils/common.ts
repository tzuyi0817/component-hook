import type { Ref } from 'vue';
import { isArray } from './check-type';
import type { PickerColumn, PickerOption, PickerSelectedValues } from '../types';

export function getColumnsType(columns: PickerColumn | PickerColumn[]) {
  if (isArrayPickerColumn(columns)) return 'multiple';
  const [column] = columns;

  if (column.children) return 'cascade';
  return 'single';
}

export function formatColumnsToCascade(
  columns: PickerColumn | PickerColumn[],
  selectedValues: Ref<PickerSelectedValues>,
) {
  if (isArrayPickerColumn(columns)) return [];
  const result: PickerColumn[] = [];
  let column = columns as PickerColumn | undefined;
  let columnIndex = 0;

  while (column) {
    const selectedValue = selectedValues.value[columnIndex];
    let selectedIndex = column.findIndex(option => option.value === selectedValue);

    if (selectedIndex === -1) selectedIndex = 0;
    result.push(column);
    columnIndex += 1;
    column = column[selectedIndex]?.children;
  }
  return result;
}

export function resetChildrenSelected(option: PickerOption, columnIndex: number, selectedValues: PickerSelectedValues) {
  const result = [...selectedValues];
  let currentOption = option;
  let currentColumnIndex = columnIndex + 1;

  while (currentOption?.children) {
    const firstOption = currentOption.children[0];

    result[currentColumnIndex] = firstOption.value;
    currentOption = firstOption;
    currentColumnIndex += 1;
  }
  return result;
}

function isArrayPickerColumn(columns: PickerColumn | PickerColumn[]): columns is PickerColumn[] {
  const [column] = columns;

  return isArray(column);
}
