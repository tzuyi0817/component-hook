import { DatePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function BasePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <DatePicker onChange={setPickerValues} />

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
  );
}
