import { useState } from 'react';
import Picker from '@component-hook/picker/react';

export function DatePicker() {
  const [currentDate, setCurrentDate] = useState<number[]>([]);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div>
      <Picker
        isShowPicker={showPicker}
        onClose={() => setShowPicker(false)}
        anchor={currentDate}
        type="date"
        options={{ titleText: 'date selector' }}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onChangeAnchor={setCurrentDate}
      />
      <button onClick={() => setShowPicker(true)}>toggle date picker</button>

      <p>Selected date: {currentDate.length > 0 ? currentDate.join('/') : 'not selected yet'}</p>
    </div>
  );
}

function handleConfirm(value: number[]) {
  console.log(value);
}

function handleCancel() {
  console.log('cancel');
}
