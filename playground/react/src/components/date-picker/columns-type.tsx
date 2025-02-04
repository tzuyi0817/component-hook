import { useState } from 'react';
import { DatePicker, type PickerSelectedValues, type DatePickerColumnType } from '@component-hook/picker/react';

const columnsType: DatePickerColumnType[] = ['year', 'month'];

export function ColumnsTypePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([2030, 8]);

  function onConfirm(values: PickerSelectedValues) {
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
