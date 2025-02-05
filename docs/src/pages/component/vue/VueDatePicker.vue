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
    base-playground="67a32e4813fe5303ffefe88c"
    :columns-type-source="columnsTypeSource"
    columns-type-playground="67a32e7713fe5303ffefe88f"
    :custom-range-source="customRangeSource"
    custom-range-playground="67a32ea413fe5303ffefe892"
    :label-formatter-source="labelFormatterSource"
    label-formatter-playground="67a32ef513fe5303ffefe895"
    :index-md="indexMd"
  />
</template>
