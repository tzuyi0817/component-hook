import { useImperativeHandle, useRef, type ForwardedRef } from 'react';
import { fixedForwardRef } from '../hooks/fixed-forward-ref';
import { Column, type ColumnRef } from './picker-column';
import type { PickerColumn, PickerFields } from '../../shared/types';
import type { PickerProps } from '../types';

interface Props<T> extends Pick<PickerProps<T>, 'loading' | 'loadingSlot' | 'columns' | 'emptySlot'> {
  currentColumns: PickerColumn<T>[];
  fields: Required<PickerFields>;
  selectedIndices: number[];
  updateSelectedValueByIndex: (columnIndex: number, selectedIndex: number) => void;
}

export interface ColumnsRef {
  scrollColumnToSelected: (column: number, index: number) => void;
}

function ColumnsComponent<T>(props: Props<T>, ref: ForwardedRef<ColumnsRef>) {
  const {
    loading,
    loadingSlot,
    columns,
    emptySlot,
    currentColumns,
    fields,
    selectedIndices,
    updateSelectedValueByIndex,
  } = props;
  const columnsRef = useRef<(ColumnRef | null)[]>([]);

  function scrollColumnToSelected(column: number, index: number) {
    columnsRef.current[column]?.scrollToSelected(index);
  }

  useImperativeHandle(ref, () => ({
    scrollColumnToSelected,
  }));

  if (loading) {
    return (
      <>
        <div className="chook-picker-loading">{loadingSlot}</div>
        <div className="chook-picker-columns"></div>
      </>
    );
  }

  if (!columns.length) {
    return <div className="chook-picker-columns">{emptySlot}</div>;
  }

  return (
    <div
      className="chook-picker-columns chook-picker-columns-backdrop"
      onTouchMove={e => e.stopPropagation()}
    >
      {currentColumns.map((column, index) => (
        <Column
          key={index}
          ref={el => {
            columnsRef.current[index] = el;
          }}
          column={column}
          fields={fields}
          selectedIndex={selectedIndices[index]}
          onChange={selectedIndex => updateSelectedValueByIndex(index, selectedIndex)}
        />
      ))}

      <div className="chook-picker-mask-backdrop"></div>
    </div>
  );
}

export const Columns = fixedForwardRef(ColumnsComponent);

Columns.displayName = 'Columns';
