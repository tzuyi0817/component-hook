import"./installation-CjD_esjr.js";import{_ as n}from"./ComponentPicker.vue_vue_type_script_setup_true_lang-BRNMZ5Az.js";import{d as l,c as o,u as e,o as a}from"./index-CahS79HZ.js";import"./index-XF1nhAhm.js";const c=`<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const pickerValues = ref<number[]>([]);
const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

function onChange(value: number[]) {
  pickerValues.value = value;
}
<\/script>

<template>
  <picker
    :columns="columns"
    class="max-w-[400px] rounded-lg"
    @change="onChange"
  />

  <p class="mt-6 font-mono text-sm">Selected value: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
`,t=`<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const pickerValues = ref<number[]>([]);
const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));
<\/script>

<template>
  <picker
    v-model="pickerValues"
    :columns="columns"
    class="max-w-[400px] rounded-lg"
  />

  <p class="mt-6 font-mono text-sm">Selected value: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
`,r=`<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

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
    :columns="columns"
    class="max-w-[500px] rounded-lg"
  />

  <p class="mt-6 font-mono text-sm">Selected value: {{ pickerValues.join(' / ') || 'not selected yet' }}</p>
</template>
`,s=`<script lang="ts" setup>
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const pickerValues = ref<Array<string | number>>([]);
const columns = [
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 3, code: 'jp', original: '日本語' },
  { langType: 4, code: 'kr', original: '한국어' },
];

function onChange(values: Array<string | number>) {
  pickerValues.value = values;
}
<\/script>

<template>
  <picker
    :columns="columns"
    :columns-field-names="{ label: 'original', value: 'code' }"
    class="max-w-[400px] rounded-lg"
    @change="onChange"
  />

  <p class="mt-6 font-mono text-sm">Selected language: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
`,i=`<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const pickerValues = ref<number[]>([2, 20]);
const columns = Array.from({ length: 2 }, () =>
  Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
);
<\/script>

<template>
  <picker
    v-model="pickerValues"
    :columns="columns"
    class="max-w-[400px] rounded-lg"
  />

  <p class="mt-6 font-mono text-sm">Selected value: {{ pickerValues.join(' / ') || 'not selected yet' }}</p>
</template>
`,u=`#### Attributes

| Name              | Required | Type                             | Description                    | Default                                                  |
| ----------------- | -------- | -------------------------------- | ------------------------------ | -------------------------------------------------------- |
| v-model           | false    | \`PickerSelectedValues\`           | values of chosen option        | —                                                        |
| columns           | true     | \`PickerColumn \\| PickerColumn[]\` | Columns data                   | —                                                        |
| loading           | false    | \`boolean\`                        | Whether to show loading prompt | —                                                        |
| columnsFieldNames | false    | \`PickerFields\`                   | custom columns field           | \`{ text: 'text', value: 'value', children: 'children' }\` |

#### Events

| Event  | Description                               | Type                                              |
| :----- | :---------------------------------------- | :------------------------------------------------ |
| change | Triggered when the selected value changes | \`Function (values: PickerSelectedValues) => void\` |

#### Slots

| Name    | Description            | SlotProps |
| :------ | :--------------------- | --------- |
| empty   | Custom empty content   | —         |
| loading | Custom loading content | —         |
`,h=l({__name:"VuePicker",setup(m){return(p,d)=>(a(),o(n,{"front-end-frame":"vue3","base-source":e(c),"base-playground":"668e32b73e8416c068f2f92f","binding-source":e(t),"binding-playground":"669635e2b9ac0e0085f0eb2e","multi-column-source":e(i),"multi-column-playground":"67a32d8d13fe5303ffefe863","cascade-source":e(r),"cascade-playground":"6696355db9ac0e0085f0eb29","customize-column-source":e(s),"customize-column-playground":"66963635b9ac0e0085f0eb32","index-md":e(u)},null,8,["base-source","binding-source","multi-column-source","cascade-source","customize-column-source","index-md"]))}});export{h as default};
