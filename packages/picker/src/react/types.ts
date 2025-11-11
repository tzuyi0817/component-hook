import type { PickerColumn, PickerFields } from '../shared/types';
import type { ReactNode } from 'react';

export interface PickerProps<T = string | number> {
  values?: T[];
  columns: PickerColumn<T> | PickerColumn<T>[];
  loading?: boolean;
  loadingSlot?: ReactNode;
  emptySlot?: ReactNode;
  columnsFieldNames?: PickerFields;
  onChange?: (values: T[]) => void;
}
