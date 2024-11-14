import { useState } from 'react';
import Picker from '@component-hook/picker/react';

interface LangType {
  langType?: number;
  code?: string;
  original?: string;
}

const singleData = [
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
];

export function SinglePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [anchor, setAnchor] = useState(1);
  const [currentSelect, setCurrentSelect] = useState<LangType>({});

  function onConfirm(value: LangType) {
    setCurrentSelect(value);
  }

  return (
    <>
      <Picker
        data={singleData}
        isShowPicker={showPicker}
        anchor={anchor}
        showKey="original"
        options={{ titleText: 'single selector' }}
        onChangeAnchor={setAnchor}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <button onClick={() => setShowPicker(true)}>toggle Single Picker</button>

      <p>Selected language: {currentSelect?.original ?? 'not selected yet'}</p>
    </>
  );
}

function onCancel() {
  console.log('cancel');
}
