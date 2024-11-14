import React, { useState } from 'react';
import Picker from '@component-hook/picker/react';

export function TimePicker() {
  const [currentTime, setCurrentTime] = useState<number[]>([]);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div>
      <Picker
        isShowPicker={showPicker}
        onClose={() => setShowPicker(false)}
        anchor={currentTime}
        type="time"
        options={{ titleText: 'time selector' }}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onChangeAnchor={setCurrentTime}
      />
      <button onClick={() => setShowPicker(true)}>toggle time picker</button>

      <p>
        Selected time:{' '}
        {currentTime.length > 0 ? currentTime.map(num => String(num).padStart(2, '0')).join(':') : 'not selected yet'}
      </p>
    </div>
  );
}

function handleConfirm(value: Array<number>) {
  console.log(value);
}

function handleCancel() {
  console.log('cancel');
}
