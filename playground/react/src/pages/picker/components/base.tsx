import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

export function BasePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '400px' }}>
      <Picker
        columns={columns}
        onChange={setPickerValues}
      />

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </div>
  );
}
