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
  <div class="home-feature">
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

<style lang="css" scoped>
.home-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  text-align: center;
  width: 500px;
  max-width: 100%;
  transition-property: color, transform, border-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.home-feature-image {
  margin: 24px 0;
  transition-duration: 700ms;
}

.home-feature-title {
  padding: 0 24px;
  transition-duration: 300ms;
}

.home-feature-content {
  padding: 16px 24px 40px;
  flex: 1 1 0%;
  color: var(--text-color-secondary);
  transition-duration: 300ms;
}

.home-feature-footer {
  width: 100%;
  padding: 16px 24px;
  display: block;
  border-top: 1px solid var(--border-color);
  color: var(--primary);
  transition-property: color, border-color, background-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.home-feature-footer:hover {
  background-color: var(--primary);
  color: #ffffff;
}

.home-feature:hover {
  transform: scale(105%);
  border-color: var(--primary-light);

  .home-feature-image {
    transform: rotate3d(1, 1, 1, 360deg) scale(125%);
  }

  .home-feature-title {
    color: var(--primary);
  }

  .home-feature-content {
    color: var(--text-color);
  }

  .home-feature-footer {
    border-color: var(--primary-light);
  }
}
</style>
