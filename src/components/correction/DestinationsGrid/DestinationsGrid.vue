<template>
  <div class="DestinationsGrid container">
    <h2 class="DestinationsGrid__title heading-2" v-html="title" />
    <ul class="DestinationsGrid__list">
      <li
        v-for="(destination, i) in destinations"
        class="DestinationsGrid__item"
      >
        <Card
          v-bind="destination"
          :variant="i === 0 ? cardVariant.HORIZONTAL : cardVariant.VERTICAL"
        />
      </li>
    </ul>
    <Button class="DestinationsGrid__cta" v-if="cta" v-bind="cta" />
  </div>
</template>

<script setup>
import { Button, Card } from '@/components';

import { cardVariant } from '@/enums/card';

defineProps({
  title: {
    type: String,
    required: true,
  },
  destinations: {
    type: Array,
    required: true,
  },
  cta: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss">
@use './DestinationsGrid.scss';
</style>
