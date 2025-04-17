<script lang="ts" setup>
import { scrollToTop } from '@/utils/common';
import Sidebar from './sidebar/index.vue';
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
