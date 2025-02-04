import { useState } from 'react';
import { DatePicker, type PickerSelectedValues, type DatePickerColumnType } from '@component-hook/picker/react';

const columnsType: DatePickerColumnType[] = ['month', 'day', 'year'];

export function LabelFormatterPicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([]);

  function onConfirm(values: PickerSelectedValues) {
    setPickerValues(values);
  }

  return (
    <>
      <DatePicker
        show={showPicker}
        title="Label Formatter Selector"
        values={pickerValues}
        columnsType={columnsType}
        formatMonthLabel={formatMonthLabel}
        formatDayLabel={formatDayLabel}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Label Formatter picker</button>

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}

function formatMonthLabel(month: string) {
  const MONTHS_MAP: Record<string, string> = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  return MONTHS_MAP[month];
}

function formatDayLabel(day: string) {
  return day.padStart(2, '0');
}
