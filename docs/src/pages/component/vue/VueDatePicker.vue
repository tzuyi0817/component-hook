<script setup lang="ts">
import ComponentDatePicker from '@/components/component/ComponentDatePicker.vue';
import baseSource from '@/examples/date-picker/Base.vue?raw';
import columnsTypeSource from '@/examples/date-picker/ColumnsType.vue?raw';
import customRangeSource from '@/examples/date-picker/CustomRange.vue?raw';
import labelFormatterSource from '@/examples/date-picker/LabelFormatter.vue?raw';
import indexMd from '@/markdowns/date-picker/vue.md?raw';
</script>

<template>
  <component-date-picker
    front-end-frame="vue3"
    :base-source="baseSource"
    base-playground=""
    :columns-type-source="columnsTypeSource"
    columns-type-playground=""
    :custom-range-source="customRangeSource"
    custom-range-playground=""
    :label-formatter-source="labelFormatterSource"
    label-formatter-playground=""
    :index-md="indexMd"
  />
</template>
