import type { Dispatch, SetStateAction } from 'react';
import type { NormalData, PickerComponentProps } from './picker';

export interface PickerEmit {
  setShowPicker: Dispatch<SetStateAction<PickerComponentProps['isShowPicker']>>;
  setAnchor: Dispatch<SetStateAction<PickerComponentProps['anchor']>>;
  onCancel?: () => void;
  onConfirm?: (value: NormalData | NormalData[]) => void;
}
