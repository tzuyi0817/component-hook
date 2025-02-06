import { useRef, forwardRef, useImperativeHandle } from 'react';
import type { PickerFields, PickerColumn } from '../../shared/types';
import type { Props as PickerProps } from './picker';
import { Column, type ColumnRef } from './picker-column';

interface Props extends Pick<PickerProps, 'loading' | 'loadingSlot' | 'columns' | 'emptySlot'> {
  currentColumns: PickerColumn[];
  fields: Required<PickerFields>;
  selectedIndices: number[];
  updateSelectedValueByIndex: (columnIndex: number, selectedIndex: number) => void;
}

export interface ColumnsRef {
  scrollColumnToSelected: (column: number, index: number) => void;
}

export const Columns = forwardRef<ColumnsRef, Props>((props, ref) => {
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

  useImperativeHandle(ref, () => ({
    scrollColumnToSelected,
  }));

  function scrollColumnToSelected(column: number, index: number) {
    columnsRef.current[column]?.scrollToSelected(index);
  }

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
          ref={el => (columnsRef.current[index] = el)}
          column={column}
          fields={fields}
          selectedIndex={selectedIndices[index]}
          onChange={selectedIndex => updateSelectedValueByIndex(index, selectedIndex)}
        />
      ))}

      <div className="chook-picker-mask-backdrop"></div>
    </div>
  );
});

Columns.displayName = 'Columns';
