<script setup lang="ts">
import ComponentPicker from '../ComponentPicker.vue';
import cascadeSource from '@/examples/picker/Cascade.vue?raw';
import singleSource from '@/examples/picker/Single.vue?raw';
import dateSource from '@/examples/picker/Date.vue?raw';
import timeSource from '@/examples/picker/Time.vue?raw';
import attributesMd from '@/markdowns/picker/vue/attributes.md?raw';
import eventsMd from '@/markdowns/picker/vue/events.md?raw';
</script>

<template>
  <component-picker
    description="Picker component with vue3."
    :cascade-source="cascadeSource"
    cascade-playground="6696355db9ac0e0085f0eb29"
    :single-source="singleSource"
    single-playground="668e32b73e8416c068f2f92f"
    :date-source="dateSource"
    date-playground="669635e2b9ac0e0085f0eb2e"
    :time-source="timeSource"
    time-playground="66963635b9ac0e0085f0eb32"
    :attributes-md="attributesMd"
    :events-md="eventsMd"
  />
</template>
