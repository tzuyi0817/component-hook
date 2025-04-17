import type {
  DatePickerColumnType,
  PickerColumn,
  PickerFields,
  PickerFormatLabel,
  PickerOption,
  TimePickerColumnType,
  TimeSelection,
} from '../types';
import { isArray } from './check-type';

export function getColumnsType<T>(columns: PickerColumn<T> | PickerColumn<T>[], fields: Required<PickerFields>) {
  if (isArrayPickerColumn(columns)) return 'multiple';
  const [column] = columns;

  if (column?.[fields.children]) return 'cascade';
  return 'single';
}

export function extendFields(fields?: PickerFields) {
  return {
    children: fields?.children || 'children',
    label: fields?.label || 'label',
    value: fields?.value || 'value',
  };
}

export function formatColumnsToCascade<T>(
  columns: PickerColumn<T> | PickerColumn<T>[],
  selectedValues: T[],
  fields: Required<PickerFields>,
) {
  if (isArrayPickerColumn(columns)) return [];
  const result: PickerColumn<T>[] = [];
  let column = columns as PickerColumn<T> | undefined;
  let columnIndex = 0;

  while (column) {
    const selectedValue = selectedValues[columnIndex];
    let selectedIndex = getIndexByValue(column, selectedValue, fields);

    if (selectedIndex === -1) selectedIndex = 0;
    result.push(column);
    columnIndex += 1;
    column = column[selectedIndex]?.[fields.children];
  }
  return result;
}

export function resetChildrenSelected<T>(
  option: PickerOption<T> | undefined,
  columnIndex: number,
  selectedValues: T[],
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

export function getIndexByValue<T>(column: PickerColumn<T>, value: T, fields: Required<PickerFields>) {
  return column.findIndex(option => option?.[fields.value] === value);
}

function isArrayPickerColumn<T>(columns: PickerColumn<T> | PickerColumn<T>[]): columns is PickerColumn<T>[] {
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

export function generateOptions(min: number, max: number, formatter: PickerFormatLabel) {
  const options: PickerColumn<number> = [];

  for (let index = min; index <= max; index++) {
    const label = formatter(`${index}`);

    options.push({ label, value: index });
  }
  return options;
}

export function isMinYear(year: number, minDate: Date) {
  return year === minDate.getFullYear();
}

export function isMaxYear(year: number, maxDate: Date) {
  return year === maxDate.getFullYear();
}

export function isMinMonth(month: number, minDate: Date) {
  return month === minDate.getMonth() + 1;
}

export function isMaxMonth(month: number, maxDate: Date) {
  return month === maxDate.getMonth() + 1;
}

export function getLastDay(selectedYear: number, selectedMonth: number) {
  return new Date(selectedYear, selectedMonth, 0).getDate();
}

export function getDefaultDate(minDate: Date, maxDate: Date, type: DatePickerColumnType) {
  const date = new Date();
  const timestamp = Date.now();
  const minTimestamp = minDate.getTime();
  const maxTimestamp = maxDate.getTime();
  const isValidDate = timestamp >= minTimestamp && timestamp <= maxTimestamp;

  if (type === 'year') return isValidDate ? date.getFullYear() : minDate.getFullYear();
  if (type === 'month') return isValidDate ? date.getMonth() + 1 : minDate.getMonth() + 1;

  return isValidDate ? date.getDate() : minDate.getDate();
}

export function formatLabel(label: string) {
  return label;
}

export function isValidTime(time: string) {
  return /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(time);
}

export function getValidTime(time: string) {
  if (!isValidTime(time)) return null;
  const [hour, minute, second] = time.split(':');

  return { hour: Number(hour), minute: Number(minute), second: Number(second) };
}

export function formatTime(value: string) {
  return value.padStart(2, '0');
}

export function getDefaultTime(minTime: TimeSelection, maxTime: TimeSelection, type: TimePickerColumnType) {
  const timestamp = Date.now();
  const { hour: minH, minute: minM, second: minS } = minTime;
  const { hour: maxH, minute: maxM, second: maxS } = maxTime;
  const minTimestamp = new Date().setHours(minH, minM, minS);
  const maxTimestamp = new Date().setHours(maxH, maxM, maxS);
  const isValid = timestamp >= minTimestamp && timestamp <= maxTimestamp;

  if (type === 'hour') return isValid ? new Date().getHours() : minH;
  if (type === 'minute') return isValid ? new Date().getMinutes() : minM;

  return isValid ? new Date().getSeconds() : minS;
}
