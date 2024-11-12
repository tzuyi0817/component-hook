export type NormalData = Record<PropertyKey, unknown> | string | number;
export type OriginData = Array<NormalData>;
export type PickData = OriginData | Array<OriginData>;
export type PickerBuiltIn = 'date' | 'time' | '';

export interface PickerProps {
  data: PickData;
  isShowPicker: boolean;
  anchor: number | Array<number>;
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
  data?: PickData;
  isShowPicker: boolean;
  options?: Partial<PickerOptions>;
  anchor: number | Array<number>;
  showKey?: string | Array<string>;
  swipeTime?: number;
  type?: PickerBuiltIn;
}
