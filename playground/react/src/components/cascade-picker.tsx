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

function CascadePicker() {
  const [currentSelect, setCurrentSelect] = useState<Array<LangType>>([]);
  const [isShowPicker, setShowPicker] = useState(false);
  const [anchor, setAnchor] = useState([0, 1, 2]);
  const [cascadeData] = useState([singleData, singleData, singleData]);

  function handleConfirm(value: Array<LangType>) {
    setCurrentSelect(value);
  }

  function handleCancel() {
    console.log('cancel');
  }

  return (
    <div>
      <Picker
        isShowPicker={isShowPicker}
        data={cascadeData}
        showKey={['original', 'original', 'original']}
        options={{ titleText: 'cascade selector' }}
        anchor={anchor}
        onChangeAnchor={setAnchor}
        onClose={() => setShowPicker(false)}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <button onClick={() => setShowPicker(true)}>toggle cascade picker</button>

      <p>Selected language1: {currentSelect[0]?.original ?? 'not selected yet'}</p>
      <p>Selected language2: {currentSelect[1]?.original ?? 'not selected yet'}</p>
      <p>Selected language3: {currentSelect[2]?.original ?? 'not selected yet'}</p>
    </div>
  );
}

export default CascadePicker;
