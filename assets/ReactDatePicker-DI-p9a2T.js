import{_ as n}from"./ComponentDatePicker.vue_vue_type_script_setup_true_lang-CcihxjuC.js";import{d as t,c as a,u as e,o as r}from"./index-94NZVcRB.js";import"./index-CVx_3QrS.js";import"./installation-CP_Ik9wL.js";const o=`import { DatePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function BasePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <DatePicker onChange={setPickerValues} />

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
  );
}
`,c=`import { DatePicker, type DatePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: DatePickerColumnType[] = ['year', 'month'];

export function ColumnsTypePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([2030, 8]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <DatePicker
        values={pickerValues}
        columnsType={columnsType}
        onChange={setPickerValues}
      />

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
  );
}
`,s=`import { DatePicker } from '@component-hook/picker/react';
import { useState } from 'react';

export function CustomRangePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <DatePicker
        values={pickerValues}
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2026, 5, 1)}
        onChange={setPickerValues}
      />

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
  );
}
`,u=`import { DatePicker, type DatePickerColumnType } from '@component-hook/picker/react';
import { useState } from 'react';

const columnsType: DatePickerColumnType[] = ['month', 'day', 'year'];

export function LabelFormatterPicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <DatePicker
        values={pickerValues}
        columnsType={columnsType}
        formatMonthLabel={formatMonthLabel}
        formatDayLabel={formatDayLabel}
        onChange={setPickerValues}
      />

      <p>Selected date: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
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
`,l=`#### Attributes

| Name             | Required | Type                     | Description             | Default                        |
| ---------------- | -------- | ------------------------ | ----------------------- | ------------------------------ |
| values           | false    | \`PickerSelectedValues\`   | values of chosen option | —                              |
| columnsType      | false    | \`DatePickerColumnType[]\` | Columns type            | \`['year', 'month', 'day']\`     |
| minDate          | false    | \`Date\`                   | Min date                | Ten years ago on January 1     |
| maxDate          | false    | \`Date\`                   | Max date                | Ten years later on December 31 |
| formatYearLabel  | false    | \`PickerFormatLabel\`      | Year label formatter    | —                              |
| formatMonthLabel | false    | \`PickerFormatLabel\`      | Month label formatter   | —                              |
| formatDayLabel   | false    | \`PickerFormatLabel\`      | Day label formatter     | —                              |

#### Events

| Event    | Description                               | Type                                              |
| :------- | :---------------------------------------- | :------------------------------------------------ |
| onChange | Triggered when the selected value changes | \`Function (values: PickerSelectedValues) => void\` |

#### Exposes

| Name           | Description                        | Type                  |
| :------------- | :--------------------------------- | :-------------------- |
| setCurrentDate | Reset the date to the current date | \`Function () => void\` |
`,D=t({__name:"ReactDatePicker",setup(i){return(m,p)=>(r(),a(n,{"front-end-frame":"react","base-source":e(o),"base-playground":"67a3336413fe5303ffefe8ea","columns-type-source":e(c),"columns-type-playground":"67a333c613fe5303ffefe8ed","custom-range-source":e(s),"custom-range-playground":"67a333ff13fe5303ffefe8f0","label-formatter-source":e(u),"label-formatter-playground":"67a3345013fe5303ffefe8f3","index-md":e(l),language:"tsx"},null,8,["base-source","columns-type-source","custom-range-source","label-formatter-source","index-md"]))}});export{D as default};
