<script setup lang="ts" generic="T extends string | number">
import { computed, nextTick, ref, useTemplateRef, watchEffect } from 'vue';
import {
  extendFields,
  formatColumnsToCascade,
  getColumnsType,
  getIndexByValue,
  resetChildrenSelected,
} from '../../shared/utils/common';
import Column from './PickerColumn.vue';
import type { PickerColumn, PickerFields } from '../../shared/types';
import '../../shared/index.scss';

export interface Props<T> {
  columns: PickerColumn<T> | PickerColumn<T>[];
  loading?: boolean;
  columnsFieldNames?: PickerFields;
}

interface Emits {
  change: [values: T[]];
}

const props = defineProps<Props<T>>();
const emits = defineEmits<Emits>();
const modelValue = defineModel<T[]>({ default: [] });
const selectedIndices = ref<number[]>([]);
const columnsRef = useTemplateRef('columnsRef');

const fields = computed(() => extendFields(props.columnsFieldNames));

const columnsType = computed(() => getColumnsType(props.columns, fields.value));

const currentColumns = computed(() => {
  const { columns } = props;

  if (columnsType.value === 'single') return [columns] as PickerColumn<T>[];
  if (columnsType.value === 'multiple') return columns as PickerColumn<T>[];

  return formatColumnsToCascade(columns, modelValue.value, fields.value);
});

function updateSelectedValueByIndex(columnIndex: number, selectedIndex: number) {
  const options = currentColumns.value[columnIndex];
  const value = options[selectedIndex]?.[fields.value.value];
  const oldValue = modelValue.value[columnIndex];

  if (value === oldValue) return;
  const newSelectedValues = [...modelValue.value];

  newSelectedValues[columnIndex] = value;

  if (columnsType.value === 'cascade') {
    const selectedOptions = options[selectedIndex];

    modelValue.value = resetChildrenSelected(selectedOptions, columnIndex, newSelectedValues, fields.value);
  } else {
    modelValue.value = newSelectedValues;
  }

  nextTick(() => {
    emits('change', modelValue.value);
  });
}

function syncSelectedIndices() {
  const n = currentColumns.value.length;
  const newSelectedIndices = [];

  for (let index = 0; index < n; index++) {
    const options = currentColumns.value[index];
    const value = modelValue.value[index];
    const selectedIndex = getIndexByValue(options, value, fields.value);

    if (selectedIndex === -1) {
      const originIndex = selectedIndices.value[index] ?? 0;
      const specifyIndex = originIndex >= options.length ? Math.max(options.length - 1, 0) : 0;

      modelValue.value[index] = options[specifyIndex]?.[fields.value.value];
      newSelectedIndices[index] = specifyIndex;
    } else {
      newSelectedIndices[index] = selectedIndex;
    }

    if (newSelectedIndices[index] !== selectedIndices.value[index]) {
      columnsRef.value?.[index]?.scrollToSelected(newSelectedIndices[index]);
    }
  }

  selectedIndices.value = newSelectedIndices;
}

watchEffect(
  () => {
    syncSelectedIndices();
  },
  { flush: 'post' },
);
</script>

<template>
  <div
    class="chook-picker-container"
    aria-label="Picker"
  >
    <template v-if="loading">
      <div class="chook-picker-loading">
        <slot name="loading"></slot>
      </div>
      <div class="chook-picker-columns"></div>
    </template>

    <template v-else-if="!columns.length">
      <div class="chook-picker-columns">
        <slot name="empty"></slot>
      </div>
    </template>

    <div
      v-else
      class="chook-picker-columns chook-picker-columns-backdrop"
      @touchmove.stop
    >
      <Column
        v-for="(column, index) in currentColumns"
        :key="index"
        ref="columnsRef"
        :column="column"
        :fields="fields"
        :selected-index="selectedIndices[index]"
        @change="selectedIndex => updateSelectedValueByIndex(index, selectedIndex)"
      />

      <div class="chook-picker-mask-backdrop"></div>
    </div>
  </div>
</template>
