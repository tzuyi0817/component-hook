<script lang="ts" setup>
import Sidebar from '@/components/layout/Sidebar.vue';

function scrollToTop() {
  document.body.scrollTo({ top: 0 });
}
</script>

<template>
  <div>
    <sidebar class="w-72 hidden lg:block" />
    <div class="p-8 w-full lg:p-12 lg:ml-60 lg:-12">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
          @before-enter="scrollToTop"
        >
          <component
            :is="Component"
            class="w-full"
          />
        </transition>
      </router-view>
    </div>
  </div>
</template>
