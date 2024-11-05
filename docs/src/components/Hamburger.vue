<script setup lang="ts">
const isActive = defineModel<boolean>();

function toggleHamburger() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <button
    :class="['plain menu-hamburger', { active: isActive }]"
    @click="toggleHamburger"
  >
    <span class="hamburger-1"></span>
    <span class="hamburger-2"></span>
    <span class="hamburger-3"></span>
  </button>
</template>

<style lang="postcss" scoped>
.menu-hamburger {
  @apply w-5 flex flex-col justify-center lg:hidden;

  span {
    @apply bg-text-color rounded-[10px] h-0.5 w-full my-0.5 transition-[transform_width] duration-300;

    &.hamburger-1 {
      @apply w-1/2;
    }

    &.hamburger-3 {
      @apply w-3/4;
    }
  }

  &.active {
    .hamburger-1 {
      @apply origin-bottom;
      transform: rotateZ(45deg) translate(13px, 0);
    }

    .hamburger-2 {
      @apply origin-top;
      transform: rotateZ(-45deg);
    }

    .hamburger-3 {
      @apply origin-bottom w-1/2;
      transform: translate(2px, -10px) rotateZ(45deg);
    }
  }
}
</style>
