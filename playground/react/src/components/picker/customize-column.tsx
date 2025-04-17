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
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<Array<string | number>>([]);

  function onConfirm(values: Array<string | number>) {
    setPickerValues(values);
  }

  return (
    <>
      <Picker
        show={showPicker}
        columns={columns}
        title="Customize Column Selector"
        columnsFieldNames={{ label: 'original', value: 'code' }}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Customize Column picker</button>

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </>
  );
}
