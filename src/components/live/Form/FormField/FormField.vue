<template>
  <div class="FormField">
    <label v-if="label" class="FormField__label sr-only" :for="id">{{
      label
    }}</label>
    <span class="FormField__input">
      <FormCheckboxLive
        v-if="type === inputType.CHECKBOX"
        :name="name"
        :id="id"
        :label="label"
        v-bind="inputAttributes"
      />
      <FormRadioLive
        v-else-if="type === inputType.RADIO"
        :name="name"
        v-bind="inputAttributes"
      />
      <FormSelectLive
        v-else-if="type === inputType.SELECT"
        :name="name"
        :id="id"
        v-bind="inputAttributes"
      />
      <FormInputLive
        v-else
        :name="name"
        :id="id"
        :type="type"
        v-bind="inputAttributes"
      />
    </span>
  </div>
</template>

<script setup>
import { FormCheckboxLive, FormInputLive, FormRadioLive, FormSelectLive } from '@/components';
import { inputType } from '@/enums/form';

defineProps({
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
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

<style lang="scss" scoped>
@use './FormField.scss';
</style>