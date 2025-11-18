import{_ as n}from"./ComponentPicker.vue_vue_type_script_setup_true_lang-CZD31ycS.js";import{d as l,c as a,u as e,o}from"./index-DFvhvX9c.js";import"./index-Qr6EIkqn.js";import"./installation-Bbr-92dT.js";const c=`import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

export function BasePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <div style={{ maxWidth: '400px' }}>
      <Picker
        columns={columns}
        onChange={setPickerValues}
      />

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </div>
  );
}
`,t=`import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = [
  {
    label: 'Electronics',
    value: 'electronics',
    children: [
      {
        label: 'Mobile',
        value: 'mobile',
        children: [
          { label: 'Smartphone', value: 'smartphone' },
          { label: 'Feature Phone', value: 'feature-phone' },
        ],
      },
      {
        label: 'Computer',
        value: 'computer',
        children: [
          { label: 'Laptop', value: 'laptop' },
          { label: 'Desktop', value: 'desktop' },
        ],
      },
    ],
  },
  {
    label: 'Home Appliances',
    value: 'home-appliances',
    children: [
      {
        label: 'Kitchen Appliances',
        value: 'kitchen-appliances',
        children: [
          { label: 'Microwave', value: 'microwave' },
          { label: 'Refrigerator', value: 'refrigerator' },
        ],
      },
      {
        label: 'Cleaning Appliances',
        value: 'cleaning-appliances',
        children: [
          { label: 'Vacuum Cleaner', value: 'vacuum-cleaner' },
          { label: 'Robot Vacuum', value: 'robot-vacuum' },
        ],
      },
    ],
  },
  {
    label: 'Clothing',
    value: 'clothing',
    children: [
      {
        label: 'Mens Clothing',
        value: 'mens-clothing',
        children: [
          { label: 'Shirt', value: 'shirt' },
          { label: 'Trousers', value: 'trousers' },
        ],
      },
      {
        label: 'Womens Clothing',
        value: 'womens-clothing',
        children: [
          { label: 'Dress', value: 'dress' },
          { label: 'Skirt', value: 'skirt' },
        ],
      },
    ],
  },
];

export function CascadePicker() {
  const [pickerValues, setPickerValues] = useState<string[]>([]);

  return (
    <>
      <div style={{ maxWidth: '500px' }}>
        <Picker
          columns={columns}
          values={pickerValues}
          onChange={setPickerValues}
        />
      </div>

      <p>Selected value: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}
`,r=`import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = [
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 3, code: 'jp', original: '日本語' },
  { langType: 4, code: 'kr', original: '한국어' },
];

export function CustomizeColumnPicker() {
  const [pickerValues, setPickerValues] = useState<Array<string | number>>([]);

  return (
    <div style={{ maxWidth: '400px' }}>
      <Picker
        columns={columns}
        columnsFieldNames={{ label: 'original', value: 'code' }}
        onChange={setPickerValues}
      />

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </div>
  );
}
`,i=`import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = Array.from({ length: 2 }, () =>
  Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
);

export function MultiColumnPicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([2, 20]);

  return (
    <div style={{ maxWidth: '400px' }}>
      <Picker
        columns={columns}
        values={pickerValues}
        onChange={setPickerValues}
      />

      <p>Selected value: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </div>
  );
}
`,s="#### Attributes\n\n| Name              | Required | Type                             | Description                    | Default                                                  |\n| ----------------- | -------- | -------------------------------- | ------------------------------ | -------------------------------------------------------- |\n| values            | false    | `PickerSelectedValues`           | values of chosen option        | —                                                        |\n| columns           | true     | `PickerColumn \\| PickerColumn[]` | Columns data                   | —                                                        |\n| title             | false    | `string`                         | Toolbar title                  | —                                                        |\n| loading           | false    | `boolean`                        | Whether to show loading prompt | `false`                                                  |\n| loadingSlot       | false    | `ReactNode`                      | Custom loading content         | —                                                        |\n| emptySlot         | false    | `ReactNode`                      | Custom empty content           | —                                                        |\n| columnsFieldNames | false    | `PickerFields`                   | custom columns field           | `{ text: 'text', value: 'value', children: 'children' }` |\n\n#### Events\n\n| Event    | Description                               | Type                                              |\n| :------- | :---------------------------------------- | :------------------------------------------------ |\n| onChange | Triggered when the selected value changes | `Function (values: PickerSelectedValues) => void` |\n",g=l({__name:"ReactPicker",setup(u){return(m,p)=>(o(),a(n,{"front-end-frame":"react","base-source":e(c),"base-playground":"675aad63c39ce4f761bd8622","multi-column-source":e(i),"multi-column-playground":"675aae60c39ce4f761bd8637","cascade-source":e(t),"cascade-playground":"67569e8087493a239347d7ce","customize-column-source":e(r),"customize-column-playground":"675aae0cc39ce4f761bd8633","index-md":e(s),language:"tsx"},null,8,["base-source","multi-column-source","cascade-source","customize-column-source","index-md"]))}});export{g as default};
