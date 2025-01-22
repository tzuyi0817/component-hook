export interface PickerOption {
  label: string | number;
  value: string | number;
  children?: PickerColumn;
}

export type PickerColumn = PickerOption[];

export type PickerSelectedValues = Array<PickerOption['value']>;

export type PickerColumnsType = 'single' | 'multiple' | 'cascade';
