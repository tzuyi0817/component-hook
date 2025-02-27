import { useState } from 'react';
import { Picker } from '@component-hook/picker/react';

const columns = Array.from({ length: 2 }, () =>
  Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
);

export function MultiColumnPicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([2, 20]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <Picker
        show={showPicker}
        columns={columns}
        values={pickerValues}
        title="Multiple Column Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Multiple Column picker</button>

      <p>Selected value: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}
