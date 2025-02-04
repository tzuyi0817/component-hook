<script setup lang="ts">
import baseSource from '@react-playground/date-picker/base?raw';
import columnsTypeSource from '@react-playground/date-picker/columns-type?raw';
import customRangeSource from '@react-playground/date-picker/custom-range?raw';
import labelFormatterSource from '@react-playground/date-picker/label-formatter?raw';
import ComponentDatePicker from '@/components/component/ComponentDatePicker.vue';
import indexMd from '@/markdowns/date-picker/react.md?raw';
</script>

<template>
  <component-date-picker
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
