import { DatePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function CustomRangePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <DatePicker
        values={pickerValues}
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2026, 5, 1)}
        onChange={setPickerValues}
      />

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
  );
}
