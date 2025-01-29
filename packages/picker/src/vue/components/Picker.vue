<script setup lang="ts">
import { computed, nextTick, ref, watchEffect } from 'vue';
import Popup from './Popup.vue';
import Column from './PickerColumn.vue';
import '../../shared/index.scss';
import '../transition.scss';
import {
  extendFields,
  formatColumnsToCascade,
  getColumnsType,
  resetChildrenSelected,
  getIndexByValue,
} from '../../shared/utils/common';
import type { PickerFields, PickerColumn, PickerSelectedValues } from '../../shared/types';

interface Props {
  show: boolean;
  modelValue?: PickerSelectedValues;
  title?: string;
  columns: PickerColumn | PickerColumn[];
  linkage?: boolean;
  loading?: boolean;
  teleport?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  columnsFieldNames?: PickerFields;
}

interface Emits {
  'update:show': [boolean];
  'update:modelValue': [PickerSelectedValues];
  confirm: [PickerSelectedValues];
  cancel: [];
  open: [];
  closed: [];
}

const props = withDefaults(defineProps<Props>(), {
  confirmButtonText: 'Confirm',
  cancelButtonText: 'Cancel',
});
const emits = defineEmits<Emits>();
const internalModelValue = ref<PickerSelectedValues>([]);
const selectedValues = ref<PickerSelectedValues>([]);
const selectedIndices = ref<number[]>([]);
const columnsRef = ref<InstanceType<typeof Column>[] | null>(null);

const isShowPicker = computed({
  get: () => props.show,
  set: value => emits('update:show', value),
});

const fields = computed(() => extendFields(props.columnsFieldNames));

const columnsType = computed(() => getColumnsType(props.columns, fields.value));

const currentColumns = computed(() => {
  const { columns } = props;

  if (columnsType.value === 'single') return [columns] as PickerColumn[];
  if (columnsType.value === 'multiple') return columns as PickerColumn[];
  return formatColumnsToCascade(columns, selectedValues, fields.value);
});

function updateSelectedValueByIndex(columnIndex: number, selectedIndex: number) {
  const options = currentColumns.value[columnIndex];
  const value = options[selectedIndex][fields.value.value];
  const oldValue = selectedValues.value[columnIndex];

  if (value === oldValue) return;
  const newSelectedValues = [...selectedValues.value];

  newSelectedValues[columnIndex] = value;
  selectedValues.value = newSelectedValues;

  if (columnsType.value === 'cascade') {
    const n = currentColumns.value.length;
    const selectedOptions = options[selectedIndex];

    selectedValues.value = resetChildrenSelected(selectedOptions, columnIndex, selectedValues.value, fields.value);

    for (let index = columnIndex + 1; index < n; index++) {
      columnsRef.value?.[index].scrollToSelected(0);
    }
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

  if (!columnsRef.value) return;
  await nextTick();
  columnsRef.value.forEach(column => column.scrollToSelected());
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
      const defaultIndex = value === undefined ? 0 : options.length - 1;

      selectedValues.value[index] = options[defaultIndex][fields.value.value];
      newSelectedIndices[index] = defaultIndex;
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

    <div
      class="chook-picker-columns chook-picker-columns-backdrop"
      @touchmove.stop
    >
      <slot
        v-if="!loading && !columns.length"
        name="empty"
      ></slot>

      <template v-else>
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
      </template>
    </div>

    <div
      v-if="loading"
      class="chook-picker-loading"
    >
      <slot name="loading"></slot>
    </div>
  </popup>
</template>
