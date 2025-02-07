import{_ as o}from"./ComponentPicker.vue_vue_type_script_setup_true_lang-BCMTmUem.js";import{d as t,c as n,u as e,o as l}from"./index-BuFIJLS7.js";import"./Demo-CAN2sQ6g.js";import"./index-BGUhIpJK.js";import"./css-variables-Ccm9HqIK.js";const c=`import { useState } from 'react';
import { Picker, type PickerSelectedValues } from '@component-hook/picker/react';

const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

export function BasePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([]);

  function onConfirm(values: PickerSelectedValues) {
    setPickerValues(values);
  }

  return (
    <>
      <Picker
        show={showPicker}
        columns={columns}
        title="Base Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <button onClick={() => setShowPicker(true)}>toggle Base picker</button>

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </>
  );
}

function onCancel() {
  console.log('cancel');
}
`,a=`import { useState } from 'react';
import { Picker, type PickerSelectedValues } from '@component-hook/picker/react';

const columns = Array.from({ length: 2 }, () =>
  Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
);

export function MultiColumnPicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([2, 20]);

  function onConfirm(values: PickerSelectedValues) {
    setPickerValues(values);
  }

  return (
    <>
      <Picker
        show={showPicker}
        columns={columns}
        values={pickerValues}
        title="Multiple Column Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Multiple Column picker</button>

      <p>Selected value: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}
`,i=`import { useState } from 'react';
import { Picker, type PickerSelectedValues } from '@component-hook/picker/react';

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
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([]);

  function onConfirm(values: PickerSelectedValues) {
    setPickerValues(values);
  }

  return (
    <>
      <Picker
        show={showPicker}
        columns={columns}
        values={pickerValues}
        title="Cascade Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Cascade picker</button>

      <p>Selected value: {pickerValues.join(' / ') || 'not selected yet'}</p>
    </>
  );
}
`,r=`import { useState } from 'react';
import { Picker, type PickerSelectedValues } from '@component-hook/picker/react';

const columns = [
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 3, code: 'jp', original: '日本語' },
  { langType: 4, code: 'kr', original: '한국어' },
];

export function CustomizeColumnPicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<PickerSelectedValues>([]);

  function onConfirm(values: PickerSelectedValues) {
    setPickerValues(values);
  }

  return (
    <>
      <Picker
        show={showPicker}
        columns={columns}
        title="Customize Column Selector"
        columnsFieldNames={{ label: 'original', value: 'code' }}
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
      />

      <button onClick={() => setShowPicker(true)}>toggle Customize Column picker</button>

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </>
  );
}
`,s="#### Attributes\n\n| Name              | Required | Type                             | Description                                                               | Default                                                  |\n| ----------------- | -------- | -------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |\n| values            | false    | `PickerSelectedValues`           | values of chosen option                                                   | —                                                        |\n| show              | true     | `boolean`                        | Control picker show                                                       | —                                                        |\n| columns           | true     | `PickerColumn \\| PickerColumn[]` | Columns data                                                              | —                                                        |\n| title             | false    | `string`                         | Toolbar title                                                             | —                                                        |\n| loading           | false    | `boolean`                        | Whether to show loading prompt                                            | `false`                                                  |\n| loadingSlot       | false    | `ReactNode`                      | Custom loading content                                                    | —                                                        |\n| emptySlot         | false    | `ReactNode`                      | Custom empty content                                                      | —                                                        |\n| teleport          | false    | `Element \\| DocumentFragment`    | Specifies a target element where Popup will be mounted                    | `document.body`                                          |\n| confirmButtonText | false    | `string`                         | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                                                |\n| cancelButtonText  | false    | `string`                         | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                                                 |\n| columnsFieldNames | false    | `PickerFields`                   | custom columns field                                                      | `{ text: 'text', value: 'value', children: 'children' }` |\n\n#### Events\n\n| Event     | Description                                     | Type                                              |\n| :-------- | :---------------------------------------------- | :------------------------------------------------ |\n| onClose   | close picker show `(need to update show state)` | `Function () => void`                             |\n| onConfirm | Triggered when the confirm button is clicked    | `Function (values: PickerSelectedValues) => void` |\n| onChange  | Triggered when the selected change              | `Function (values: PickerSelectedValues) => void` |\n| onCancel  | Triggered when the cancel button is clicked     | `Function () => void`                             |\n| onOpen    | Triggered when the picker open                  | `Function () => void`                             |\n| onClosed  | Triggered when the picker close transition end  | `Function () => void`                             |\n",P=t({__name:"ReactPicker",setup(u){return(m,p)=>(l(),n(o,{"front-end-frame":"react","base-source":e(c),"base-playground":"675aad63c39ce4f761bd8622","multi-column-source":e(a),"multi-column-playground":"675aae60c39ce4f761bd8637","cascade-source":e(i),"cascade-playground":"67569e8087493a239347d7ce","customize-column-source":e(r),"customize-column-playground":"675aae0cc39ce4f761bd8633","index-md":e(s),language:"tsx"},null,8,["base-source","multi-column-source","cascade-source","customize-column-source","index-md"]))}});export{P as default};
