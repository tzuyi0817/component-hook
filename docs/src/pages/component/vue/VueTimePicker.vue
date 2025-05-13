<script setup lang="ts">
import {
  BasePickerRaw,
  ColumnsTypePickerRaw,
  CustomRangePickerRaw,
  LabelFormatterPickerRaw,
} from '@/examples/time-picker';
import indexMd from '@/markdowns/time-picker/vue.md?raw';
import ComponentTimePicker from '../components/ComponentTimePicker.vue';
</script>

<template>
  <component-time-picker
    front-end-frame="vue3"
    :base-source="BasePickerRaw"
    base-playground="67a32f6b13fe5303ffefe898"
    :columns-type-source="ColumnsTypePickerRaw"
    columns-type-playground="67a32f9913fe5303ffefe89b"
    :custom-range-source="CustomRangePickerRaw"
    custom-range-playground="67a32fca13fe5303ffefe89e"
    :label-formatter-source="LabelFormatterPickerRaw"
    label-formatter-playground="67a3302013fe5303ffefe8a1"
    :index-md="indexMd"
  />
</template>
