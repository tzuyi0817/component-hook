<script lang="ts" setup>
import Sidebar from '@/components/layout/sidebar/index.vue';
import { scrollToTop } from '@/utils/common';
</script>

<template>
  <div>
    <sidebar />
    <div class="p-8 w-full lg:p-12 lg:ml-60 lg:w-[calc(100%-240px)]">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
          @before-enter="() => scrollToTop()"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
