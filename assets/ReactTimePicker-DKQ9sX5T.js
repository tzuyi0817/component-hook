import{_ as t}from"./ComponentTimePicker.vue_vue_type_script_setup_true_lang-7EGwqNkB.js";import{d as o,c as n,u as e,o as r}from"./index-BwZQaOI9.js";import"./Demo-CM02FZMG.js";import"./index-BGUhIpJK.js";import"./css-variables-6xOgIXib.js";const c=`import { useState } from 'react';
import { TimePicker } from '@component-hook/picker/react';

export function BasePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <TimePicker
        show={showPicker}
        title="Base Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <button onClick={() => setShowPicker(true)}>toggle Base picker</button>

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </>
  );
}

function onCancel() {
  console.log('cancel');
}
`,i=`import { useState } from 'react';
import { TimePicker, type TimePickerColumnType } from '@component-hook/picker/react';

const columnsType: TimePickerColumnType[] = ['hour', 'minute'];

export function ColumnsTypePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([12, 50]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <TimePicker
        show={showPicker}
        values={pickerValues}
        title="Columns Type Selector"
        columnsType={columnsType}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Columns Type picker</button>

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </>
  );
}
`,s=`import { useState } from 'react';
import { TimePicker } from '@component-hook/picker/react';

export function CustomRangePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <TimePicker
        show={showPicker}
        values={pickerValues}
        title="Custom Range Selector"
        minTime="12:20:30"
        maxTime="16:30:48"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Custom Range picker</button>

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </>
  );
}
`,a=`import { useState } from 'react';
import { TimePicker } from '@component-hook/picker/react';

export function LabelFormatterPicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <TimePicker
        show={showPicker}
        values={pickerValues}
        title="Label Formatter Selector"
        formatHourLabel={formatHourLabel}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Label Formatter picker</button>

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </>
  );
}

function formatHourLabel(hour: string) {
  const HOURS_MAP: Record<string, string> = {
    0: '12 AM',
    1: '1 AM',
    2: '2 AM',
    3: '3 AM',
    4: '4 AM',
    5: '5 AM',
    6: '6 AM',
    7: '7 AM',
    8: '8 AM',
    9: '9 AM',
    10: '10 AM',
    11: '11 AM',
    12: '12 PM',
    13: '1 PM',
    14: '2 PM',
    15: '3 PM',
    16: '4 PM',
    17: '5 PM',
    18: '6 PM',
    19: '7 PM',
    20: '8 PM',
    21: '9 PM',
    22: '10 PM',
    23: '11 PM',
  };

  return HOURS_MAP[hour];
}
`,l="#### Attributes\n\n| Name              | Required | Type                          | Description                                                               | Default                        |\n| ----------------- | -------- | ----------------------------- | ------------------------------------------------------------------------- | ------------------------------ |\n| values            | false    | `PickerSelectedValues`        | values of chosen option                                                   | —                              |\n| show              | true     | `boolean`                     | Control picker show                                                       | —                              |\n| columnsType       | false    | `TimePickerColumnType[]`      | Columns type                                                              | `['hour', 'minute', 'second']` |\n| title             | false    | `string`                      | Toolbar title                                                             | `Select Time`                  |\n| minTime           | false    | `string`                      | Min time, format reference `00:00:00`                                     | —                              |\n| maxTime           | false    | `string`                      | Max time, format reference `00:00:00`                                     | —                              |\n| teleport          | false    | `Element \\| DocumentFragment` | Specifies a target element where Popup will be mounted                    | `document.body`                |\n| confirmButtonText | false    | `string`                      | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                      |\n| cancelButtonText  | false    | `string`                      | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                       |\n| formatHourLabel   | false    | `PickerFormatLabel`           | Hour label formatter                                                      | —                              |\n| formatMinuteLabel | false    | `PickerFormatLabel`           | Minute label formatter                                                    | —                              |\n| formatSecondLabel | false    | `PickerFormatLabel`           | Second label formatter                                                    | —                              |\n\n#### Events\n\n| Event     | Description                                     | Type                                              |\n| :-------- | :---------------------------------------------- | :------------------------------------------------ |\n| onClose   | close picker show `(need to update show state)` | `Function () => void`                             |\n| onConfirm | Triggered when the confirm button is clicked    | `Function (values: PickerSelectedValues) => void` |\n| onCancel  | Triggered when the cancel button is clicked     | `Function () => void`                             |\n| onOpen    | Triggered when the picker open                  | `Function () => void`                             |\n| onClosed  | Triggered when the picker close transition end  | `Function () => void`                             |\n",d=o({__name:"ReactTimePicker",setup(u){return(m,f)=>(r(),n(t,{"front-end-frame":"react","base-source":e(c),"base-playground":"67a3349813fe5303ffefe8f6","columns-type-source":e(i),"columns-type-playground":"67a334d513fe5303ffefe8f9","custom-range-source":e(s),"custom-range-playground":"67a3350813fe5303ffefe8fc","label-formatter-source":e(a),"label-formatter-playground":"67a3353c13fe5303ffefe8ff","index-md":e(l),language:"tsx"},null,8,["base-source","columns-type-source","custom-range-source","label-formatter-source","index-md"]))}});export{d as default};
