import{_ as e}from"./ComponentPicker.vue_vue_type_script_setup_true_lang-0FiQbJyt.js";import{d as t,c as o,u as n,o as c}from"./index-CT3JQO8v.js";import"./Demo-CpLvmTfX.js";const r=`<script lang="ts" setup>
import { ref } from 'vue';
import Picker from '@component-hook/picker/vue';

interface LangType {
  langType?: number;
  code?: string;
  original?: string;
}

const currentSelect = ref<Array<LangType>>([]);
const isShowPicker = ref(false);
const anchor = ref([0, 1, 2]);
const singleData = [
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
];
const dataList = ref([singleData, singleData, singleData]);

function onConfirm(value: Array<LangType>) {
  currentSelect.value = value;
}

function onCancel() {
  console.log('cancel');
}
<\/script>

<template>
  <picker
    v-model:is-show-picker="isShowPicker"
    v-model:anchor="anchor"
    :data="dataList"
    :show-key="['original', 'original', 'original']"
    :options="{ titleText: 'cascade selector' }"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
  <button @click="isShowPicker = true">toggle cascade picker</button>

  <p class="mt-6 text-sm font-mono">Selected language1: {{ currentSelect[0]?.original ?? 'not selected yet' }}</p>
  <p class="mt-3 text-sm font-mono">Selected language2: {{ currentSelect[1]?.original ?? 'not selected yet' }}</p>
  <p class="mt-3 text-sm font-mono">Selected language3: {{ currentSelect[2]?.original ?? 'not selected yet' }}</p>
</template>
`,i=`<script lang="ts" setup>
import { ref } from 'vue';
import Picker from '@component-hook/picker/vue';

interface LangType {
  langType?: number;
  code?: string;
  original?: string;
}

const currentSelect = ref<LangType>({});
const isShowPicker = ref(false);
const anchor = ref(1);
const singleData = [
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
];

function onConfirm(value: LangType) {
  currentSelect.value = value;
}

function onCancel() {
  console.log('cancel');
}
<\/script>

<template>
  <picker
    v-model:is-show-picker="isShowPicker"
    v-model:anchor="anchor"
    :data="singleData"
    show-key="original"
    :options="{ titleText: 'single selector' }"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
  <button @click="isShowPicker = true">toggle single picker</button>

  <p class="mt-6 text-sm font-mono">Selected language: {{ currentSelect?.original ?? 'not selected yet' }}</p>
</template>
`,a=`<script lang="ts" setup>
import { ref } from 'vue';
import Picker from '@component-hook/picker/vue';

const currentDate = ref<Array<number>>([]);
const isShowPicker = ref(false);

function onConfirm(value: Array<number>) {
  console.log(value);
}

function onCancel() {
  console.log('cancel');
}
<\/script>

<template>
  <picker
    v-model:is-show-picker="isShowPicker"
    v-model:anchor="currentDate"
    type="date"
    :options="{ titleText: 'date selector' }"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
  <button @click="isShowPicker = true">toggle date picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join('/') || 'not selected yet' }}</p>
</template>
`,l=`<script lang="ts" setup>
import { ref } from 'vue';
import Picker from '@component-hook/picker/vue';

const currentTime = ref<Array<number>>([]);
const isShowPicker = ref(false);

function onConfirm(value: Array<number>) {
  currentTime.value = value;
}

function onCancel() {
  console.log('cancel');
}
<\/script>

<template>
  <picker
    v-model:is-show-picker="isShowPicker"
    v-model:anchor="currentTime"
    type="time"
    :options="{ titleText: 'time selector' }"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
  <button @click="isShowPicker = true">toggle time picker</button>

  <p class="mt-6 text-sm font-mono">
    Selected time:
    {{ currentTime.map(num => \`\${num}\`.padStart(2, '0')).join(':') || 'not selected yet' }}
  </p>
</template>
`,s="### Attributes\n\n| Name                 | Required | Type                  | Description                                                                                | Default               |\n| -------------------- | -------- | --------------------- | ------------------------------------------------------------------------------------------ | --------------------- |\n| v-model:isShowPicker | true     | `boolean`             | Control picker show                                                                        | —                     |\n| v-model:anchor       | true     | `number` / `number[]` | Picker current select index (single column for `number`、 multiple columns for `number[]`) | —                     |\n| data                 | false    | `array`               | Picker list [1, 2, 3] or [[1, 2, 3], [1, 2, 3]]                                            | —                     |\n| type                 | false    | `string`              | Built-in picker type, no need to pass in data (date, time)                                 | —                     |\n| showKey              | false    | `string` / `string[]` | Wheel options name (object key)                                                            | —                     |\n| swipeTime            | false    | `number`              | Wheel swipe Time                                                                           | 500                   |\n| options              | false    | `object`              | Custom text, color and class                                                               | See below for details |\n",m=`### Events

| Event   | Description                                  | Type                                      |
| :------ | :------------------------------------------- | :---------------------------------------- |
| confirm | Triggered when the confirm button is clicked | \`Function (value: selected item) => void\` |
| cancel  | Triggered when the cancel button is clicked  | \`Function () => void\`                     |
`,h=t({__name:"VuePicker",setup(u){return(p,g)=>(c(),o(e,{description:"Picker component with vue3.","cascade-source":n(r),"cascade-playground":"6696355db9ac0e0085f0eb29","single-source":n(i),"single-playground":"668e32b73e8416c068f2f92f","date-source":n(a),"date-playground":"669635e2b9ac0e0085f0eb2e","time-source":n(l),"time-playground":"66963635b9ac0e0085f0eb32","attributes-md":n(s),"events-md":n(m)},null,8,["cascade-source","single-source","date-source","time-source","attributes-md","events-md"]))}});export{h as default};
