<script lang="ts" setup>
import Sidebar from '@/components/layout/sidebar/index.vue';
import { scrollToTop } from '@/utils/common';
</script>

<template>
  <div>
    <sidebar />
    <div class="sidebar-container">
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
