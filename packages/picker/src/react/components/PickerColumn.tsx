import { useEffect, useRef, useState, useCallback } from 'react';
import { OPTION_HEIGHT, OPTION_ROTATE_FACTOR } from '../../shared/constants';
import { useScrollSnap } from '../hooks/use-scroll-snap';
import type { PickerColumn, PickerFields } from '../../shared/types';

type Props = {
  column: PickerColumn;
  fields: Required<PickerFields>;
  selectedIndex?: number;
  onChange: (index: number) => void;
};

function Column({ column, fields, selectedIndex = 0, onChange }: Props) {
  const { offsetY, transitionDuration, onPointerDown, onPointerMove, onPointerUp, stopInertialSliding, scrollToIndex } =
    useScrollSnap({
      column,
      onChange: handleSelectedChange,
    });

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
          <li
            key={option[fields.value]}
            className="chook-picker-column-item"
            onClick={() => onClick(index)}
          >
            <p
              className="chook-picker-column-label"
              style={{
                transform: `rotate3d(1, 0, 0, ${(index * OPTION_HEIGHT + offsetY) * OPTION_ROTATE_FACTOR}deg)`,
              }}
            >
              {option[fields.label]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Column;
