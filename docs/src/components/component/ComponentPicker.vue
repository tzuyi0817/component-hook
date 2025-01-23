<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import BasePicker from '@/examples/picker/Base.vue';
import BindingPicker from '@/examples/picker/Binding.vue';
import MultiColumnPicker from '@/examples/picker/MultiColumn.vue';
import CascadePicker from '@/examples/picker/Cascade.vue';
import SinglePicker from '@/examples/picker/Single.vue';
import installationMd from '@/markdowns/picker/installation.md?raw';
import cssVariablesMd from '@/markdowns/picker/css-variables.md?raw';
import { md } from '@/utils/highlight';

interface Props {
  frontEndFrame: string;
  baseSource: string;
  basePlayground: string;
  bindingSource: string;
  bindingPlayground: string;
  multiColumnSource: string;
  multiColumnPlayground: string;
  cascadeSource: string;
  cascadePlayground: string;
  singleSource: string;
  singlePlayground: string;
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
        Configure option data through the <code>columns</code> property, <code>columns</code> is an array of object
        <code>{ label: string, value: string | number }</code>.
      </template>
      <base-picker />
    </demo>

    <demo
      title="Two-Way Binding"
      :source="bindingSource"
      :playground="bindingPlayground"
      :language="language"
    >
      <template #description>
        Can bind the values ​of the currently selected item. When the bound value is modified, the selected state of the
        Picker will also change accordingly.
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
      :source="singleSource"
      :playground="singlePlayground"
      :language="language"
    >
      <template #description>Customize the structure of <code>columns</code> to use Picker. </template>
      <single-picker />
    </demo>

    <h3>API</h3>
    <div v-html="md.render(indexMd)"></div>
    <div v-html="md.render(cssVariablesMd)"></div>
  </div>
</template>
