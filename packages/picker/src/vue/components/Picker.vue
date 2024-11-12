<script setup lang="ts">
import { computed } from 'vue';
import { usePicker } from '../hooks/use-picker';
import { isObject, isArray } from '../../shared/utils/check-type';
import '../../shared/index.scss';
import '../transition.scss';
import type { PickerComponentProps } from '../../shared/types/picker';

const props = withDefaults(defineProps<PickerComponentProps>(), {
  data: () => [],
  options: () => ({}),
  showKey: '',
  swipeTime: 500,
  type: '',
});

const emit = defineEmits(['update:isShowPicker', 'update:anchor', 'cancel', 'confirm']);

const options = computed(() => ({
  cancelClass: '',
  confirmClass: '',
  titleClass: '',
  cancelColor: '#999',
  confirmColor: '#42b983',
  titleColor: '',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  titleText: '',
  ...props.options,
}));
const cancelColor = computed(() => options.value.cancelColor);
const confirmColor = computed(() => options.value.confirmColor);
const titleColor = computed(() => options.value.titleColor);
const showKeys = computed(() => (isArray(props.showKey) ? props.showKey : [props.showKey]));

const { pickerData, wheelWrapper, cancel, confirm, closePicker } = usePicker(props, emit);
</script>

<template>
  <div>
    <transition name="fade">
      <div
        v-show="isShowPicker"
        class="mask"
        @click="closePicker"
      ></div>
    </transition>

    <transition name="slide">
      <div
        v-show="isShowPicker"
        class="picker"
      >
        <div class="picker_title">
          <button
            :class="['picker_cancel', options.cancelClass]"
            :style="{ color: cancelColor }"
            @click="cancel"
          >
            {{ options.cancelText }}
          </button>
          <button
            :class="['picker_confirm', options.confirmClass]"
            :style="{ color: confirmColor }"
            @click="confirm"
          >
            {{ options.confirmText }}
          </button>
          <h4
            :class="[options.titleClass]"
            :style="{ color: titleColor }"
          >
            {{ options.titleText }}
          </h4>
        </div>
        <div class="picker_panel">
          <div class="picker_mask_top"></div>
          <div class="picker_mask_bottom"></div>
          <div
            ref="wheelWrapper"
            class="picker_wheel_wrapper"
          >
            <div
              v-for="(wheel, wheelIndex) in pickerData"
              :key="wheelIndex"
              class="picker_wheel"
            >
              <ul class="picker_wheel_scroll">
                <li
                  v-for="(item, index) in wheel"
                  :key="index"
                  class="picker_wheel_item"
                >
                  {{ showKeys?.[wheelIndex] && isObject(item) ? item[showKeys[wheelIndex]!] : item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
