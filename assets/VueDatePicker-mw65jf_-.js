import"./installation-BoZEJlFY.js";import{_ as n}from"./ComponentDatePicker.vue_vue_type_script_setup_true_lang-DwvdEWIs.js";import{d as t,c as a,u as e,o as r}from"./index-hyUEZF5d.js";import"./index-BXFHuwIx.js";const o=`<script setup lang="ts">
import { DatePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentDate = ref<number[]>([]);

function onChange(value: number[]) {
  currentDate.value = value;
}
<\/script>

<template>
  <date-picker
    class="max-w-[500px] rounded-lg"
    @change="onChange"
  />

  <p class="mt-6 font-mono text-sm">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
`,c=`<script setup lang="ts">
import { DatePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentDate = ref<number[]>([2030, 8]);
<\/script>

<template>
  <date-picker
    v-model="currentDate"
    class="max-w-[500px] rounded-lg"
    :columns-type="['year', 'month']"
  />

  <p class="mt-6 font-mono text-sm">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
`,s=`<script setup lang="ts">
import { DatePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentDate = ref<number[]>([]);
<\/script>

<template>
  <date-picker
    v-model="currentDate"
    class="max-w-[500px] rounded-lg"
    :min-date="new Date(2024, 0, 1)"
    :max-date="new Date(2026, 5, 1)"
  />

  <p class="mt-6 font-mono text-sm">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
`,m=`<script setup lang="ts">
import { DatePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

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
    class="max-w-[500px] rounded-lg"
    :columns-type="['month', 'day', 'year']"
    :format-month-label="month => MONTHS_MAP[month]"
    :format-day-label="day => day.padStart(2, '0')"
  />

  <p class="mt-6 font-mono text-sm">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
`,l=`#### Attributes

| Name             | Required | Type                     | Description             | Default                        |
| ---------------- | -------- | ------------------------ | ----------------------- | ------------------------------ |
| v-model          | false    | \`PickerSelectedValues\`   | values of chosen option | —                              |
| columnsType      | false    | \`DatePickerColumnType[]\` | Columns type            | \`['year', 'month', 'day']\`     |
| minDate          | false    | \`Date\`                   | Min date                | Ten years ago on January 1     |
| maxDate          | false    | \`Date\`                   | Max date                | Ten years later on December 31 |
| formatYearLabel  | false    | \`PickerFormatLabel\`      | Year label formatter    | —                              |
| formatMonthLabel | false    | \`PickerFormatLabel\`      | Month label formatter   | —                              |
| formatDayLabel   | false    | \`PickerFormatLabel\`      | Day label formatter     | —                              |

#### Events

| Event  | Description                               | Type                                              |
| :----- | :---------------------------------------- | :------------------------------------------------ |
| change | Triggered when the selected value changes | \`Function (values: PickerSelectedValues) => void\` |

#### Exposes

| Name           | Description                        | Type                  |
| :------------- | :--------------------------------- | :-------------------- |
| setCurrentDate | Reset the date to the current date | \`Function () => void\` |
`,k=t({__name:"VueDatePicker",setup(u){return(p,i)=>(r(),a(n,{"front-end-frame":"vue3","base-source":e(o),"base-playground":"67a32e4813fe5303ffefe88c","columns-type-source":e(c),"columns-type-playground":"67a32e7713fe5303ffefe88f","custom-range-source":e(s),"custom-range-playground":"67a32ea413fe5303ffefe892","label-formatter-source":e(m),"label-formatter-playground":"67a32ef513fe5303ffefe895","index-md":e(l)},null,8,["base-source","columns-type-source","custom-range-source","label-formatter-source","index-md"]))}});export{k as default};
