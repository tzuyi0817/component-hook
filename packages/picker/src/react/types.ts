import type { PickerColumn, PickerFields } from '../shared/types';
import type { ReactNode } from 'react';

export interface PickerProps<T = string | number> {
  show: boolean;
  values?: T[];
  title?: string;
  columns: PickerColumn<T> | PickerColumn<T>[];
  linkage?: boolean;
  loading?: boolean;
  loadingSlot?: ReactNode;
  emptySlot?: ReactNode;
  teleport?: Element | DocumentFragment;
  confirmButtonText?: string;
  cancelButtonText?: string;
  columnsFieldNames?: PickerFields;
  onConfirm?: (values: T[]) => void;
  onClose: () => void;
  onChange?: (values: T[]) => void;
  onCancel?: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
}
