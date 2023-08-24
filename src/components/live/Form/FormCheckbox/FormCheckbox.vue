<template>
  FormCheckbox Component
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use './FormCheckbox.scss';
</style>
