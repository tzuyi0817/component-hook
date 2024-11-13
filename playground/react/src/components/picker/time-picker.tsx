import React, { useState } from 'react';
import Picker from '@component-hook/picker/react';

function TimePicker() {
  const [currentTime, setCurrentTime] = useState<number[]>([]);
  const [isShowPicker, setIsShowPicker] = useState(false);

  function handleConfirm(value: Array<number>) {
    console.log(value);
  }

  const handleCancel = () => {
    console.log('cancel');
  };

  return (
    <div>
      <Picker
        isShowPicker={isShowPicker}
        onClose={() => setIsShowPicker(false)}
        anchor={currentTime}
        type="time"
        options={{ titleText: 'time selector' }}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onChangeAnchor={setCurrentTime}
      />
      <button onClick={() => setIsShowPicker(true)}>toggle time picker</button>

      <p>
        Selected time:{' '}
        {currentTime.length > 0 ? currentTime.map(num => String(num).padStart(2, '0')).join(':') : 'not selected yet'}
      </p>
    </div>
  );
}

export default TimePicker;
