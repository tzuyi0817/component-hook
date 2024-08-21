<script setup lang="ts"></script>

<template>
  <div class="py-12 lg:py-20">
    <section class="flex flex-col gap-3 justify-center items-center text-center mb-12 px-4 lg:mb-16">
      <h1 class="font-serif">Component Hook</h1>
      <p>A component library that includes a collection of common and useful components</p>

      <img
        src="https://img.shields.io/github/v/release/tzuyi0817/component-hook?label=%20&color=409eff"
        alt="GitHub Release"
        width="50"
      />
    </section>

    <section class="flex flex-col gap-10 justify-center items-center">
      <div class="feature group">
        <img
          class="feature-image"
          src="@/assets/images/component.png"
          alt="Feature Component Image"
          width="128"
        />
        <h3 class="feature-title">Component</h3>
        <p class="feature-content">Designed to help developers quickly build applications.</p>
        <router-link
          to="component/picker"
          class="feature-footer"
        >
          Get Started
        </router-link>
      </div>
      <div class="feature group">
        <img
          class="feature-image"
          src="@/assets/images/plugin.png"
          alt="Feature Plugin Image"
          width="220"
        />
        <h3 class="feature-title">ESLint Plugin</h3>
        <p class="feature-content">Reasonable defaults, best practices, and just a few lines of configuration.</p>
        <router-link
          to="/eslint"
          class="feature-footer"
        >
          Get Started
        </router-link>
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
.feature {
  @apply flex
  flex-col
  items-center
  border 
  border-border-color 
  rounded 
  text-center 
  w-[500px] 
  max-w-[90%]
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
    @apply px-6 pt-4 pb-10 text-gray-500 duration-300 group-hover:text-text-color;
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
