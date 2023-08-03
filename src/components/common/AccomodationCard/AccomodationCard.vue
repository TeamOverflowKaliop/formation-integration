<template>
  <article class="AccomodationCard">
    <div class="AccomodationCard__text">
      <h3 class="AccomodationCard__title heading-3">
        <a class="AccomodationCard__link" :href="url">
          <Icon v-if="icon" :name="icon" />
          {{ name }}
        </a>
      </h3>
      <p class="AccomodationCard__total">{{ total }} locations</p>
    </div>
    <Image :src="image" class="AccomodationCard__image" :lazy="true" />
  </article>
</template>

<script setup>
import { Icon, Image } from '@/components';

defineProps({
  name: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss">
@use './AccomodationCard.scss';
</style>
