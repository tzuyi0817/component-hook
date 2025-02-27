import { useState } from 'react';
import { TimePicker } from '@component-hook/picker/react';

export function CustomRangePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <TimePicker
        show={showPicker}
        values={pickerValues}
        title="Custom Range Selector"
        minTime="12:20:30"
        maxTime="16:30:48"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Custom Range picker</button>

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </>
  );
}
