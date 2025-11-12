import { TimePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function BasePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <TimePicker onChange={setPickerValues} />

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </div>
  );
}
