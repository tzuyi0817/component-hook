<script setup lang="ts">
import baseSource from '@react-playground/time-picker/components/base?raw';
import columnsTypeSource from '@react-playground/time-picker/components/columns-type?raw';
import customRangeSource from '@react-playground/time-picker/components/custom-range?raw';
import labelFormatterSource from '@react-playground/time-picker/components/label-formatter?raw';
import indexMd from '@/markdowns/time-picker/react.md?raw';
import ComponentTimePicker from '../components/ComponentTimePicker.vue';
</script>

<template>
  <component-time-picker
    front-end-frame="react"
    :base-source="baseSource"
    base-playground="67a3349813fe5303ffefe8f6"
    :columns-type-source="columnsTypeSource"
    columns-type-playground="67a334d513fe5303ffefe8f9"
    :custom-range-source="customRangeSource"
    custom-range-playground="67a3350813fe5303ffefe8fc"
    :label-formatter-source="labelFormatterSource"
    label-formatter-playground="67a3353c13fe5303ffefe8ff"
    :index-md="indexMd"
    language="tsx"
  />
</template>
