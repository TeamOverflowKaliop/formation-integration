<template>
  <component
    ref="button"
    :is="tag"
    class="Button"
    :class="[`Button--${color}`, `Button--${variant}`]"
    :href="url"
    >{{ label }}</component
  >
</template>

<script setup>
import { computed, ref } from 'vue';

import { buttonColor, buttonVariant } from '@/enums/button';

const button = ref(null);

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    default: '',
  },
  /**
   * 'red', 'blue', 'white'
   */
  color: {
    type: String,
    default: buttonColor.RED,
  },
  /**
   * 'plain' or 'outline'
   */
  variant: {
    type: String,
    default: buttonVariant.PLAIN,
  },
});

defineExpose({
  button,
});

const tag = computed(() => {
  return props.url ? 'a' : 'button';
});
</script>

<style lang="scss" scoped>
@use './Button.scss';
</style>
