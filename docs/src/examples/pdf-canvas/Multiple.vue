<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { useFabric, type PDF } from '@component-hook/pdf-canvas';
import Loading from '@/components/Loading.vue';

const { loadFile } = useFabric();
const currentPdf = ref<PDF>();
const PdfCanvas = defineAsyncComponent(() => import('@component-hook/pdf-canvas'));

async function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement;
  const { files } = target;

  if (!files) return;
  const file = files[0];
  const content = await loadFile(file);

  currentPdf.value = content;
  target.value = '';
}
</script>

<template>
  <div class="w-fit flex flex-col items-center gap-3">
    <ul
      v-if="currentPdf"
      class="flex flex-wrap gap-3"
    >
      <li
        v-for="page in currentPdf.pages"
        :key="page"
      >
        <suspense>
          <pdf-canvas
            :file="currentPdf"
            canvas-id="multiple"
            :page="page"
          />
          <template #fallback>
            <loading />
          </template>
        </suspense>
      </li>
    </ul>

    <p
      v-else
      class="font-mono text-sm"
    >
      Please select a multiple page PDF file.
    </p>

    <button class="relative">
      <input
        type="file"
        accept="application/pdf"
        class="opacity-0 top-0 left-0 absolute w-[94px] h-[36px] cursor-pointer"
        @change="uploadFile"
      />
      select file
    </button>

    <div class="font-mono text-sm w-full flex flex-col gap-1 mt-5">
      <p>
        base64:
        {{ currentPdf?.PDFBase64 ? `${currentPdf.PDFBase64.slice(0, 30)}...` : 'null' }}
      </p>
      <p>file id: {{ currentPdf?.PDFId ?? 'null' }}</p>
      <p>file name: {{ currentPdf?.name ?? 'null' }}</p>
      <p>total pages: {{ currentPdf?.pages ?? 'null' }}</p>
      <p>update date: {{ currentPdf?.updateDate ?? 'null' }}</p>
    </div>
  </div>
</template>
