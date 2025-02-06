export interface PickerOption {
  label?: string | number;
  value?: string | number;
  children?: PickerColumn;
  [key: PropertyKey]: any;
}

export interface PickerFields {
  label?: string;
  value?: string;
  children?: string;
}

export type PickerColumn = Array<PickerOption | undefined>;

export type PickerSelectedValues = Array<PickerOption['value']>;

export type PickerColumnsType = 'single' | 'multiple' | 'cascade';

export type Direction = '' | 'vertical' | 'horizontal';

export type DatePickerColumnType = 'year' | 'month' | 'day';

export type PickerFormatLabel = (label: string) => string;

export type TimePickerColumnType = 'hour' | 'minute' | 'second';

export type TimeSelection = Record<TimePickerColumnType, number>;
