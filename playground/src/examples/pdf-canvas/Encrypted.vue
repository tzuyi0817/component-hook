<script setup lang="ts">
import { ref } from 'vue';
import PdfCanvas, { useFabric, type PDF } from '@component-hook/pdf-canvas';

const { loadFile } = useFabric();
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
      console.log(`${error}`);
      if (!`${error}`.includes('PasswordException')) return;
      isShowPasswordPopup.value = true;
      if (`${error}` !== 'PasswordException: Incorrect Password') return;
      alert('Incorrect password! Please try again.');
    });
}

function submitPassword() {
  isShowPasswordPopup.value = false;
  renderFile(currentFile);
}
</script>

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
      <p>base64: {{ currentPdf?.PDFBase64 ? `${currentPdf.PDFBase64.slice(0, 30)}...` : 'null' }}</p>
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
            placeholder="please entry password"
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
