import{_ as n}from"./ComponentDatePicker.vue_vue_type_script_setup_true_lang-Cc6boCkb.js";import{d as t,c as o,u as e,o as r}from"./index-Bghl88EY.js";import"./Demo-D4dOmole.js";import"./index-C4pcwCsx.js";import"./css-variables-Ds99Jer8.js";const a=`<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentDate = ref<number[]>([]);

function onConfirm(value: number[]) {
  currentDate.value = value;
}

function onCancel() {
  console.log('cancel');
}
<\/script>

<template>
  <date-picker
    v-model:show="isShowPicker"
    title="Base Selector"
    @confirm="onConfirm"
    @cancel="onCancel"
  />

  <button @click="isShowPicker = true">toggle Base picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
`,c=`<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentDate = ref<number[]>([2030, 8]);
<\/script>

<template>
  <date-picker
    v-model="currentDate"
    v-model:show="isShowPicker"
    title="Columns Type Selector"
    :columns-type="['year', 'month']"
  />

  <button @click="isShowPicker = true">toggle Columns Type picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
`,s=`<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentDate = ref<number[]>([]);
<\/script>

<template>
  <date-picker
    v-model="currentDate"
    v-model:show="isShowPicker"
    title="Custom Range Selector"
    :min-date="new Date(2024, 0, 1)"
    :max-date="new Date(2026, 5, 1)"
  />

  <button @click="isShowPicker = true">toggle Custom Range picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
`,i=`<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentDate = ref<number[]>([]);

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
<\/script>

<template>
  <date-picker
    v-model="currentDate"
    v-model:show="isShowPicker"
    title="Label Formatter Selector"
    :columns-type="['month', 'day', 'year']"
    :format-month-label="(month: string) => MONTHS_MAP[month]"
    :format-day-label="(day: string) => day.padStart(2, '0')"
  />

  <button @click="isShowPicker = true">toggle Label Formatter picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
`,l="#### Attributes\n\n| Name              | Required | Type                     | Description                                                               | Default                        |\n| ----------------- | -------- | ------------------------ | ------------------------------------------------------------------------- | ------------------------------ |\n| v-model           | false    | `PickerSelectedValues`   | values of chosen option                                                   | —                              |\n| v-model:show      | true     | `boolean`                | Control picker show                                                       | —                              |\n| columnsType       | false    | `DatePickerColumnType[]` | Columns type                                                              | `['year', 'month', 'day']`     |\n| title             | false    | `string`                 | Toolbar title                                                             | `Select Date`                  |\n| minDate           | false    | `Date`                   | Min date                                                                  | Ten years ago on January 1     |\n| maxDate           | false    | `Date`                   | Max date                                                                  | Ten years later on December 31 |\n| teleport          | false    | `string \\| Element`      | Specifies a target element where Popup will be mounted                    | `body`                         |\n| confirmButtonText | false    | `string`                 | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                      |\n| cancelButtonText  | false    | `string`                 | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                       |\n| formatYearLabel   | false    | `PickerFormatLabel`      | Year label formatter                                                      | —                              |\n| formatMonthLabel  | false    | `PickerFormatLabel`      | Month label formatter                                                     | —                              |\n| formatDayLabel    | false    | `PickerFormatLabel`      | Day label formatter                                                       | —                              |\n\n#### Events\n\n| Event   | Description                                    | Type                                              |\n| :------ | :--------------------------------------------- | :------------------------------------------------ |\n| confirm | Triggered when the confirm button is clicked   | `Function (values: PickerSelectedValues) => void` |\n| cancel  | Triggered when the cancel button is clicked    | `Function () => void`                             |\n| open    | Triggered when the picker open                 | `Function () => void`                             |\n| closed  | Triggered when the picker close transition end | `Function () => void`                             |\n",h=t({__name:"VueDatePicker",setup(m){return(u,p)=>(r(),o(n,{"front-end-frame":"vue3","base-source":e(a),"base-playground":"67a32e4813fe5303ffefe88c","columns-type-source":e(c),"columns-type-playground":"67a32e7713fe5303ffefe88f","custom-range-source":e(s),"custom-range-playground":"67a32ea413fe5303ffefe892","label-formatter-source":e(i),"label-formatter-playground":"67a32ef513fe5303ffefe895","index-md":e(l)},null,8,["base-source","columns-type-source","custom-range-source","label-formatter-source","index-md"]))}});export{h as default};
