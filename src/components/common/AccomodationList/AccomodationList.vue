<template>
  <section class="AccomodationList container">
    <h2 class="AccomodationList__title heading-2">{{ title }}</h2>
    <ul class="AccomodationList__list">
      <li v-for="accomodation in accomodations" class="AccomodationList__item">
        <AccomodationCard v-bind="accomodation" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { AccomodationCard } from '@/components';
import { iconEnum } from '@/enums/icon';

defineProps({
  title: {
    type: String,
    required: true,
  },
  accomodations: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use './AccomodationList.scss';
</style>
