<template>
  <div class="FormField">
    <label class="FormField__label" :for="id">{{ label }}</label>
    <span class="FormField__input">
      <FormInput :id="id" v-bind="inputAttributes" />
    </span>
  </div>
</template>

<script setup>
import { FormInput } from '@/components';
defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  inputAttributes: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss">
@use './FormField.scss';
</style>
