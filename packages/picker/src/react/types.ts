import type { NormalData, PickerAnchor } from '../shared/types';

export interface PickerEmit<T = NormalData, D = PickerAnchor> {
  onClose: () => void;
  onChangeAnchor: (value: D) => void;
  onCancel?: () => void;
  onConfirm?: (value: T) => void;
}
