import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

export function BasePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <Picker
        show={showPicker}
        columns={columns}
        title="Base Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <button onClick={() => setShowPicker(true)}>toggle Base picker</button>

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </>
  );
}

function onCancel() {
  console.log('cancel');
}
