<template>
  <section class="Hero container">
    <Image v-bind="image" :preload="true" class="Hero__image" />
    <div class="Hero__text">
      <h1 class="Hero__title heading-1" v-html="title" />
    </div>
  </section>
</template>

<script setup>
import { Image } from '@/components';

defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use './Hero.scss';
</style>
