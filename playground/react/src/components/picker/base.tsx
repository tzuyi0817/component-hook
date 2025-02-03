import { useState } from 'react';
import { Picker, type PickerSelectedValues } from '@component-hook/picker/react';

const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

export function BasePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([]);

  function onConfirm(values: PickerSelectedValues) {
    setPickerValues(values);
  }

  return (
    <>
      <Picker
        show={showPicker}
        columns={columns}
        title="Base Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <button onClick={() => setShowPicker(true)}>toggle Base Picker</button>

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </>
  );
}

function onCancel() {
  console.log('cancel');
}
