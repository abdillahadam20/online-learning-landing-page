<template>
  <div class="app">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.app {
  @apply h-full min-h-screen w-full bg-white;
}
</style>
