import { useState } from 'react';
import { DatePicker, type PickerSelectedValues } from '@component-hook/picker/react';

export function CustomRangePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([]);

  function onConfirm(values: PickerSelectedValues) {
    setPickerValues(values);
  }

  return (
    <>
      <DatePicker
        show={showPicker}
        title="Custom Range Selector"
        values={pickerValues}
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2026, 5, 1)}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Custom Range picker</button>

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}
