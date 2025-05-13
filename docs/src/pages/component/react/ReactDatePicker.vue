<script setup lang="ts">
import baseSource from '@react-playground/date-picker/base?raw';
import columnsTypeSource from '@react-playground/date-picker/columns-type?raw';
import customRangeSource from '@react-playground/date-picker/custom-range?raw';
import labelFormatterSource from '@react-playground/date-picker/label-formatter?raw';
import indexMd from '@/markdowns/date-picker/react.md?raw';
import ComponentDatePicker from '../components/ComponentDatePicker.vue';
</script>

<template>
  <component-date-picker
    front-end-frame="react"
    :base-source="baseSource"
    base-playground="67a3336413fe5303ffefe8ea"
    :columns-type-source="columnsTypeSource"
    columns-type-playground="67a333c613fe5303ffefe8ed"
    :custom-range-source="customRangeSource"
    custom-range-playground="67a333ff13fe5303ffefe8f0"
    :label-formatter-source="labelFormatterSource"
    label-formatter-playground="67a3345013fe5303ffefe8f3"
    :index-md="indexMd"
    language="tsx"
  />
</template>
