import type { Dispatch, SetStateAction } from 'react';
import type { PickerComponentProps } from './picker';

export interface PickerEmit<T> {
  setShowPicker: Dispatch<SetStateAction<PickerComponentProps['isShowPicker']>>;
  setAnchor: Dispatch<SetStateAction<PickerComponentProps['anchor']>>;
  onCancel?: () => void;
  onConfirm?: (value: T) => void;
}
