<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { scrollToTop } from '@/utils/common';

const isSidebarOpen = defineModel<boolean>('isSidebarOpen', { required: true });
const isShowBackToTop = ref(false);
const observer = new IntersectionObserver(intersectionObserverCallback);

function intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
  entries.forEach(entry => {
    isShowBackToTop.value = !entry.isIntersecting;
  });
}

onMounted(() => {
  const header = document.querySelector('header');

  if (!header) return;
  observer.observe(header);
});
</script>

<template>
  <div class="sidebar-nav">
    <div
      role="button"
      class="flex items-center gap-2"
      @click="isSidebarOpen = true"
    >
      <svg-icon
        name="menu"
        class="w-5 h-5 text-[#606266]"
      />
      Menu
    </div>

    <p
      role="button"
      :class="['text-sm transition-opacity duration-300', { 'opacity-0 pointer-events-none': !isShowBackToTop }]"
      @click="() => scrollToTop('smooth')"
    >
      Back to top
    </p>
  </div>

  <div
    :class="['sidebar-mask', { hidden: !isSidebarOpen }]"
    aria-hidden="true"
    @click="isSidebarOpen = false"
  ></div>
</template>

<style lang="postcss" scoped>
.sidebar {
  &-mask {
    @apply fixed w-full h-full inset-0 bg-black/60 z-10 lg:hidden animate-[fadeIn_0.6s];
  }
  &-nav {
    @apply sticky flex justify-between top-0 z-10 px-4 py-3.5 border-b border-b-border-color bg-bg-color lg:hidden;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
