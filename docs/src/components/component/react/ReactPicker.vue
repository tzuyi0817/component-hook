<script setup lang="ts">
import cascadeSource from '@react-playground/picker/cascade-picker?raw';
import singleSource from '@react-playground/picker/single-picker?raw';
import dateSource from '@react-playground/picker/date-picker?raw';
import timeSource from '@react-playground/picker/time-picker?raw';
import ComponentPicker from '../ComponentPicker.vue';
import attributesMd from '@/markdowns/picker/react/attributes.md?raw';
import eventsMd from '@/markdowns/picker/react/events.md?raw';
</script>

<template>
  <component-picker
    description="Picker component with react."
    :cascade-source="cascadeSource"
    cascade-playground=""
    :single-source="singleSource"
    single-playground=""
    :date-source="dateSource"
    date-playground=""
    :time-source="timeSource"
    time-playground=""
    :attributes-md="attributesMd"
    :events-md="eventsMd"
    language="tsx"
  />
</template>
