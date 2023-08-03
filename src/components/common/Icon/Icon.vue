<template>
  <svg class="Icon" aria-hidden="true" width="24" height="24">
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<script setup>
import { iconEnum } from '@/enums/icon';

defineProps({
  name: {
    type: String,
    required: true,
    validator(value) {
      return Object.values(iconEnum).includes(value);
    },
  },
});
</script>
