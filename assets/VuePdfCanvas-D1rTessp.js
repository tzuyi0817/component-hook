import{_ as e}from"./ComponentPdfCanvas.vue_vue_type_script_setup_true_lang-D0Ic9M-B.js";import{d as t,c as a,u as n,o}from"./index-Dyt0eqDD.js";import"./Demo-B8P-62nQ.js";import"./index-Dpu33887.js";const s=`<script setup lang="ts">
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/vue';
import { ref } from 'vue';

const currentPdf = ref<PDF>();

async function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement;
  const { files } = target;

  if (!files) return;
  const file = files[0];
  const content = await loadFile(file);

  currentPdf.value = content;
  target.value = '';
}
<\/script>

<template>
  <div class="w-fit flex flex-col items-center gap-3">
    <pdf-canvas
      v-if="currentPdf"
      :file="currentPdf"
    />

    <p
      v-else
      class="font-mono text-sm"
    >
      Please select a PDF file or image.
    </p>

    <button class="relative">
      <input
        type="file"
        accept="application/pdf, .jpg, .png"
        class="opacity-0 top-0 left-0 absolute w-[94px] h-[36px] cursor-pointer"
        @change="uploadFile"
      />
      select file
    </button>

    <div class="font-mono text-sm w-full flex flex-col gap-1 mt-5">
      <p>
        base64:
        {{ currentPdf?.PDFBase64 ? \`\${currentPdf.PDFBase64.slice(0, 30)}...\` : 'null' }}
      </p>
      <p>file id: {{ currentPdf?.PDFId ?? 'null' }}</p>
      <p>file name: {{ currentPdf?.name ?? 'null' }}</p>
      <p>total pages: {{ currentPdf?.pages ?? 'null' }}</p>
      <p>update date: {{ currentPdf?.updateDate ?? 'null' }}</p>
    </div>
  </div>
</template>
`,r=`<script setup lang="ts">
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/vue';
import { ref, useTemplateRef } from 'vue';

const currentPdf = ref<PDF>();
const pdfCanvasRef = useTemplateRef('pdfCanvasRef');

async function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement;
  const { files } = target;

  if (!files) return;
  const file = files[0];
  const content = await loadFile(file);

  currentPdf.value = content;
  target.value = '';
}

function dragImage(event: DragEvent) {
  const { src, offsetHeight, offsetWidth } = event.target as HTMLImageElement;
  const offsetX = event.offsetX / offsetWidth;
  const offsetY = event.offsetY / offsetHeight;

  event.dataTransfer?.setData('text/uri-list', src);
  event.dataTransfer?.setData('custom/offset', JSON.stringify({ offsetX, offsetY }));
}

function dragText(event: DragEvent) {
  const { textContent, offsetHeight, offsetWidth } = event.target as HTMLParagraphElement;
  const offsetX = event.offsetX / offsetWidth;
  const offsetY = event.offsetY / offsetHeight;

  event.dataTransfer?.setData('text/plain', textContent ?? '');
  event.dataTransfer?.setData('custom/offset', JSON.stringify({ offsetX, offsetY }));
}
<\/script>

<template>
  <div class="w-fit flex flex-col items-center gap-3">
    <img
      src="https://pdf-signature-puce.vercel.app/cover.jpg"
      width="300"
      height="200"
      alt="PDF signature cover image"
      @dragstart="dragImage"
    />

    <p
      class="font-mono text-sm my-5 bg-code-bg-color p-2 rounded-md cursor-move"
      draggable="true"
      @dragstart="dragText"
    >
      Can drag the text onto canvas.
    </p>

    <pdf-canvas
      v-if="currentPdf"
      ref="pdfCanvasRef"
      :file="currentPdf"
      canvas-id="drop"
      :drop-image-options="{ scaleX: 0.1, scaleY: 0.1 }"
      :drop-text-options="{ fontSize: 20 }"
      is-drop
    />

    <p
      v-else
      class="font-mono text-sm"
    >
      Please select a PDF file or image.
    </p>

    <div class="flex gap-3 flex-wrap">
      <button class="relative">
        <input
          type="file"
          accept="application/pdf, .jpg, .png"
          class="opacity-0 top-0 left-0 absolute w-[94px] h-[36px] cursor-pointer"
          @change="uploadFile"
        />
        select file
      </button>

      <button @click="pdfCanvasRef?.copyActiveFabric">copy</button>
      <button @click="pdfCanvasRef?.deleteActiveFabric">delete</button>
    </div>
  </div>
</template>
`,l=`<script setup lang="ts">
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/vue';
import { ref } from 'vue';

const currentPdf = ref<PDF>();
const password = ref<string>('');
const isShowPasswordPopup = ref(false);
const modalPassword = ref<string>('');
let currentFile: File | null = null;

function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement;
  const { files } = target;

  if (!files) return;
  currentFile = files[0];
  renderFile(currentFile);
  target.value = '';
}

function renderFile(file: File | null) {
  if (!file) return;

  loadFile(file, modalPassword.value)
    .then(content => {
      password.value = modalPassword.value;
      currentPdf.value = content;
      modalPassword.value = '';
    })
    .catch(error => {
      console.log(\`\${error}\`);
      if (!\`\${error}\`.includes('PasswordException')) return;
      isShowPasswordPopup.value = true;
      if (\`\${error}\` !== 'PasswordException: Incorrect Password') return;
      alert('Incorrect password! Please try again.');
    });
}

function submitPassword() {
  isShowPasswordPopup.value = false;
  renderFile(currentFile);
}
<\/script>

<template>
  <div class="w-fit flex flex-col items-center gap-3">
    <pdf-canvas
      v-if="currentPdf"
      :file="currentPdf"
      :password="password"
      canvas-id="encrypted"
    />

    <p
      v-else
      class="font-mono text-sm"
    >
      Please select a encrypted PDF file.
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
        {{ currentPdf?.PDFBase64 ? \`\${currentPdf.PDFBase64.slice(0, 30)}...\` : 'null' }}
      </p>
      <p>file id: {{ currentPdf?.PDFId ?? 'null' }}</p>
      <p>file name: {{ currentPdf?.name ?? 'null' }}</p>
      <p>total pages: {{ currentPdf?.pages ?? 'null' }}</p>
      <p>update date: {{ currentPdf?.updateDate ?? 'null' }}</p>
    </div>

    <teleport to="body">
      <div
        v-if="isShowPasswordPopup"
        class="dialog"
        @click.self="isShowPasswordPopup = false"
      >
        <div class="dialog-content">
          <span
            class="dialog-close"
            @click="isShowPasswordPopup = false"
            >&times;</span
          >
          <h3>Enter Your Password</h3>
          <input
            v-model="modalPassword"
            type="password"
            placeholder="Please entry password"
            autofocus
          />
          <button
            class="float-right"
            @click="submitPassword"
          >
            Submit
          </button>
        </div>
      </div>
    </teleport>
  </div>
</template>
`,c=`<script setup lang="ts">
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/vue';
import { ref } from 'vue';

const currentPdf = ref<PDF>();
const pdfCanvasRef = ref<InstanceType<typeof PdfCanvas> | null>(null);

async function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement;
  const { files } = target;

  if (!files) return;
  const file = files[0];
  const content = await loadFile(file);

  currentPdf.value = content;
  target.value = '';
}

function addImage() {
  if (!pdfCanvasRef.value) return;

  pdfCanvasRef.value.addImage('https://pdf-signature-puce.vercel.app/cover.jpg');
}

function addText() {
  if (!pdfCanvasRef.value) return;

  pdfCanvasRef.value.addText('Can drag the text onto canvas.');
}
<\/script>

<template>
  <div class="w-fit flex flex-col items-center gap-3">
    <pdf-canvas
      v-if="currentPdf"
      ref="pdfCanvasRef"
      :file="currentPdf"
      canvas-id="manual"
      :drop-image-options="{ scaleX: 0.1, scaleY: 0.1 }"
      :drop-text-options="{ fontSize: 20 }"
      is-drop
    />

    <p
      v-else
      class="font-mono text-sm"
    >
      Please select a PDF file or image.
    </p>

    <div class="flex gap-3 flex-wrap">
      <button class="relative">
        <input
          type="file"
          accept="application/pdf, .jpg, .png"
          class="opacity-0 top-0 left-0 absolute w-[94px] h-[36px] cursor-pointer"
          @change="uploadFile"
        />
        select file
      </button>

      <button @click="addImage">add image</button>
      <button @click="addText">add text</button>
    </div>
  </div>
</template>
`,i=`<script setup lang="ts">
import { loadFile, type PDF } from '@component-hook/pdf-canvas/vue';
import { defineAsyncComponent, ref } from 'vue';
import Loading from '@/components/Loading.vue';

const currentPdf = ref<PDF>();
const PdfCanvas = defineAsyncComponent(() => import('@component-hook/pdf-canvas/vue'));

async function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement;
  const { files } = target;

  if (!files) return;
  const file = files[0];
  const content = await loadFile(file);

  currentPdf.value = content;
  target.value = '';
}
<\/script>

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
        {{ currentPdf?.PDFBase64 ? \`\${currentPdf.PDFBase64.slice(0, 30)}...\` : 'null' }}
      </p>
      <p>file id: {{ currentPdf?.PDFId ?? 'null' }}</p>
      <p>file name: {{ currentPdf?.name ?? 'null' }}</p>
      <p>total pages: {{ currentPdf?.pages ?? 'null' }}</p>
      <p>update date: {{ currentPdf?.updateDate ?? 'null' }}</p>
    </div>
  </div>
</template>
`,p="#### Events\n\n| Event            | Description                                    | Type                                                    |\n| :--------------- | :--------------------------------------------- | :------------------------------------------------------ |\n| loaded           | Callback when the canvas rendering is complete | `Function () => void`                                   |\n| reload           | Callback when the canvas reload                | `Function () => void`                                   |\n| pointerDown      | Triggered when pointer down the canvas         | `Function (event: FabricPointerEvent) => void`          |\n| pointerMove      | Triggered when pointer move the canvas         | `Function (event: FabricPointerEvent) => void`          |\n| pointerUp        | Triggered when pointer up the canvas           | `Function (event: FabricPointerEvent) => void`          |\n| selectionCreated | Triggered when selection the fabric            | `Function (event: FabricSelectionCreatedEvent) => void` |\n| selectionCleared | Triggered when clear selection the fabric      | `Function (event: FabricSelectionClearedEvent) => void` |\n",F=t({__name:"VuePdfCanvas",setup(f){return(d,u)=>(o(),a(e,{"front-end-frame":"vue3","draw-source":n(s),"draw-playground":"668e33253e8416c068f2f93b","encrypted-source":n(l),"encrypted-playground":"66963e7d2b23250eadd65180","multiple-source":n(i),"multiple-playground":"669646038ae98c93b96a2e78","drop-source":n(r),"drop-playground":"6696466d8ae98c93b96a2e9b","manual-source":n(c),"manual-playground":"669646c68ae98c93b96a2eb2","event-md":n(p)},null,8,["draw-source","encrypted-source","multiple-source","drop-source","manual-source","event-md"]))}});export{F as default};
