<template>
  DestinationsGrid Component
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  destinations: {
    type: Array,
    required: true,
  },
  cta: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
@use './DestinationsGrid.scss';
</style>
