import { useEffect, useMemo, useRef, useState } from 'react';
import {
  extendFields,
  formatColumnsToCascade,
  getColumnsType,
  getIndexByValue,
  resetChildrenSelected,
} from '../../shared/utils/common';
import { Columns, type ColumnsRef } from './picker-columns';
import type { PickerColumn } from '../../shared/types';
import type { PickerProps } from '../types';
import '../../shared/index.scss';

export function Picker<T>({
  values,
  columns,
  loading = false,
  loadingSlot,
  emptySlot,
  columnsFieldNames,
  onChange,
}: PickerProps<T>) {
  const [selectedValues, setSelectedValues] = useState<T[]>(values ?? []);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const columnsRef = useRef<ColumnsRef>(null);
  const fields = extendFields(columnsFieldNames);
  const columnsType = getColumnsType(columns, fields);

  const currentColumns = useMemo(() => {
    if (columnsType === 'single') return [columns] as PickerColumn<T>[];
    if (columnsType === 'multiple') return columns as PickerColumn<T>[];

    return formatColumnsToCascade(columns, selectedValues, fields);
  }, [columns, columnsType, selectedValues, fields]);

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
      onChange?.(resetSelectedValues);
    } else {
      setSelectedValues(newSelectedValues);
      onChange?.(newSelectedValues);
    }
  }

  function isValuesChange(current: T[]) {
    return current.some((value, index) => value !== selectedValues[index]);
  }

  useEffect(() => {
    if (!values || !isValuesChange(values)) return;

    setSelectedValues([...values]);
  }, [values]);

  useEffect(() => {
    const n = currentColumns.length;
    const newSelectedIndices = [];
    const newSelectedValues = [...selectedValues];
    let isChange = false;

    for (let index = 0; index < n; index++) {
      const options = currentColumns[index];
      const value = selectedValues[index];
      const selectedIndex = getIndexByValue(options, value, fields);

      if (selectedIndex === -1) {
        const originIndex = selectedIndices[index] ?? 0;
        const specifyIndex = originIndex >= options.length ? Math.max(options.length - 1, 0) : 0;

        newSelectedValues[index] = options[specifyIndex]?.[fields.value];
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

    setSelectedValues(newSelectedValues);
    setSelectedIndices(newSelectedIndices);
  }, [selectedValues, currentColumns, fields]);

  return (
    <div
      className="chook-picker-container"
      aria-label="Picker"
    >
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
    </div>
  );
}
