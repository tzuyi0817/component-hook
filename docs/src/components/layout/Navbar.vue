<script setup lang="ts">
defineEmits(['closeFullNavbar']);
</script>

<template>
  <nav @click="$emit('closeFullNavbar')">
    <router-link
      to="/component"
      class="link-item"
      active-class="active"
    >
      Component
    </router-link>

    <router-link
      to="/cli"
      class="link-item"
      active-class="active"
    >
      CLI
    </router-link>

    <router-link
      to="/eslint"
      class="link-item"
      active-class="active"
    >
      ESLint
    </router-link>
  </nav>
</template>

<style lang="css" scoped>
.link-item {
  transition-property: color, border-color;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  padding: 16px 12px;
  border-bottom: 1px solid var(--border-color);
  font-weight: 500;
}

.link-item:hover {
  color: var(--primary);
}

.link-item.active {
  color: var(--primary);
}

@media (min-width: 1024px) {
  .link-item {
    border-bottom: 2px solid transparent;
  }

  .link-item.active {
    border-color: var(--primary);
    color: var(--text-color);
  }
}
</style>
