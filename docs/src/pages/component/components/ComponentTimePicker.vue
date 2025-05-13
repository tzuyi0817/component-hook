<script setup lang="ts">
import { Demo } from '@/components/common';
import BasePicker from '@/examples/time-picker/Base.vue';
import ColumnsTypePicker from '@/examples/time-picker/ColumnsType.vue';
import CustomRangePicker from '@/examples/time-picker/CustomRange.vue';
import LabelFormatterPicker from '@/examples/time-picker/LabelFormatter.vue';
import cssVariablesMd from '@/markdowns/picker/css-variables.md?raw';
import installationMd from '@/markdowns/picker/installation.md?raw';
import { md } from '@/utils/highlight';

interface Props {
  frontEndFrame: string;
  baseSource: string;
  basePlayground: string;
  columnsTypeSource: string;
  columnsTypePlayground: string;
  customRangeSource: string;
  customRangePlayground: string;
  labelFormatterSource: string;
  labelFormatterPlayground: string;
  indexMd: string;
  language?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>Time Picker</h2>

    <p>
      Time Picker component with <code>{{ frontEndFrame }}</code
      >.
    </p>

    <div v-html="md.render(installationMd)"></div>

    <demo
      title="Base Usage"
      :source="baseSource"
      :playground="basePlayground"
      :language="language"
    >
      <template #description>
        <p>Time picker for selecting hour, minute and second.</p>
        <p>When no time is specified, the current time is selected by default.</p>
      </template>
      <base-picker />
    </demo>

    <demo
      title="Columns Type"
      :source="columnsTypeSource"
      :playground="columnsTypePlayground"
      :language="language"
    >
      <template #description>
        <p>
          The type of options can be controlled through the <code>columnsType</code> attribute, which supports permuting
          and combining hour, minute and second in any order.
        </p>
        <p>Three options of hour, minute and second are displayed by default.</p>
        <ul class="mt-4 pl-8 list-disc">
          <li><code>['hour']</code> represents the option to display only the hour.</li>
          <li><code>['minute']</code> represents the option to display only the minute.</li>
          <li><code>['hour', 'minute']</code> represents the option to display only the hour and minute.</li>
          <li><code>['minute', 'second']</code> represents the option to display only the minute and second.</li>
        </ul>
      </template>
      <columns-type-picker />
    </demo>

    <demo
      title="Custom Time Range"
      :source="customRangeSource"
      :playground="customRangePlayground"
      :language="language"
    >
      <template #description>
        <p>
          Optional time ranges are set via the <code>minTime</code> and <code>maxTime</code> properties, with the format
          <code>00:00:00</code>.
        </p>
        <p>
          For example, in the following example, users can select any time between <code>12:20:30</code> and
          <code>16:30:48</code>.
        </p>
      </template>
      <custom-range-picker />
    </demo>

    <demo
      title="Label Formatter"
      :source="labelFormatterSource"
      :playground="labelFormatterPlayground"
      :language="language"
    >
      <template #description>
        <p>
          Display labels can be converted through the <code>formatHourLabel</code>, <code>formatMinuteLabel</code> and
          <code>formatSecondLabel</code> properties.
        </p>
      </template>
      <label-formatter-picker />
    </demo>

    <h3>API</h3>
    <div v-html="md.render(indexMd)"></div>
    <div v-html="md.render(cssVariablesMd)"></div>
  </div>
</template>
