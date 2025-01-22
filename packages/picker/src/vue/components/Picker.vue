<script setup lang="ts">
import { computed, nextTick, ref, useTemplateRef, watchEffect } from 'vue';
import Column from './PickerColumn.vue';
import '../../shared/index.scss';
import '../transition.scss';
import { formatColumnsToCascade, getColumnsType, resetChildrenSelected } from '../../shared/utils/common';
import type { PickerColumn, PickerSelectedValues } from '../../shared/types';

interface Props {
  title?: string;
  columns: PickerColumn | PickerColumn[];
  linkage?: boolean;
  loading?: boolean;
  teleport?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

interface Emits {
  confirm: [PickerSelectedValues];
  cancel: [];
  open: [];
  closed: [];
}

const props = withDefaults(defineProps<Props>(), {
  teleport: 'body',
  confirmButtonText: 'confirm',
  cancelButtonText: 'cancel',
});
const emits = defineEmits<Emits>();
const modelValue = defineModel<PickerSelectedValues>({ default: [] });
const isShowPicker = defineModel<boolean>('show', { required: true });
const selectedValues = ref<PickerSelectedValues>([]);
const selectedIndices = ref<number[]>([]);
const columnsRef = useTemplateRef<InstanceType<typeof Column>[]>('columnRef');

const columnsType = computed(() => getColumnsType(props.columns));

const currentColumns = computed(() => {
  const { columns } = props;

  if (columnsType.value === 'single') return [columns] as PickerColumn[];
  if (columnsType.value === 'multiple') return columns as PickerColumn[];
  return formatColumnsToCascade(columns, selectedValues);
});

function updateSelectedValueByIndex(columnIndex: number, selectedIndex: number) {
  const options = currentColumns.value[columnIndex];
  const value = options[selectedIndex].value;
  const oldValue = selectedValues.value[columnIndex];

  if (value === oldValue) return;
  const newSelectedValues = [...selectedValues.value];

  newSelectedValues[columnIndex] = value;
  selectedValues.value = newSelectedValues;

  if (columnsType.value === 'cascade') {
    const n = currentColumns.value.length;
    const selectedOptions = options[selectedIndex];

    selectedValues.value = resetChildrenSelected(selectedOptions, columnIndex, selectedValues.value);

    for (let index = columnIndex + 1; index < n; index++) {
      columnsRef.value?.[index].scrollToSelected(0);
    }
  }
  if (!props.linkage) return;
  modelValue.value = selectedValues.value;
}

function closePicker() {
  isShowPicker.value = false;
}

async function onOpen() {
  emits('open');
  await nextTick();
  selectedValues.value = [...modelValue.value];

  if (!columnsRef.value) return;
  await nextTick();
  columnsRef.value.forEach(column => column.scrollToSelected());
}

function onConfirm() {
  if (!props.linkage) {
    modelValue.value = selectedValues.value;
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
    const selectedIndex = options.findIndex(option => option.value === value);

    if (selectedIndex === -1) {
      const defaultIndex = value === undefined ? 0 : options.length - 1;

      selectedValues.value[index] = options[defaultIndex].value;
      columnsRef.value?.[index].scrollToSelected(defaultIndex);
      newSelectedIndices[index] = defaultIndex;
    } else {
      newSelectedIndices[index] = selectedIndex;
    }
  }

  selectedIndices.value = newSelectedIndices;
});
</script>

<template>
  <teleport :to="teleport">
    <div class="component-hook-picker">
      <transition name="component-hook-picker-fade">
        <div
          v-show="isShowPicker"
          class="component-hook-picker-mask"
          @click="closePicker"
        ></div>
      </transition>

      <transition name="component-hook-picker-slide">
        <div
          v-show="isShowPicker"
          class="component-hook-picker-container"
        >
          <div class="component-hook-picker-header">
            <button
              class="component-hook-picker-cancel"
              @click="onCancel"
            >
              {{ cancelButtonText }}
            </button>
            <p class="component-hook-picker-title">{{ title }}</p>
            <button
              class="component-hook-picker-confirm"
              @click="onConfirm"
            >
              {{ confirmButtonText }}
            </button>
          </div>

          <div
            class="component-hook-picker-columns component-hook-picker-columns-backdrop"
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
                ref="columnRef"
                :column="column"
                :selected-index="selectedIndices[index]"
                @change="(selectedIndex: number) => updateSelectedValueByIndex(index, selectedIndex)"
              />

              <div class="component-hook-picker-mask-backdrop"></div>
            </template>
          </div>

          <div
            v-if="loading"
            class="component-hook-picker-loading"
          >
            <slot name="loading"></slot>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>
