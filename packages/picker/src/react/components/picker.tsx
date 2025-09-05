import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  extendFields,
  formatColumnsToCascade,
  getColumnsType,
  getIndexByValue,
  resetChildrenSelected,
} from '../../shared/utils/common';
import type { PickerColumn, PickerFields } from '../../shared/types';
import { Columns, type ColumnsRef } from './picker-columns';
import { Popup } from './popup';
import '../../shared/index.scss';
import '../transition.scss';

export interface Props<T = string | number> {
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

export function Picker<T>({
  show,
  values,
  title,
  columns,
  linkage = false,
  loading = false,
  loadingSlot,
  emptySlot,
  teleport,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  columnsFieldNames,
  onConfirm,
  onClose,
  onChange,
  onCancel,
  onOpen,
  onClosed,
}: Props<T>) {
  const [internalValues, setInternalValues] = useState<T[]>([]);
  const [selectedValues, setSelectedValues] = useState<T[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const columnsRef = useRef<ColumnsRef>(null);
  const fields = extendFields(columnsFieldNames);
  const columnsType = getColumnsType(columns, fields);

  const currentColumns = useMemo(() => {
    if (columnsType === 'single') return [columns] as PickerColumn<T>[];
    if (columnsType === 'multiple') return columns as PickerColumn<T>[];

    return formatColumnsToCascade(columns, selectedValues, fields);
  }, [columns, columnsType, selectedValues, fields]);

  useEffect(() => {
    if (!values) return;
    const isSame = values.every((value, index) => value === selectedValues[index]);

    if (isSame) return;

    setSelectedValues(values);
  }, [values]);

  useEffect(() => {
    const n = currentColumns.length;
    const newSelectedIndices = [];
    let isChange = false;

    for (let index = 0; index < n; index++) {
      const options = currentColumns[index];
      const value = selectedValues[index];
      const selectedIndex = getIndexByValue(options, value, fields);

      if (selectedIndex === -1) {
        const originIndex = selectedIndices[index] ?? 0;
        const specifyIndex = originIndex >= options.length ? Math.max(options.length - 1, 0) : 0;

        updateSelectedValueByIndex(index, specifyIndex);
        newSelectedIndices[index] = specifyIndex;
      } else {
        newSelectedIndices[index] = selectedIndex;
      }

      if (newSelectedIndices[index] !== selectedIndices[index]) {
        columnsRef.current?.scrollColumnToSelected(index, newSelectedIndices[index]);
        isChange = true;
      }
    }

    if (!isChange) return;

    setSelectedIndices(newSelectedIndices);
  }, [selectedValues, currentColumns, fields]);

  function updateSelectedValueByIndex(columnIndex: number, selectedIndex: number) {
    const options = currentColumns[columnIndex];
    const value = options[selectedIndex]?.[fields.value];
    const oldValue = selectedValues[columnIndex];

    if (value === oldValue) return;
    const newSelectedValues = [...selectedValues];

    newSelectedValues[columnIndex] = value;

    if (columnsType === 'cascade') {
      const selectedOptions = options[selectedIndex];
      const resetSelectedValues = resetChildrenSelected(selectedOptions, columnIndex, newSelectedValues, fields);

      setSelectedValues(resetSelectedValues);
      handleChangeValues(resetSelectedValues);
    } else {
      setSelectedValues(newSelectedValues);
      handleChangeValues(newSelectedValues);
    }
  }

  function handleChangeValues(newValues: T[]) {
    onChange?.(newValues);

    if (!linkage) return;

    setInternalValues(newValues);
  }

  function handleConfirm() {
    setInternalValues(selectedValues);
    onClose();
    onConfirm?.(selectedValues);
  }

  function handleCancel() {
    onClose();
    onCancel?.();
  }

  function handleOpen() {
    onOpen?.();
    setSelectedValues(values ? [...values] : [...internalValues]);
  }

  function handleClosed() {
    onClosed?.();
  }

  return (
    <Popup
      show={show}
      teleport={teleport}
      onOpen={handleOpen}
      onClose={onClose}
      onClosed={handleClosed}
    >
      <div className="chook-picker-header">
        <button
          className="chook-picker-cancel"
          onClick={handleCancel}
        >
          {cancelButtonText}
        </button>
        <p className="chook-picker-title">{title}</p>
        <button
          className="chook-picker-confirm"
          onClick={handleConfirm}
        >
          {confirmButtonText}
        </button>
      </div>

      <Columns
        ref={columnsRef}
        loading={loading}
        loadingSlot={loadingSlot}
        columns={columns}
        emptySlot={emptySlot}
        currentColumns={currentColumns}
        fields={fields}
        selectedIndices={selectedIndices}
        updateSelectedValueByIndex={updateSelectedValueByIndex}
      />
    </Popup>
  );
}
