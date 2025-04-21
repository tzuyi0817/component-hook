<script setup lang="ts">
const isActive = defineModel<boolean>();

function toggleHamburger() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <button
    :class="['plain menu-hamburger', { active: isActive }]"
    aria-label="mobile navigation"
    :aria-expanded="isActive"
    aria-controls="navbar-full-screen"
    @click="toggleHamburger"
  >
    <span class="hamburger-1"></span>
    <span class="hamburger-2"></span>
    <span class="hamburger-3"></span>
  </button>
</template>

<style lang="css" scoped>
.menu-hamburger {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: var(--header-height);

  span {
    background-color: var(--text-color);
    border-radius: 10px;
    height: 2px;
    width: 100%;
    margin: 2px 0;
    transition-property: transform, width;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  span.hamburger-1 {
    width: 50%;
  }

  span.hamburger-3 {
    width: 75%;
  }
}

.menu-hamburger.active {
  .hamburger-1 {
    transform-origin: bottom;
    transform: rotateZ(45deg) translate(13px, 0);
  }

  .hamburger-2 {
    transform-origin: top;
    transform: rotateZ(-45deg);
  }

  .hamburger-3 {
    transform-origin: bottom;
    width: 50%;
    transform: translate(2px, -10px) rotateZ(45deg);
  }
}

@media (min-width: 1024px) {
  .menu-hamburger {
    display: none;
  }
}
</style>
