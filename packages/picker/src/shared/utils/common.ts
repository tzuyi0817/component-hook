import type { Ref } from 'vue';
import { isArray } from './check-type';
import type { PickerColumn, PickerOption, PickerSelectedValues, PickerFields } from '../types';

export function getColumnsType(columns: PickerColumn | PickerColumn[], fields: Required<PickerFields>) {
  if (isArrayPickerColumn(columns)) return 'multiple';
  const [column] = columns;

  if (column[fields.children]) return 'cascade';
  return 'single';
}

export function extendFields(fields?: PickerFields) {
  return {
    children: fields?.children || 'children',
    label: fields?.label || 'label',
    value: fields?.value || 'value',
  };
}

export function formatColumnsToCascade(
  columns: PickerColumn | PickerColumn[],
  selectedValues: Ref<PickerSelectedValues>,
  fields: Required<PickerFields>,
) {
  if (isArrayPickerColumn(columns)) return [];
  const result: PickerColumn[] = [];
  let column = columns as PickerColumn | undefined;
  let columnIndex = 0;

  while (column) {
    const selectedValue = selectedValues.value[columnIndex];
    let selectedIndex = getIndexByValue(column, selectedValue, fields);

    if (selectedIndex === -1) selectedIndex = 0;
    result.push(column);
    columnIndex += 1;
    column = column[selectedIndex]?.[fields.children];
  }
  return result;
}

export function resetChildrenSelected(
  option: PickerOption,
  columnIndex: number,
  selectedValues: PickerSelectedValues,
  fields: Required<PickerFields>,
) {
  const result = [...selectedValues];
  let currentOption = option;
  let currentColumnIndex = columnIndex + 1;

  while (currentOption?.[fields.children]) {
    const firstOption = currentOption[fields.children][0];

    result[currentColumnIndex] = firstOption.value;
    currentOption = firstOption;
    currentColumnIndex += 1;
  }
  return result;
}

export function getIndexByValue(column: PickerColumn, value: PickerOption['value'], fields: Required<PickerFields>) {
  return column.findIndex(option => option[fields.value] === value);
}

function isArrayPickerColumn(columns: PickerColumn | PickerColumn[]): columns is PickerColumn[] {
  const [column] = columns;

  return isArray(column);
}

export function getDirection(x: number, y: number) {
  if (x > y) {
    return 'horizontal';
  }
  if (y > x) {
    return 'vertical';
  }
  return '';
}
