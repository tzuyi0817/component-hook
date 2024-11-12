type EmitKey = 'update:isShowPicker' | 'update:anchor' | 'cancel' | 'confirm';

export type PickerEmit = (event: EmitKey, ...args: unknown[]) => void;
