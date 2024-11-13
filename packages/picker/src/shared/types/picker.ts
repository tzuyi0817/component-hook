export type NormalData = Record<PropertyKey, unknown> | string | number;
export type OriginData = Array<NormalData>;
export type PickerData = OriginData | Array<OriginData>;
export type PickerBuiltIn = 'date' | 'time' | '';
export type PickerAnchor = number | Array<number>;

export interface PickerProps<T = PickerAnchor> {
  data: PickerData;
  isShowPicker: boolean;
  anchor: T;
  options?: Partial<PickerOptions>;
  showKey?: string | Array<string>;
  swipeTime?: number;
  type: PickerBuiltIn;
}

export interface PickerOptions {
  cancelClass: string;
  confirmClass: string;
  titleClass: string;
  cancelColor: string;
  confirmColor: string;
  titleColor: string;
  cancelText: string;
  confirmText: string;
  titleText: string;
}

export interface PickerSelectItems<T = NormalData> {
  item: Array<T>;
  anchor: Array<number>;
}

export interface PickerComponentProps<T = PickerAnchor> {
  data?: PickerData;
  isShowPicker: boolean;
  options?: Partial<PickerOptions>;
  anchor: T;
  showKey?: string | Array<string>;
  swipeTime?: number;
  type?: PickerBuiltIn;
}
