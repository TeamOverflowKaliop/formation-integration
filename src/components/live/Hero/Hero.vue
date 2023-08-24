<template>
  Hero Component
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use './Hero.scss';
</style>
