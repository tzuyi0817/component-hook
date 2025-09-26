import"./installation-D8Y5kEc_.js";import{_ as n}from"./ComponentTimePicker.vue_vue_type_script_setup_true_lang-CusewD7w.js";import{d as t,c as o,u as e,o as r}from"./index-DpJ0bSUx.js";import"./index-Dxakq7hu.js";const i=`<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const currentTime = ref<number[]>([]);

function onConfirm(value: number[]) {
  currentTime.value = value;
}

function onCancel() {
  console.log('cancel');
}
<\/script>

<template>
  <time-picker
    v-model:show="isShowPicker"
    title="Base Selector"
    @confirm="onConfirm"
    @cancel="onCancel"
  />

  <button @click="isShowPicker = true">toggle Base picker</button>

  <p class="mt-6 text-sm font-mono">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
`,c=`<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const currentTime = ref<number[]>([12, 50]);
<\/script>

<template>
  <time-picker
    v-model="currentTime"
    v-model:show="isShowPicker"
    title="Columns Type Selector"
    :columns-type="['hour', 'minute']"
  />

  <button @click="isShowPicker = true">toggle Columns Type picker</button>

  <p class="mt-6 text-sm font-mono">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
`,m=`<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const currentTime = ref<number[]>([]);
<\/script>

<template>
  <time-picker
    v-model="currentTime"
    v-model:show="isShowPicker"
    title="Custom Range Selector"
    min-time="12:20:30"
    max-time="16:30:48"
  />

  <button @click="isShowPicker = true">toggle Custom Range picker</button>

  <p class="mt-6 text-sm font-mono">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
`,s=`<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const currentTime = ref<number[]>([]);

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
<\/script>

<template>
  <time-picker
    v-model="currentTime"
    v-model:show="isShowPicker"
    title="Label Formatter Selector"
    :format-hour-label="(hour: string) => HOURS_MAP[hour]"
  />

  <button @click="isShowPicker = true">toggle Label Formatter picker</button>

  <p class="mt-6 text-sm font-mono">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
`,l="#### Attributes\n\n| Name              | Required | Type                     | Description                                                               | Default                        |\n| ----------------- | -------- | ------------------------ | ------------------------------------------------------------------------- | ------------------------------ |\n| v-model           | false    | `PickerSelectedValues`   | values of chosen option                                                   | —                              |\n| v-model:show      | true     | `boolean`                | Control picker show                                                       | —                              |\n| columnsType       | false    | `TimePickerColumnType[]` | Columns type                                                              | `['hour', 'minute', 'second']` |\n| title             | false    | `string`                 | Toolbar title                                                             | `Select Time`                  |\n| minTime           | false    | `string`                 | Min time, format reference `00:00:00`                                     | —                              |\n| maxTime           | false    | `string`                 | Max time, format reference `00:00:00`                                     | —                              |\n| teleport          | false    | `string \\| Element`      | Specifies a target element where Popup will be mounted                    | `body`                         |\n| confirmButtonText | false    | `string`                 | Text of confirm button, setting it as an empty string can hide the button | `Confirm`                      |\n| cancelButtonText  | false    | `string`                 | Text of cancel button, setting it as an empty string can hide the button  | `Cancel`                       |\n| formatHourLabel   | false    | `PickerFormatLabel`      | Hour label formatter                                                      | —                              |\n| formatMinuteLabel | false    | `PickerFormatLabel`      | Minute label formatter                                                    | —                              |\n| formatSecondLabel | false    | `PickerFormatLabel`      | Second label formatter                                                    | —                              |\n\n#### Events\n\n| Event   | Description                                    | Type                                              |\n| :------ | :--------------------------------------------- | :------------------------------------------------ |\n| confirm | Triggered when the confirm button is clicked   | `Function (values: PickerSelectedValues) => void` |\n| cancel  | Triggered when the cancel button is clicked    | `Function () => void`                             |\n| open    | Triggered when the picker open                 | `Function () => void`                             |\n| closed  | Triggered when the picker close transition end | `Function () => void`                             |\n",g=t({__name:"VueTimePicker",setup(a){return(u,f)=>(r(),o(n,{"front-end-frame":"vue3","base-source":e(i),"base-playground":"67a32f6b13fe5303ffefe898","columns-type-source":e(c),"columns-type-playground":"67a32f9913fe5303ffefe89b","custom-range-source":e(m),"custom-range-playground":"67a32fca13fe5303ffefe89e","label-formatter-source":e(s),"label-formatter-playground":"67a3302013fe5303ffefe8a1","index-md":e(l)},null,8,["base-source","columns-type-source","custom-range-source","label-formatter-source","index-md"]))}});export{g as default};
