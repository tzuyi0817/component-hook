<script setup lang="ts">
import {
  BasePickerRaw,
  ColumnsTypePickerRaw,
  CustomRangePickerRaw,
  LabelFormatterPickerRaw,
} from '@/examples/date-picker';
import indexMd from '@/markdowns/date-picker/vue.md?raw';
import ComponentDatePicker from '../components/ComponentDatePicker.vue';
</script>

<template>
  <component-date-picker
    front-end-frame="vue3"
    :base-source="BasePickerRaw"
    base-playground="67a32e4813fe5303ffefe88c"
    :columns-type-source="ColumnsTypePickerRaw"
    columns-type-playground="67a32e7713fe5303ffefe88f"
    :custom-range-source="CustomRangePickerRaw"
    custom-range-playground="67a32ea413fe5303ffefe892"
    :label-formatter-source="LabelFormatterPickerRaw"
    label-formatter-playground="67a32ef513fe5303ffefe895"
    :index-md="indexMd"
  />
</template>
