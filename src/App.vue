<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import Picker from '@/components/Picker.vue';
import type { LangType } from "@/types";

const currentSelect = ref<LangType>({})
const isShowPicker = ref(false);
const dataList = ref([
  { langType: 2, code: "vi", original: "Tiếng Việt", version: 80 },
  { langType: 0, code: "en", original: "English", version: 95 },
  { langType: 1, code: "cn", original: "中文", version: 85 },
]);

const options = reactive({
  confirmColor: '',
});

const anchor = computed(() => {
  const index = dataList.value.findIndex(({ langType }) => langType === currentSelect.value?.langType);
  const checkIndex = index > -1 ? index : 0;
  return checkIndex;
});

function toggle() {
  isShowPicker.value = true;
  options.confirmColor = 'red';
}
</script>

<template>
  <picker 
    v-model:isShowPicker="isShowPicker"
    :data="dataList"
    :anchor="anchor"
    :options="options"
  />

  <button @click="toggle">toggle</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
