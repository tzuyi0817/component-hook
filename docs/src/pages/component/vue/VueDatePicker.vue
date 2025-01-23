<script setup lang="ts">
import ComponentDatePicker from '@/components/component/ComponentDatePicker.vue';
import baseSource from '@/examples/date-picker/Base.vue?raw';
import columnsTypeSource from '@/examples/date-picker/ColumnsType.vue?raw';
import customRangeSource from '@/examples/date-picker/CustomRange.vue?raw';

// import attributesMd from '@/markdowns/picker/vue/attributes.md?raw';
// import eventsMd from '@/markdowns/picker/vue/events.md?raw';
</script>

<template>
  <component-date-picker
    frontEndFrame="vue3"
    :base-source="baseSource"
    base-playground=""
    :columns-type-source="columnsTypeSource"
    columns-type-playground=""
    :custom-range-source="customRangeSource"
    custom-range-playground=""
  />
</template>
