<template>
  <div class="FormCheckbox">
    <input class="sr-only" type="checkbox" :id="id" :name="name" />
    <label class="FormCheckbox__label" :for="id">
      <span class="FormCheckbox__input" aria-hidden="true">
        <Icon :name="iconEnum.CHECK" />
      </span>
      <span v-html="label" />
    </label>
  </div>
</template>

<script setup>
import { Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

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

<style lang="scss">
@use './FormCheckbox.scss';
</style>
