export type PickerEmit = (event: "update:isShowPicker", ...args: any[]) => void;

export interface LangType {
  langType?: number;
  code?: string;
  original?: string;
  version?: number;
};