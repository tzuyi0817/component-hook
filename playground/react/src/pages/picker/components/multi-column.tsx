import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = Array.from({ length: 2 }, () =>
  Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
);

export function MultiColumnPicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([2, 20]);

  return (
    <div style={{ maxWidth: '400px' }}>
      <Picker
        columns={columns}
        values={pickerValues}
        onChange={setPickerValues}
      />

      <p>Selected value: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
  );
}
