import { DatePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function BasePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <DatePicker
        show={showPicker}
        title="Base Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <button onClick={() => setShowPicker(true)}>toggle Base picker</button>

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}

function onCancel() {
  console.log('cancel');
}
