import { useState } from 'react';
import { DatePicker, type PickerSelectedValues } from '@component-hook/picker/react';

export function BasePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([]);

  function onConfirm(values: PickerSelectedValues) {
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
