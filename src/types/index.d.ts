export type PickerEmit = (event: "update:isShowPicker", ...args: any[]) => void;

export interface LangType {
  langType?: number;
  code?: string;
  original?: string;
  version?: number;
};

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