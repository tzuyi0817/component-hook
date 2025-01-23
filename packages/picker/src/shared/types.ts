export interface PickerOption {
  label: string | number;
  value: string | number;
  children?: PickerColumn;
  [key: PropertyKey]: any;
}

export interface PickerFields {
  label?: string;
  value?: string;
  children?: string;
}

export type PickerColumn = PickerOption[];

export type PickerSelectedValues = Array<PickerOption['value']>;

export type PickerColumnsType = 'single' | 'multiple' | 'cascade';

export type Direction = '' | 'vertical' | 'horizontal';

export type DatePickerColumnType = 'year' | 'month' | 'day';
