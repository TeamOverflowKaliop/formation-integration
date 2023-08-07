<template>
  <div class="FormField">
    <label class="FormField__label sr-only" :for="id">{{ label }}</label>
    <span class="FormField__input">
      <FormCheckbox v-if="type === inputType.CHECKBOX" />
      <FormRadio v-else-if="type === inputType.RADIO" />
      <FormSelect v-else-if="type === inputType.SELECT" />
      <FormInput v-else :id="id" :type="type" v-bind="inputAttributes" />
    </span>
  </div>
</template>

<script setup>
import { FormCheckbox, FormInput, FormRadio, FormSelect } from '@/components';
import { inputType } from '@/enums/form';
defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: inputType.TEXT,
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
