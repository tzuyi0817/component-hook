<script setup lang="ts">
import { generateImageSrc } from '@/utils/path';

interface Props {
  title: string;
  content: string;
  image: string;
  imageWidth: number;
  link: string;
}

defineProps<Props>();
</script>

<template>
  <div class="home-feature group">
    <img
      class="home-feature-image"
      :src="generateImageSrc(image)"
      :alt="`Feature ${title} Image`"
      :width="imageWidth"
    />

    <h4 class="home-feature-title">{{ title }}</h4>
    <p class="home-feature-content">{{ content }}</p>

    <router-link
      :to="link"
      class="home-feature-footer"
    >
      Get Started
    </router-link>
  </div>
</template>

<style lang="postcss" scoped>
.home-feature {
  @apply flex
  flex-col
  items-center
  border 
  border-border-color 
  rounded 
  text-center 
  w-[500px] 
  max-w-full
  transition-[transform_colors]
  duration-300
  hover:border-primary-light
  hover:scale-105;
  &-image {
    @apply my-6 duration-700 group-hover:[transform:rotate3d(1,1,1,360deg)_scale(1.25)];
  }
  &-title {
    @apply px-6 duration-300 group-hover:text-primary;
  }
  &-content {
    @apply px-6 pt-4 pb-10 flex-1 text-text-color-secondary duration-300 group-hover:text-text-color;
  }
  &-footer {
    @apply w-full
    px-6 
    py-4 
    block
    border-t 
    border-border-color 
    text-primary 
    transition-colors 
    duration-300 
    hover:bg-primary 
    hover:text-white 
    group-hover:border-primary-light;
  }
}
</style>
