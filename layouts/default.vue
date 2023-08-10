<template>
  <div class="app">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.app {
  @apply h-full min-h-screen w-full bg-white;
}
</style>
