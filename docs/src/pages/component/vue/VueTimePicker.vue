<script setup lang="ts">
import ComponentTimePicker from '@/components/component/ComponentTimePicker.vue';
import baseSource from '@/examples/time-picker/Base.vue?raw';
import columnsTypeSource from '@/examples/time-picker/ColumnsType.vue?raw';
import customRangeSource from '@/examples/time-picker/CustomRange.vue?raw';
import labelFormatterSource from '@/examples/time-picker/LabelFormatter.vue?raw';
</script>

<template>
  <component-time-picker
    frontEndFrame="vue3"
    :base-source="baseSource"
    base-playground=""
    :columns-type-source="columnsTypeSource"
    columns-type-playground=""
    :custom-range-source="customRangeSource"
    custom-range-playground=""
    :label-formatter-source="labelFormatterSource"
    label-formatter-playground=""
  />
</template>
