import { TimePicker, type TimePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: TimePickerColumnType[] = ['hour', 'minute'];

export function ColumnsTypePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([12, 50]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <TimePicker
        show={showPicker}
        values={pickerValues}
        title="Columns Type Selector"
        columnsType={columnsType}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Columns Type picker</button>

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </>
  );
}
