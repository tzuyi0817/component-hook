<script lang="ts" setup>
import ScaffoldMd from '@/markdowns/create-app/scaffold.md?raw';
import ScaffoldTemplateMd from '@/markdowns/create-app/scaffold-template.md?raw';
import { md } from '@/utils/highlight';
</script>

<template>
  <div>
    <h2>Create App</h2>

    <p>Scaffolding a basic <code>typescript</code> project.</p>

    <div v-html="md.render(ScaffoldMd)"></div>

    <p class="my-5">Then follow the prompts!</p>

    <p class="mb-5">
      You can also directly specify the project name and the template you want to use via additional command line
      options. For example, to scaffold a project, run:
    </p>

    <div v-html="md.render(ScaffoldTemplateMd)"></div>
  </div>
</template>
