import { useState } from 'react';
import Picker from '@component-hook/picker/react';

function DatePicker() {
  const [currentDate, setCurrentDate] = useState<number[]>([]);
  const [isShowPicker, setShowPicker] = useState(false);

  function handleConfirm(value: number[]) {
    console.log(value);
  }

  function handleCancel() {
    console.log('cancel');
  }

  return (
    <div>
      <Picker
        isShowPicker={isShowPicker}
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

export default DatePicker;
