import { DatePicker, type DatePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: DatePickerColumnType[] = ['month', 'day', 'year'];

export function LabelFormatterPicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <DatePicker
        values={pickerValues}
        columnsType={columnsType}
        formatMonthLabel={formatMonthLabel}
        formatDayLabel={formatDayLabel}
        onChange={setPickerValues}
      />

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
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
