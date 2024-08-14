<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import CascadePicker from '@/examples/picker/Cascade.vue';
import cascadeSource from '@/examples/picker/Cascade.vue?raw';
import SinglePicker from '@/examples/picker/Single.vue';
import singleSource from '@/examples/picker/Single.vue?raw';
import DatePicker from '@/examples/picker/Date.vue';
import dateSource from '@/examples/picker/Date.vue?raw';
import TimePicker from '@/examples/picker/Time.vue';
import timeSource from '@/examples/picker/Time.vue?raw';
import installationMd from '@/markdowns/picker/installation.md?raw';
import attributesMd from '@/markdowns/picker/attributes.md?raw';
import otherMd from '@/markdowns/picker/other.md?raw';
import { md } from '@/utils/highlight';
</script>

<template>
  <div>
    <h1>Picker</h1>

    <p>Picker component with vue3.</p>

    <div v-html="md.render(installationMd)"></div>

    <demo
      title="Cascade Picker"
      :source="cascadeSource"
      playground="6696355db9ac0e0085f0eb29"
    >
      <template #description>
        Use cascade data to define picker.
      </template>
      <cascade-picker />
    </demo>

    <demo
      title="Single Picker"
      :source="singleSource"
      playground="668e32b73e8416c068f2f92f"
    >
      <template #description>
        Use single data to define picker.
      </template>
      <single-picker />
    </demo>

    <demo
      title="Built-in Date Picker"
      :source="dateSource"
      playground="669635e2b9ac0e0085f0eb2e"
    >
      <template #description>
        Use built-in date picker.
      </template>
      <date-picker />
    </demo>

    <demo
      title="Built-in Time Picker"
      :source="timeSource"
      playground="66963635b9ac0e0085f0eb32"
    >
      <template #description>
        Use built-in time picker.
      </template>
      <time-picker />
    </demo>

    <div
      class="overflow-x-auto"
      v-html="md.render(attributesMd)"
    ></div>

    <div v-html="md.render(otherMd)"></div>
  </div>
</template>
