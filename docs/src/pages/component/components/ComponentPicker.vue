<script setup lang="ts">
import { Demo } from '@/components/common';
import { BasePicker, BindingPicker, CascadePicker, CustomizeColumnPicker, MultiColumnPicker } from '@/examples/picker';
import cssVariablesMd from '@/markdowns/picker/css-variables.md?raw';
import installationMd from '@/markdowns/picker/installation.md?raw';
import { md } from '@/utils/highlight';

interface Props {
  frontEndFrame: string;
  baseSource: string;
  basePlayground: string;
  bindingSource?: string;
  bindingPlayground?: string;
  multiColumnSource: string;
  multiColumnPlayground: string;
  cascadeSource: string;
  cascadePlayground: string;
  customizeColumnSource: string;
  customizeColumnPlayground: string;
  indexMd: string;
  language?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>Picker</h2>

    <p>
      Picker component with <code>{{ frontEndFrame }}</code
      >.
    </p>

    <div v-html="md.render(installationMd)"></div>

    <demo
      title="Base Usage"
      :source="baseSource"
      :playground="basePlayground"
      :language="language"
    >
      <template #description>
        <p>Configure option data through the <code>columns</code> property.</p>
        <p><code>columns</code> is an array of object<code>{ label: string, value: string | number }</code>.</p>
      </template>
      <base-picker />
    </demo>

    <demo
      v-if="bindingSource && bindingPlayground"
      title="Two-Way Binding"
      :source="bindingSource"
      :playground="bindingPlayground"
      :language="language"
    >
      <template #description>
        <p>Can bind the values of the currently selected item.</p>
        <p>When the bound value is modified, the selected state of the Picker will also change accordingly.</p>
      </template>
      <binding-picker />
    </demo>

    <demo
      title="Multiple Column"
      :source="multiColumnSource"
      :playground="multiColumnPlayground"
      :language="language"
    >
      <template #description>
        The <code>columns</code> property can configure multi-column selection in the form of a two-dimensional array.
      </template>
      <multi-column-picker />
    </demo>

    <demo
      title="Cascade"
      :source="cascadeSource"
      :playground="cascadePlayground"
      :language="language"
    >
      <template #description>
        Using the <code>children</code> attribute of <code>columns</code> can achieve the effect of option cascading and
        dynamically update sub-column options based on the selected option.
      </template>
      <cascade-picker />
    </demo>

    <demo
      title="Customize Column"
      :source="customizeColumnSource"
      :playground="customizeColumnPlayground"
      :language="language"
    >
      <template #description>Customize the structure of <code>columns</code> to use Picker. </template>
      <customize-column-picker />
    </demo>

    <h3>API</h3>
    <div v-html="md.render(indexMd)"></div>
    <div v-html="md.render(cssVariablesMd)"></div>
  </div>
</template>
