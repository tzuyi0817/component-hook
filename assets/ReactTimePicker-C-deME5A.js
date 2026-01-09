import{_ as n}from"./ComponentTimePicker.vue_vue_type_script_setup_true_lang-DeCiV7Bx.js";import{d as t,c as r,u as e,o}from"./index-D4VH8fn5.js";import"./index-LwVZTVUd.js";import"./installation-CvomwArf.js";const a=`import { TimePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function BasePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <TimePicker onChange={setPickerValues} />

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </div>
  );
}
`,c=`import { TimePicker, type TimePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: TimePickerColumnType[] = ['hour', 'minute'];

export function ColumnsTypePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([12, 50]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <TimePicker
        values={pickerValues}
        columnsType={columnsType}
        onChange={setPickerValues}
      />

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </div>
  );
}
`,i=`import { TimePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function CustomRangePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <TimePicker
        values={pickerValues}
        minTime="12:20:30"
        maxTime="16:30:48"
        onChange={setPickerValues}
      />

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </div>
  );
}
`,s=`import { TimePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function LabelFormatterPicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <TimePicker
        values={pickerValues}
        formatHourLabel={formatHourLabel}
        onChange={setPickerValues}
      />

      <p>Selected time: {pickerValues.join(':') || 'not selected yet'}</p>
    </div>
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
`,u="#### Attributes\n\n| Name              | Required | Type                     | Description                           | Default                        |\n| ----------------- | -------- | ------------------------ | ------------------------------------- | ------------------------------ |\n| values            | false    | `PickerSelectedValues`   | values of chosen option               | —                              |\n| columnsType       | false    | `TimePickerColumnType[]` | Columns type                          | `['hour', 'minute', 'second']` |\n| minTime           | false    | `string`                 | Min time, format reference `00:00:00` | —                              |\n| maxTime           | false    | `string`                 | Max time, format reference `00:00:00` | —                              |\n| formatHourLabel   | false    | `PickerFormatLabel`      | Hour label formatter                  | —                              |\n| formatMinuteLabel | false    | `PickerFormatLabel`      | Minute label formatter                | —                              |\n| formatSecondLabel | false    | `PickerFormatLabel`      | Second label formatter                | —                              |\n\n#### Events\n\n| Event    | Description                               | Type                                              |\n| :------- | :---------------------------------------- | :------------------------------------------------ |\n| onChange | Triggered when the selected value changes | `Function (values: PickerSelectedValues) => void` |\n\n#### Exposes\n\n| Name           | Description                        | Type                  |\n| :------------- | :--------------------------------- | :-------------------- |\n| setCurrentTime | Reset the time to the current time | `Function () => void` |\n",M=t({__name:"ReactTimePicker",setup(m){return(l,p)=>(o(),r(n,{"front-end-frame":"react","base-source":e(a),"base-playground":"67a3349813fe5303ffefe8f6","columns-type-source":e(c),"columns-type-playground":"67a334d513fe5303ffefe8f9","custom-range-source":e(i),"custom-range-playground":"67a3350813fe5303ffefe8fc","label-formatter-source":e(s),"label-formatter-playground":"67a3353c13fe5303ffefe8ff","index-md":e(u),language:"tsx"},null,8,["base-source","columns-type-source","custom-range-source","label-formatter-source","index-md"]))}});export{M as default};
