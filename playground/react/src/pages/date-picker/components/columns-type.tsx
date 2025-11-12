import { DatePicker, type DatePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: DatePickerColumnType[] = ['year', 'month'];

export function ColumnsTypePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([2030, 8]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <DatePicker
        values={pickerValues}
        columnsType={columnsType}
        onChange={setPickerValues}
      />

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
  );
}
