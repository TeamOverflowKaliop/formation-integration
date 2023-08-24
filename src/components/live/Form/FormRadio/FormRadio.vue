<template>
  FormRadio component
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use './FormRadio.scss';
</style>
