export type NormalData = Record<PropertyKey, unknown> | string | number;
export type OriginData = Array<NormalData>;
export type PickerData = OriginData | Array<OriginData>;
export type PickerBuiltIn = 'date' | 'time' | '';
export type PickerAnchor = number | Array<number>;

export interface PickerProps {
  data: PickerData;
  isShowPicker: boolean;
  anchor: PickerAnchor;
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

export interface PickerSelectItems {
  item: Array<NormalData>;
  anchor: Array<number>;
}

export interface PickerComponentProps {
  data?: PickerData;
  isShowPicker: boolean;
  options?: Partial<PickerOptions>;
  anchor: PickerAnchor;
  showKey?: string | Array<string>;
  swipeTime?: number;
  type?: PickerBuiltIn;
}
