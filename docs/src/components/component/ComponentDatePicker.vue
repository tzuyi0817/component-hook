<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import BasePicker from '@/examples/date-picker/Base.vue';
import ColumnsTypePicker from '@/examples/date-picker/ColumnsType.vue';
import CustomRangePicker from '@/examples/date-picker/CustomRange.vue';
import installationMd from '@/markdowns/picker/installation.md?raw';
import cssVariablesMd from '@/markdowns/picker/css-variables.md?raw';
import { md } from '@/utils/highlight';

interface Props {
  frontEndFrame: string;
  baseSource: string;
  basePlayground: string;
  columnsTypeSource: string;
  columnsTypePlayground: string;
  customRangeSource: string;
  customRangePlayground: string;
  // attributesMd: string;
  // eventsMd: string;
  language?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>Date Picker</h2>

    <p>
      Date Picker component with <code>{{ frontEndFrame }}</code
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
        <p>Date picker for selecting year, month and day.</p>
        <p>When no date is specified, the current date is selected by default.</p>
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
          The type of options can be controlled through the <code>columns-type</code> attribute, which supports
          permuting and combining year, month and day in any order.
        </p>
        <p>Three options of year, month and day are displayed by default.</p>
        <ul class="mt-4 pl-8 list-disc">
          <li><code>['year']</code> represents the option to display only the year.</li>
          <li><code>['month']</code> represents the option to display only the month.</li>
          <li><code>['year', 'month']</code> represents the option to display only the year and month.</li>
          <li><code>['month', 'day']</code> represents the option to display only the month and day.</li>
        </ul>
      </template>
      <columns-type-picker />
    </demo>

    <demo
      title="Custom Date Range"
      :source="customRangeSource"
      :playground="customRangePlayground"
      :language="language"
    >
      <template #description>
        <p>Optional time ranges are set via the <code>min-date</code> and <code>max-date</code> properties.</p>
        <p>The default selectable range is 10 years before and after the current year.</p>
      </template>
      <custom-range-picker />
    </demo>

    <h3>API</h3>
    <!-- <div v-html="md.render(indexMd)"></div> -->
    <div v-html="md.render(cssVariablesMd)"></div>
  </div>
</template>
