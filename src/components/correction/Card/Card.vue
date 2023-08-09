<template>
  <article class="Card" :class="[`Card--${variant}`]">
    <div class="Card__body">
      <div class="Card__content">
        <h3 class="heading-3">
          <a :href="url" class="Card__link">{{ title }}</a>
        </h3>
        <p class="Card__total">{{ total }} locations</p>
        <p v-if="description" class="Card__description" v-html="description" />
      </div>
      <div class="Card__infos">
        <span class="Card__rating">
          <Icon :name="iconEnum.STAR" />
          {{ rating }}
        </span>
        <span class="Card__price">
          Dès <b>{{ price }} €</b>
        </span>
      </div>
    </div>
    <Image class="Card__image" :src="image.src" :alt="image.alt" />
  </article>
</template>

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
