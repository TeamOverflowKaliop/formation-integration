<template>
  FormSelect Component
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
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use './FormSelect.scss';
</style>
