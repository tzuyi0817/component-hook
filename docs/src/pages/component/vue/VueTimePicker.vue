<script setup lang="ts">
import ComponentTimePicker from '@/components/component/ComponentTimePicker.vue';
import baseSource from '@/examples/time-picker/Base.vue?raw';
</script>

<template>
  <component-time-picker
    frontEndFrame="vue3"
    :base-source="baseSource"
    base-playground=""
  />
</template>
