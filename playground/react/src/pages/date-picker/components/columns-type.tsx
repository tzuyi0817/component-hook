import { DatePicker, type DatePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: DatePickerColumnType[] = ['year', 'month'];

export function ColumnsTypePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([2030, 8]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <DatePicker
        show={showPicker}
        title="Columns Type Selector"
        values={pickerValues}
        columnsType={columnsType}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Columns Type picker</button>

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}
