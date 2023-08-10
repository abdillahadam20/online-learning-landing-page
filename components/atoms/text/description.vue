<template>
  <p class="description">{{ description }}</p>
</template>

<script setup lang="ts">
defineProps({
  description: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="postcss">
.description {
  @apply font-poppins text-[22px] leading-[39.6px] font-normal;
}
</style>
