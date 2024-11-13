import { useState, useEffect } from 'react';
import Picker from '@component-hook/picker/react';

interface LangType {
  langType?: number;
  code?: string;
  original?: string;
}

function SinglePicker() {
  const [isShowPicker, setShowPicker] = useState(false);
  const [anchor, setAnchor] = useState(1);
  const [currentSelect, setCurrentSelect] = useState<LangType>({});
  const [singleData] = useState([
    { langType: 2, code: 'vi', original: 'Tiếng Việt' },
    { langType: 0, code: 'en', original: 'English' },
    { langType: 1, code: 'cn', original: '中文' },
  ]);

  function onConfirm(value: LangType) {
    setCurrentSelect(value);
  }

  function onCancel() {
    console.log('cancel');
  }

  return (
    <>
      <Picker
        data={singleData}
        isShowPicker={isShowPicker}
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

export default SinglePicker;
