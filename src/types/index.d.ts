type EmitKey = 'update:isShowPicker' | 'update:anchor' | 'cancel' | 'confirm';
export type PickerEmit = (event: EmitKey, ...args: any[]) => void;

export type NormalData = Record<any, any> | string | number;
export type OriginData = Array<NormalData>;
export type PickData = OriginData | Array<OriginData>;

export interface PickerProps {
  data: PickData;
  isShowPicker: boolean;
  anchor: number | Array<number>;
  options?: Partial<PickerOptions>;
  showKey?: string | Array<string>;
  swipeTime?: number;
  type: string;
}

export interface LangType {
  langType?: number;
  code?: string;
  original?: string;
  version?: number;
}

export interface PickerOptions {
  cancelClass: string;
  confirmClass: string;
  titleClass: string;
  cancelColor: string,
  confirmColor: string,
  titleColor: string,
  cancelText: string;
  confirmText: string;
  titleText: string;
}

export interface PickerSelectItems {
  item: Array<NormalData>,
  anchor:  Array<number>,
}