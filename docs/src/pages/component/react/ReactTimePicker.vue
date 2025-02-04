<script setup lang="ts">
import baseSource from '@react-playground/time-picker/base?raw';
import columnsTypeSource from '@react-playground/time-picker/columns-type?raw';
import customRangeSource from '@react-playground/time-picker/custom-range?raw';
import labelFormatterSource from '@react-playground/time-picker/label-formatter?raw';
import ComponentTimePicker from '@/components/component/ComponentTimePicker.vue';
import indexMd from '@/markdowns/time-picker/react.md?raw';
</script>

<template>
  <component-time-picker
    front-end-frame="react"
    :base-source="baseSource"
    base-playground=""
    :columns-type-source="columnsTypeSource"
    columns-type-playground=""
    :custom-range-source="customRangeSource"
    custom-range-playground=""
    :label-formatter-source="labelFormatterSource"
    label-formatter-playground=""
    :index-md="indexMd"
    language="tsx"
  />
</template>
