<template>
  <CardLive v-for="destination in destinations" />
</template>

<script setup>
import { CardLive } from '@/components';

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
