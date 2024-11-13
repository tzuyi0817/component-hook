import type { PickerAnchor } from './picker';

export interface PickerEmit<T> {
  onClose: () => void;
  onChangeAnchor: (value: PickerAnchor) => void;
  onCancel?: () => void;
  onConfirm?: (value: T) => void;
}
