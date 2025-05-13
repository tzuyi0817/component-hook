import{_ as t}from"./ComponentDatePicker.vue_vue_type_script_setup_true_lang-B-V_B91O.js";import{d as o,c as n,u as e,o as r}from"./index-DBIHV1iY.js";import"./index-Bmdog-pG.js";import"./installation-CUS7Bvc0.js";const a=`import { DatePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function BasePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <DatePicker
        show={showPicker}
        title="Base Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <button onClick={() => setShowPicker(true)}>toggle Base picker</button>

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}

function onCancel() {
  console.log('cancel');
}
`,c=`import { DatePicker, type DatePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: DatePickerColumnType[] = ['year', 'month'];

export function ColumnsTypePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([2030, 8]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <DatePicker
        show={showPicker}
        title="Columns Type Selector"
        values={pickerValues}
        columnsType={columnsType}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Columns Type picker</button>

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}
`,s=`import { DatePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function CustomRangePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <DatePicker
        show={showPicker}
        title="Custom Range Selector"
        values={pickerValues}
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2026, 5, 1)}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Custom Range picker</button>

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}
`,i=`import { DatePicker, type DatePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: DatePickerColumnType[] = ['month', 'day', 'year'];

export function LabelFormatterPicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <DatePicker
        show={showPicker}
        title="Label Formatter Selector"
        values={pickerValues}
        columnsType={columnsType}
        formatMonthLabel={formatMonthLabel}
        formatDayLabel={formatDayLabel}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Label Formatter picker</button>

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}

function formatMonthLabel(month: string) {
  const MONTHS_MAP: Record<string, string> = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  return MONTHS_MAP[month];
}

function formatDayLabel(day: string) {
  return day.padStart(2, '0');
}
`,l="#### Attributes\n\n| Name              | Required | Type                          | Description                                                               | Default                        |\n| ----------------- | -------- | ----------------------------- | ------------------------------------------------------------------------- | ------------------------------ |\n| values            | false    | `PickerSelectedValues`        | values of chosen option                                                   | —                              |\n| show              | true     | `boolean`                     | Control picker show                                                       | —                              |\n| columnsType       | false    | `DatePickerColumnType[]`      | Columns type                                                              | `['year', 'month', 'day']`     |\n| title             | false    | `string`                      | Toolbar title                                                             | `Select Date`                  |\n| minDate           | false    | `Date`                        | Min date                                                                  | Ten years ago on January 1     |\n| maxDate           | false    | `Date`                        | Max date                                                                  | Ten years later on December 31 |\n| teleport          | false    | `Element \\| DocumentFragment` | Specifies a target element where Popup will be mounted                    | `document.body`                |\n| confirmButtonText | false    | `string`                      | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                      |\n| cancelButtonText  | false    | `string`                      | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                       |\n| formatYearLabel   | false    | `PickerFormatLabel`           | Year label formatter                                                      | —                              |\n| formatMonthLabel  | false    | `PickerFormatLabel`           | Month label formatter                                                     | —                              |\n| formatDayLabel    | false    | `PickerFormatLabel`           | Day label formatter                                                       | —                              |\n\n#### Events\n\n| Event     | Description                                     | Type                                              |\n| :-------- | :---------------------------------------------- | :------------------------------------------------ |\n| onClose   | close picker show `(need to update show state)` | `Function () => void`                             |\n| onConfirm | Triggered when the confirm button is clicked    | `Function (values: PickerSelectedValues) => void` |\n| onCancel  | Triggered when the cancel button is clicked     | `Function () => void`                             |\n| onOpen    | Triggered when the picker open                  | `Function () => void`                             |\n| onClosed  | Triggered when the picker close transition end  | `Function () => void`                             |\n",b=o({__name:"ReactDatePicker",setup(u){return(m,f)=>(r(),n(t,{"front-end-frame":"react","base-source":e(a),"base-playground":"67a3336413fe5303ffefe8ea","columns-type-source":e(c),"columns-type-playground":"67a333c613fe5303ffefe8ed","custom-range-source":e(s),"custom-range-playground":"67a333ff13fe5303ffefe8f0","label-formatter-source":e(i),"label-formatter-playground":"67a3345013fe5303ffefe8f3","index-md":e(l),language:"tsx"},null,8,["base-source","columns-type-source","custom-range-source","label-formatter-source","index-md"]))}});export{b as default};
