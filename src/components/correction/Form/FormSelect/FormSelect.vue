<template>
  <div class="FormSelect">
    <select class="FormSelect__input" :name="name" :id="id">
      <option
        v-for="option in options"
        :value="option.value"
        :disabled="option.disabled"
        :selected="option.selected"
      >
        {{ option.label }}
      </option>
    </select>
    <Icon class="FormSelect__arrow" :name="iconEnum.CHEVRON" />
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
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use './FormSelect.scss';
</style>
