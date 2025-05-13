<script setup lang="ts">
import baseSource from '@/examples/time-picker/Base.vue?raw';
import columnsTypeSource from '@/examples/time-picker/ColumnsType.vue?raw';
import customRangeSource from '@/examples/time-picker/CustomRange.vue?raw';
import labelFormatterSource from '@/examples/time-picker/LabelFormatter.vue?raw';
import indexMd from '@/markdowns/time-picker/vue.md?raw';
import ComponentTimePicker from '../components/ComponentTimePicker.vue';
</script>

<template>
  <component-time-picker
    front-end-frame="vue3"
    :base-source="baseSource"
    base-playground="67a32f6b13fe5303ffefe898"
    :columns-type-source="columnsTypeSource"
    columns-type-playground="67a32f9913fe5303ffefe89b"
    :custom-range-source="customRangeSource"
    custom-range-playground="67a32fca13fe5303ffefe89e"
    :label-formatter-source="labelFormatterSource"
    label-formatter-playground="67a3302013fe5303ffefe8a1"
    :index-md="indexMd"
  />
</template>
