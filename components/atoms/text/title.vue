<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="postcss">
.title {
  @apply font-bold font-poppins text-4xl;
}
</style>
