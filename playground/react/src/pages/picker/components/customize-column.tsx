import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = [
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 3, code: 'jp', original: '日本語' },
  { langType: 4, code: 'kr', original: '한국어' },
];

export function CustomizeColumnPicker() {
  const [pickerValues, setPickerValues] = useState<Array<string | number>>([]);

  return (
    <div style={{ maxWidth: '400px' }}>
      <Picker
        columns={columns}
        columnsFieldNames={{ label: 'original', value: 'code' }}
        onChange={setPickerValues}
      />

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </div>
  );
}
