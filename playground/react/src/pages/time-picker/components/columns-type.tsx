import { TimePicker, type TimePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: TimePickerColumnType[] = ['hour', 'minute'];

export function ColumnsTypePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([12, 50]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <TimePicker
        values={pickerValues}
        columnsType={columnsType}
        onChange={setPickerValues}
      />

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </div>
  );
}
