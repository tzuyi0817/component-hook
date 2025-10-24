import"./installation-CzxEK2En.js";import{_ as n}from"./ComponentPicker.vue_vue_type_script_setup_true_lang-ffcKsyPq.js";import{d as o,c as l,u as e,o as t}from"./index-BnSZmsPs.js";import"./index-DKTIJ2zb.js";const i=`<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const pickerValues = ref<number[]>([]);
const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

function onConfirm(value: number[]) {
  pickerValues.value = value;
}

function onCancel() {
  console.log('cancel');
}
<\/script>

<template>
  <picker
    v-model:show="isShowPicker"
    :columns="columns"
    title="Base Selector"
    @confirm="onConfirm"
    @cancel="onCancel"
  />

  <button @click="isShowPicker = true">toggle Base picker</button>

  <p class="mt-6 text-sm font-mono">Selected value: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
`,c=`<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const pickerValues = ref<number[]>([]);
const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));
<\/script>

<template>
  <picker
    v-model="pickerValues"
    v-model:show="isShowPicker"
    :columns="columns"
    title="Binding Selector"
  />

  <button @click="isShowPicker = true">toggle Binding picker</button>

  <p class="mt-6 text-sm font-mono">Selected value: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
`,r=`<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const pickerValues = ref<string[]>([]);
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
<\/script>

<template>
  <picker
    v-model="pickerValues"
    v-model:show="isShowPicker"
    :columns="columns"
    title="Cascade Selector"
  />

  <button @click="isShowPicker = true">toggle Cascade picker</button>

  <p class="mt-6 text-sm font-mono">Selected value: {{ pickerValues.join(' / ') || 'not selected yet' }}</p>
</template>
`,a=`<script lang="ts" setup>
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const pickerValues = ref<Array<string | number>>([]);
const columns = [
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 3, code: 'jp', original: '日本語' },
  { langType: 4, code: 'kr', original: '한국어' },
];

function onConfirm(values: Array<string | number>) {
  pickerValues.value = values;
}
<\/script>

<template>
  <picker
    v-model:show="isShowPicker"
    :columns="columns"
    title="Customize Column Selector"
    :columns-field-names="{ label: 'original', value: 'code' }"
    @confirm="onConfirm"
  />

  <button @click="isShowPicker = true">toggle Customize Column picker</button>

  <p class="mt-6 text-sm font-mono">Selected language: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
`,s=`<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const pickerValues = ref<number[]>([2, 20]);
const columns = Array.from({ length: 2 }, () =>
  Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
);
<\/script>

<template>
  <picker
    v-model="pickerValues"
    v-model:show="isShowPicker"
    :columns="columns"
    title="Multiple Column Selector"
  />

  <button @click="isShowPicker = true">toggle Multiple Column picker</button>

  <p class="mt-6 text-sm font-mono">Selected value: {{ pickerValues.join(' / ') || 'not selected yet' }}</p>
</template>
`,u="#### Attributes\n\n| Name              | Required | Type                             | Description                                                               | Default                                                  |\n| ----------------- | -------- | -------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |\n| v-model           | false    | `PickerSelectedValues`           | values of chosen option                                                   | —                                                        |\n| v-model:show      | true     | `boolean`                        | Control picker show                                                       | —                                                        |\n| columns           | true     | `PickerColumn \\| PickerColumn[]` | Columns data                                                              | —                                                        |\n| title             | false    | `string`                         | Toolbar title                                                             | —                                                        |\n| linkage           | false    | `boolean`                        | Whether to link when scrolling to select                                  | —                                                        |\n| loading           | false    | `boolean`                        | Whether to show loading prompt                                            | —                                                        |\n| teleport          | false    | `string \\| Element`              | Specifies a target element where Popup will be mounted                    | `body`                                                   |\n| confirmButtonText | false    | `string`                         | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                                                |\n| cancelButtonText  | false    | `string`                         | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                                                 |\n| columnsFieldNames | false    | `PickerFields`                   | custom columns field                                                      | `{ text: 'text', value: 'value', children: 'children' }` |\n\n#### Events\n\n| Event   | Description                                    | Type                                              |\n| :------ | :--------------------------------------------- | :------------------------------------------------ |\n| confirm | Triggered when the confirm button is clicked   | `Function (values: PickerSelectedValues) => void` |\n| cancel  | Triggered when the cancel button is clicked    | `Function () => void`                             |\n| open    | Triggered when the picker open                 | `Function () => void`                             |\n| closed  | Triggered when the picker close transition end | `Function () => void`                             |\n\n#### Slots\n\n| Name    | Description            | SlotProps |\n| :------ | :--------------------- | --------- |\n| empty   | Custom empty content   | —         |\n| loading | Custom loading content | —         |\n",b=o({__name:"VuePicker",setup(m){return(p,d)=>(t(),l(n,{"front-end-frame":"vue3","base-source":e(i),"base-playground":"668e32b73e8416c068f2f92f","binding-source":e(c),"binding-playground":"669635e2b9ac0e0085f0eb2e","multi-column-source":e(s),"multi-column-playground":"67a32d8d13fe5303ffefe863","cascade-source":e(r),"cascade-playground":"6696355db9ac0e0085f0eb29","customize-column-source":e(a),"customize-column-playground":"66963635b9ac0e0085f0eb32","index-md":e(u)},null,8,["base-source","binding-source","multi-column-source","cascade-source","customize-column-source","index-md"]))}});export{b as default};
