import { useState } from 'react';
import { TimePicker, type PickerSelectedValues } from '@component-hook/picker/react';

export function LabelFormatterPicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([]);

  function onConfirm(values: PickerSelectedValues) {
    setPickerValues(values);
  }

  return (
    <>
      <TimePicker
        show={showPicker}
        values={pickerValues}
        title="Label Formatter Selector"
        formatHourLabel={formatHourLabel}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Label Formatter picker</button>

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </>
  );
}

function formatHourLabel(hour: string) {
  const HOURS_MAP: Record<string, string> = {
    0: '12 AM',
    1: '1 AM',
    2: '2 AM',
    3: '3 AM',
    4: '4 AM',
    5: '5 AM',
    6: '6 AM',
    7: '7 AM',
    8: '8 AM',
    9: '9 AM',
    10: '10 AM',
    11: '11 AM',
    12: '12 PM',
    13: '1 PM',
    14: '2 PM',
    15: '3 PM',
    16: '4 PM',
    17: '5 PM',
    18: '6 PM',
    19: '7 PM',
    20: '8 PM',
    21: '9 PM',
    22: '10 PM',
    23: '11 PM',
  };

  return HOURS_MAP[hour];
}
