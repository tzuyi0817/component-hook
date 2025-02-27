export interface PickerOption<T> {
  label?: string | number;
  value?: T;
  children?: PickerColumn<T>;
  [key: PropertyKey]: any;
}

export interface PickerFields {
  label?: string;
  value?: string;
  children?: string;
}

export type PickerColumn<T = string | number> = Array<PickerOption<T> | undefined>;

export type PickerSelectedValues<T = string | number> = Array<PickerOption<T>['value']>;

export type PickerColumnsType = 'single' | 'multiple' | 'cascade';

export type Direction = '' | 'vertical' | 'horizontal';

export type DatePickerColumnType = 'year' | 'month' | 'day';

export type PickerFormatLabel = (label: string) => string;

export type TimePickerColumnType = 'hour' | 'minute' | 'second';

export type TimeSelection = Record<TimePickerColumnType, number>;
