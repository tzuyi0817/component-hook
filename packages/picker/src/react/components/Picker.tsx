import { useState, useEffect, useRef, useMemo, type ElementRef } from 'react';
import Popup from './Popup';
import Column, { type ColumnRef } from './PickerColumn';
import {
  extendFields,
  formatColumnsToCascade,
  getColumnsType,
  resetChildrenSelected,
  getIndexByValue,
} from '../../shared/utils/common';
import type { PickerFields, PickerColumn, PickerSelectedValues } from '../../shared/types';

interface Props {
  show: boolean;
  values?: PickerSelectedValues;
  title?: string;
  columns: PickerColumn | PickerColumn[];
  linkage?: boolean;
  loading?: boolean;
  teleport?: Element | DocumentFragment;
  confirmButtonText?: string;
  cancelButtonText?: string;
  columnsFieldNames?: PickerFields;
  onConfirm: (values: PickerSelectedValues) => void;
  onClose: () => void;
  onChange?: (values: PickerSelectedValues) => void;
  onCancel?: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
}

const Picker = ({
  show,
  values,
  title,
  columns,
  linkage = false,
  loading = false,
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
}: Props) => {
  const [internalValues, setInternalValues] = useState<PickerSelectedValues>([]);
  const [selectedValues, setSelectedValues] = useState<PickerSelectedValues>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const columnsRef = useRef<(ColumnRef | null)[]>([]);
  const fields = extendFields(columnsFieldNames);
  const columnsType = getColumnsType(columns, fields);

  const currentColumns = useMemo(() => {
    if (columnsType === 'single') return [columns] as PickerColumn[];
    if (columnsType === 'multiple') return columns as PickerColumn[];

    return formatColumnsToCascade(columns, selectedValues, fields);
  }, [columns, columnsType, selectedValues, fields]);

  useEffect(() => {
    if (!linkage) return;

    onChange?.(selectedValues);
    setInternalValues(selectedValues);
  }, [linkage, selectedValues]);

  useEffect(() => {
    const n = currentColumns.length;
    const newSelectedIndices = [];

    for (let index = 0; index < n; index++) {
      const options = currentColumns[index];
      const value = selectedValues[index];
      const selectedIndex = getIndexByValue(options, value, fields);

      if (selectedIndex === -1) {
        const defaultIndex = value === undefined ? 0 : options.length - 1;

        setSelectedValues(values => {
          values[index] = options[defaultIndex][fields.value];

          return values;
        });
        newSelectedIndices[index] = defaultIndex;
      } else {
        newSelectedIndices[index] = selectedIndex;
      }

      if (newSelectedIndices[index] !== selectedIndices[index]) {
        columnsRef.current[index]?.scrollToSelected(newSelectedIndices[index]);
      }
    }
    setSelectedIndices(newSelectedIndices);
  }, [selectedValues, currentColumns, fields]);

  function updateSelectedValueByIndex(columnIndex: number, selectedIndex: number) {
    const options = currentColumns[columnIndex];
    const value = options[selectedIndex][fields.value];
    const oldValue = selectedValues[columnIndex];

    if (value === oldValue) return;
    const newSelectedValues = [...selectedValues];

    newSelectedValues[columnIndex] = value;
    setSelectedValues(newSelectedValues);

    if (columnsType === 'cascade') {
      const n = currentColumns.length;
      const selectedOptions = options[selectedIndex];

      setSelectedValues(resetChildrenSelected(selectedOptions, columnIndex, newSelectedValues, fields));

      for (let index = columnIndex + 1; index < n; index++) {
        columnsRef.current[index]?.scrollToSelected(0);
      }
    }
  }

  function handleConfirm() {
    setInternalValues(selectedValues);
    onClose();
    onConfirm(selectedValues);
  }

  function handleCancel() {
    onClose();
    onCancel?.();
  }

  function handleOpen() {
    onOpen?.();
    setSelectedValues(values ? [...values] : [...internalValues]);

    // columnsRef.current.forEach(column => column?.scrollToSelected());
  }

  return (
    <Popup
      show={show}
      teleport={teleport}
      onOpen={handleOpen}
      onClose={onClose}
      onClosed={onClosed}
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
      <div
        className="chook-picker-columns chook-picker-columns-backdrop"
        onTouchMove={e => e.stopPropagation()}
      >
        {currentColumns.map((column, index) => (
          <Column
            key={index}
            ref={el => (columnsRef.current[index] = el)}
            column={column}
            fields={fields}
            selectedIndex={selectedIndices[index]}
            onChange={selectedIndex => updateSelectedValueByIndex(index, selectedIndex)}
          />
        ))}

        <div className="chook-picker-mask-backdrop"></div>
      </div>
    </Popup>
  );
};

export default Picker;
