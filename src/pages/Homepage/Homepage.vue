<template>
  <div class="homepage">
    <Hero v-bind="hero" />
    <DestinationsGrid v-bind="destinationsGrid" />
    <!-- <Register v-bind="register" /> -->
    <AccomodationList v-bind="accomodationsList" />
    <Content v-bind="content" />
  </div>
</template>

<script setup>
import {
  AccomodationList,
  Content,
  DestinationsGrid,
  Header,
  Hero,
  Icon,
  Register,
} from '@/components';

import {
  hero,
  destinationsGrid,
  accomodationsList,
  content,
  register,
} from './Homepage-fixtures';
</script>
