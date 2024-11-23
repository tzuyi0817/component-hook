import{_ as n}from"./ComponentPicker.vue_vue_type_script_setup_true_lang-CyrvwMp-.js";import{d as t,c as o,u as e,o as r}from"./index-BiLHR64K.js";import"./Demo-3cWm4tRu.js";const c=`import { useState } from 'react';
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

const cascadeData = [singleData, singleData, singleData];

export function CascadePicker() {
  const [currentSelect, setCurrentSelect] = useState<Array<LangType>>([]);
  const [showPicker, setShowPicker] = useState(false);
  const [anchor, setAnchor] = useState([0, 1, 2]);

  function handleConfirm(value: Array<LangType>) {
    setCurrentSelect(value);
  }

  return (
    <div>
      <Picker
        isShowPicker={showPicker}
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

function handleCancel() {
  console.log('cancel');
}
`,i=`import { useState } from 'react';
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
`,a=`import { useState } from 'react';
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
`,s=`import React, { useState } from 'react';
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
`,l="### Attributes\n\n| Name         | Required | Type                  | Description                                                                                | Default               |\n| ------------ | -------- | --------------------- | ------------------------------------------------------------------------------------------ | --------------------- |\n| isShowPicker | true     | `boolean`             | Control picker show                                                                        | —                     |\n| anchor       | true     | `number` / `number[]` | Picker current select index (single column for `number`、 multiple columns for `number[]`) | —                     |\n| data         | false    | `array`               | Picker list [1, 2, 3] or [[1, 2, 3], [1, 2, 3]]                                            | —                     |\n| type         | false    | `string`              | Built-in picker type, no need to pass in data (date, time)                                 | —                     |\n| showKey      | false    | `string` / `string[]` | Wheel options name (object key)                                                            | —                     |\n| swipeTime    | false    | `number`              | Wheel swipe Time                                                                           | 500                   |\n| options      | false    | `object`              | Custom text, color and class                                                               | See below for details |\n",u="### Events\n\n| Event          | Description                                          | Type                                             |\n| :------------- | :--------------------------------------------------- | :----------------------------------------------- |\n| onClose        | close picker show `(need to update state)`           | `Function () => void`                            |\n| onChangeAnchor | update picker anchor `(need to update anchor state)` | `Function (anchor: number` / `number[]) => void` |\n| onConfirm      | Triggered when the confirm button is clicked         | `Function (value: selected item) => void`        |\n| onCancel       | Triggered when the cancel button is clicked          | `Function () => void`                            |\n",f=t({__name:"ReactPicker",setup(g){return(d,p)=>(r(),o(n,{description:"Picker component with react.","cascade-source":e(c),"cascade-playground":"","single-source":e(i),"single-playground":"","date-source":e(a),"date-playground":"","time-source":e(s),"time-playground":"","attributes-md":e(l),"events-md":e(u),language:"tsx"},null,8,["cascade-source","single-source","date-source","time-source","attributes-md","events-md"]))}});export{f as default};
