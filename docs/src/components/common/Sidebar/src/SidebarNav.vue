<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import SvgIcon from '@/components/common/SvgIcon/src/index.vue';
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

<style lang="css" scoped>
.sidebar-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgb(0 0 0 / 0.6);
  z-index: 10;
  animation: fadeIn 600ms;
}

.sidebar-nav {
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
  z-index: 10;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-color);
}

@media (min-width: 1024px) {
  .sidebar-mask {
    display: none;
  }

  .sidebar-nav {
    display: none;
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
