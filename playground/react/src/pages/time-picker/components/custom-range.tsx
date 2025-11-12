import { TimePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function CustomRangePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <TimePicker
        values={pickerValues}
        minTime="12:20:30"
        maxTime="16:30:48"
        onChange={setPickerValues}
      />

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </div>
  );
}
