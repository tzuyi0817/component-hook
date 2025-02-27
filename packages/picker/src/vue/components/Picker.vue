<script setup lang="ts" generic="T extends string | number">
import { computed, nextTick, ref, watchEffect, type Ref, type ComponentPublicInstance } from 'vue';
import {
  extendFields,
  formatColumnsToCascade,
  getColumnsType,
  resetChildrenSelected,
  getIndexByValue,
} from '../../shared/utils/common';
import type { PickerFields, PickerColumn } from '../../shared/types';
import Popup from './Popup.vue';
import Column from './PickerColumn.vue';
import '../../shared/index.scss';
import '../transition.scss';

export interface Props<T> {
  show: boolean;
  modelValue?: T[];
  title?: string;
  columns: PickerColumn<T> | PickerColumn<T>[];
  linkage?: boolean;
  loading?: boolean;
  teleport?: string | Element;
  confirmButtonText?: string;
  cancelButtonText?: string;
  columnsFieldNames?: PickerFields;
}

interface Emits {
  'update:show': [show: boolean];
  'update:modelValue': [values: T[]];
  confirm: [values: T[]];
  cancel: [];
  open: [];
  closed: [];
}

interface ColumnExpose {
  scrollToSelected(index?: number, behavior?: ScrollBehavior): void;
}

const props = withDefaults(defineProps<Props<T>>(), {
  confirmButtonText: 'Confirm',
  cancelButtonText: 'Cancel',
});
const emits = defineEmits<Emits>();
const internalModelValue = ref<T[]>([]) as Ref<T[]>;
const selectedValues = ref<T[]>([]) as Ref<T[]>;
const selectedIndices = ref<number[]>([]);
const columnsRef = ref<ComponentPublicInstance<typeof Column<T> & ColumnExpose>[] | null>(null);

const isShowPicker = computed({
  get: () => props.show,
  set: value => emits('update:show', value),
});

const fields = computed(() => extendFields(props.columnsFieldNames));

const columnsType = computed(() => getColumnsType(props.columns, fields.value));

const currentColumns = computed(() => {
  const { columns } = props;

  if (columnsType.value === 'single') return [columns] as PickerColumn<T>[];
  if (columnsType.value === 'multiple') return columns as PickerColumn<T>[];

  return formatColumnsToCascade(columns, selectedValues.value, fields.value);
});

function updateSelectedValueByIndex(columnIndex: number, selectedIndex: number) {
  const options = currentColumns.value[columnIndex];
  const value = options[selectedIndex]?.[fields.value.value];
  const oldValue = selectedValues.value[columnIndex];

  if (value === oldValue) return;
  const newSelectedValues = [...selectedValues.value];

  newSelectedValues[columnIndex] = value;

  if (columnsType.value === 'cascade') {
    const selectedOptions = options[selectedIndex];

    selectedValues.value = resetChildrenSelected(selectedOptions, columnIndex, newSelectedValues, fields.value);
  } else {
    selectedValues.value = newSelectedValues;
  }

  if (!props.linkage) return;

  updateModelValue();
}

function updateModelValue() {
  emits('update:modelValue', selectedValues.value);
  internalModelValue.value = selectedValues.value;
}

function closePicker() {
  emits('update:show', false);
}

async function onOpen() {
  emits('open');
  await nextTick();
  selectedValues.value = props.modelValue ? [...props.modelValue] : [...internalModelValue.value];
}

function onConfirm() {
  if (!props.linkage) {
    updateModelValue();
  }
  closePicker();
  emits('confirm', selectedValues.value);
}

function onCancel() {
  closePicker();
  emits('cancel');
}

watchEffect(() => {
  const n = currentColumns.value.length;
  const newSelectedIndices = [];

  for (let index = 0; index < n; index++) {
    const options = currentColumns.value[index];
    const value = selectedValues.value[index];
    const selectedIndex = getIndexByValue(options, value, fields.value);

    if (selectedIndex === -1) {
      const originIndex = selectedIndices.value[index] ?? 0;
      const specifyIndex = originIndex >= options.length ? Math.max(options.length - 1, 0) : 0;

      selectedValues.value[index] = options[specifyIndex]?.[fields.value.value];
      newSelectedIndices[index] = specifyIndex;
    } else {
      newSelectedIndices[index] = selectedIndex;
    }

    if (newSelectedIndices[index] !== selectedIndices.value[index]) {
      columnsRef.value?.[index].scrollToSelected(newSelectedIndices[index]);
    }
  }
  selectedIndices.value = newSelectedIndices;
});
</script>

<template>
  <popup
    v-model="isShowPicker"
    :teleport="teleport"
    @open="onOpen"
    @closed="$emit('closed')"
  >
    <div class="chook-picker-header">
      <button
        class="chook-picker-cancel"
        @click="onCancel"
      >
        {{ cancelButtonText }}
      </button>
      <p class="chook-picker-title">{{ title }}</p>
      <button
        class="chook-picker-confirm"
        @click="onConfirm"
      >
        {{ confirmButtonText }}
      </button>
    </div>

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
        @change="(selectedIndex: number) => updateSelectedValueByIndex(index, selectedIndex)"
      />

      <div class="chook-picker-mask-backdrop"></div>
    </div>
  </popup>
</template>
