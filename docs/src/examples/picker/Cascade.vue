<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const pickerValues = ref<string[]>([]);
const columns = [
  {
    label: 'Electronics',
    value: 'electronics',
    children: [
      {
        label: 'Mobile',
        value: 'mobile',
        children: [
          { label: 'Smartphone', value: 'smartphone' },
          { label: 'Feature Phone', value: 'feature-phone' },
        ],
      },
      {
        label: 'Computer',
        value: 'computer',
        children: [
          { label: 'Laptop', value: 'laptop' },
          { label: 'Desktop', value: 'desktop' },
        ],
      },
    ],
  },
  {
    label: 'Home Appliances',
    value: 'home-appliances',
    children: [
      {
        label: 'Kitchen Appliances',
        value: 'kitchen-appliances',
        children: [
          { label: 'Microwave', value: 'microwave' },
          { label: 'Refrigerator', value: 'refrigerator' },
        ],
      },
      {
        label: 'Cleaning Appliances',
        value: 'cleaning-appliances',
        children: [
          { label: 'Vacuum Cleaner', value: 'vacuum-cleaner' },
          { label: 'Robot Vacuum', value: 'robot-vacuum' },
        ],
      },
    ],
  },
  {
    label: 'Clothing',
    value: 'clothing',
    children: [
      {
        label: 'Mens Clothing',
        value: 'mens-clothing',
        children: [
          { label: 'Shirt', value: 'shirt' },
          { label: 'Trousers', value: 'trousers' },
        ],
      },
      {
        label: 'Womens Clothing',
        value: 'womens-clothing',
        children: [
          { label: 'Dress', value: 'dress' },
          { label: 'Skirt', value: 'skirt' },
        ],
      },
    ],
  },
];
</script>

<template>
  <picker
    v-model="pickerValues"
    :columns="columns"
    class="max-w-125 rounded-lg"
  />

  <p class="mt-6 font-mono text-sm">Selected value: {{ pickerValues.join(' / ') || 'not selected yet' }}</p>
</template>
