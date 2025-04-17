import { useImperativeHandle, type ForwardedRef } from 'react';
import { OPTION_HEIGHT, OPTION_ROTATE_FACTOR } from '../../shared/constants';
import { fixedForwardRef } from '../hooks/fixed-forward-ref';
import { useScrollSnap } from '../hooks/use-scroll-snap';
import type { PickerColumn, PickerFields } from '../../shared/types';

type Props<T> = {
  column: PickerColumn<T>;
  fields: Required<PickerFields>;
  selectedIndex?: number;
  onChange: (index: number) => void;
};

export type ColumnRef = {
  scrollToSelected: (index?: number, behavior?: ScrollBehavior) => void;
};

function ColumnComponent<T>({ column, fields, selectedIndex = 0, onChange }: Props<T>, ref: ForwardedRef<ColumnRef>) {
  const { offsetY, transitionDuration, onPointerDown, onPointerMove, onPointerUp, stopInertialSliding, scrollToIndex } =
    useScrollSnap({
      column,
      onChange: handleSelectedChange,
    });

  useImperativeHandle(ref, () => ({
    scrollToSelected,
  }));

  function handleSelectedChange(index: number) {
    if (index === selectedIndex) return;

    onChange(index);
  }

  function scrollToSelected(index = selectedIndex, behavior?: ScrollBehavior) {
    scrollToIndex(index, behavior);
  }

  function onClick(index: number) {
    if (index === selectedIndex) return;
    scrollToSelected(index, 'smooth');
  }

  return (
    <div
      role="presentation"
      className="chook-picker-column"
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
      onTouchCancel={onPointerUp}
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
    >
      <ul
        style={{
          overflowY: 'hidden',
          transform: `translate3d(0, ${offsetY}px, 0)`,
          transitionDuration: `${transitionDuration}ms`,
          transitionProperty: transitionDuration ? 'all' : 'none',
        }}
        onTransitionEnd={stopInertialSliding}
      >
        {column.map((option, index) => (
          <div
            key={option?.[fields.value]}
            tabIndex={0}
            role="button"
            aria-label="Select option"
            className="chook-picker-column-item"
            onClick={() => onClick(index)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                onClick(index);
              }
            }}
          >
            <p
              className="chook-picker-column-label"
              style={{
                transform: `rotate3d(1, 0, 0, ${(index * OPTION_HEIGHT + offsetY) * OPTION_ROTATE_FACTOR}deg)`,
              }}
            >
              {option?.[fields.label]}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export const Column = fixedForwardRef(ColumnComponent);

Column.displayName = 'Column';
