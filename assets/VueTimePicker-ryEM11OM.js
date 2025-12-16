import"./installation-CP_Ik9wL.js";import{_ as n}from"./ComponentTimePicker.vue_vue_type_script_setup_true_lang-CJ-n0AES.js";import{d as t,c as r,u as e,o}from"./index-94NZVcRB.js";import"./index-CVx_3QrS.js";const m=`<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentTime = ref<number[]>([]);

function onChange(value: number[]) {
  currentTime.value = value;
}
<\/script>

<template>
  <time-picker
    class="max-w-[500px] rounded-lg"
    @change="onChange"
  />

  <p class="mt-6 font-mono text-sm">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
`,c=`<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentTime = ref<number[]>([12, 50]);
<\/script>

<template>
  <time-picker
    v-model="currentTime"
    class="max-w-[500px] rounded-lg"
    :columns-type="['hour', 'minute']"
  />

  <p class="mt-6 font-mono text-sm">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
`,a=`<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentTime = ref<number[]>([]);
<\/script>

<template>
  <time-picker
    v-model="currentTime"
    class="max-w-[500px] rounded-lg"
    min-time="12:20:30"
    max-time="16:30:48"
  />

  <p class="mt-6 font-mono text-sm">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
`,i=`<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

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
    class="max-w-[500px] rounded-lg"
    :format-hour-label="hour => HOURS_MAP[hour]"
  />

  <p class="mt-6 font-mono text-sm">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
`,s="#### Attributes\n\n| Name              | Required | Type                     | Description                           | Default                        |\n| ----------------- | -------- | ------------------------ | ------------------------------------- | ------------------------------ |\n| v-model           | false    | `PickerSelectedValues`   | values of chosen option               | —                              |\n| columnsType       | false    | `TimePickerColumnType[]` | Columns type                          | `['hour', 'minute', 'second']` |\n| minTime           | false    | `string`                 | Min time, format reference `00:00:00` | —                              |\n| maxTime           | false    | `string`                 | Max time, format reference `00:00:00` | —                              |\n| formatHourLabel   | false    | `PickerFormatLabel`      | Hour label formatter                  | —                              |\n| formatMinuteLabel | false    | `PickerFormatLabel`      | Minute label formatter                | —                              |\n| formatSecondLabel | false    | `PickerFormatLabel`      | Second label formatter                | —                              |\n\n#### Events\n\n| Event  | Description                               | Type                                              |\n| :----- | :---------------------------------------- | :------------------------------------------------ |\n| change | Triggered when the selected value changes | `Function (values: PickerSelectedValues) => void` |\n\n#### Exposes\n\n| Name           | Description                        | Type                  |\n| :------------- | :--------------------------------- | :-------------------- |\n| setCurrentTime | Reset the time to the current time | `Function () => void` |\n",P=t({__name:"VueTimePicker",setup(l){return(u,p)=>(o(),r(n,{"front-end-frame":"vue3","base-source":e(m),"base-playground":"67a32f6b13fe5303ffefe898","columns-type-source":e(c),"columns-type-playground":"67a32f9913fe5303ffefe89b","custom-range-source":e(a),"custom-range-playground":"67a32fca13fe5303ffefe89e","label-formatter-source":e(i),"label-formatter-playground":"67a3302013fe5303ffefe8a1","index-md":e(s)},null,8,["base-source","columns-type-source","custom-range-source","label-formatter-source","index-md"]))}});export{P as default};
