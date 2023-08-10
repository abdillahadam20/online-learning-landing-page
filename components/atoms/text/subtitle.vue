<template>
  <h3 class="subtitle">{{ subtitle }}</h3>
</template>

<script setup lang="ts">
defineProps({
  subtitle: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="postcss">
.subtitle {
  @apply font-poppins text-2xl font-normal;
}
</style>
