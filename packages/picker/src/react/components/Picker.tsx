import { useState, useEffect, useRef, useMemo } from 'react';
import Popup from './Popup';
import Column from './PickerColumn';
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
  teleport?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  columnsFieldNames?: PickerFields;
  onConfirm: (values: PickerSelectedValues) => void;
  onClose: () => void;
  onCancel?: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
}

const Picker = ({
  show,
  values = [],
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
  onCancel,
  onOpen,
  onClosed,
}: Props) => {
  const [internalValues, setInternalValues] = useState<PickerSelectedValues>([]);
  const [selectedValues, setSelectedValues] = useState<PickerSelectedValues>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const columnsRef = useRef<InstanceType<typeof Column>[] | null>([]);
  const fields = extendFields(columnsFieldNames);
  const columnsType = getColumnsType(columns, fields);

  const currentColumns = useMemo(() => {
    if (columnsType === 'single') return [columns] as PickerColumn[];
    if (columnsType === 'multiple') return columns as PickerColumn[];

    return formatColumnsToCascade(columns, selectedValues, fields);
  }, [columns, columnsType, selectedValues, fields]);

  useEffect(() => {
    const newSelectedIndices = currentColumns().map((col, index) => {
      const value = selectedValues[index];
      const selectedIndex = getIndexByValue(col, value, fields);
      return selectedIndex === -1 ? 0 : selectedIndex;
    });
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
        columnsRef.current?.[index].scrollToSelected(0);
      }
    }
    if (!linkage) return;
    setInternalValues();
  }

  const updateModelValue = () => {
    onUpdateModelValue(selectedValues);
    setInternalValues();
  };

  const handleConfirm = () => {
    if (!linkage) updateModelValue();
    onUpdateShow(false);
    onConfirm(selectedValues);
  };

  const handleCancel = () => {
    onUpdateShow(false);
    onCancel();
  };

  const handleOpen = async () => {
    onOpen();
    setSelectedValues(modelValue);
    await new Promise(resolve => setTimeout(resolve, 0));
    columnsRef.current.forEach(col => col.scrollToSelected());
  };

  return (
    <Popup
      show={show}
      teleport={teleport}
      onOpen={handleOpen}
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
        {loading || columns.length === 0 ? (
          <div className="picker-empty">No options</div>
        ) : (
          currentColumns.map((column, index) => (
            <Column
              key={index}
              ref={el => (columnsRef.current[index] = el)}
              column={column}
              fields={fields}
              selectedIndex={selectedIndices[index]}
              onChange={selectedIndex => updateSelectedValueByIndex(index, selectedIndex)}
            />
          ))
        )}
      </div>
    </Popup>
  );
};

export default Picker;
