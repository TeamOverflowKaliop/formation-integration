<template>Card Component</template>

<script setup>
import { Icon, Image } from '@/components';

import { iconEnum } from '@/enums/icon';
import { cardVariant } from '@/enums/card';

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  variant: {
    type: String,
    default: cardVariant.VERTICAL,
  },
});
</script>

<style lang="scss" scoped>
@use './Card.scss';
</style>
