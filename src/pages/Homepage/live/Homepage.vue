<template>
  <div class="homepage">
    <HeroLive v-bind="hero" />
    <DestinationsGridLive v-bind="destinationsGrid" />
    <RegisterLive v-bind="register" />
    <AccomodationList v-bind="accomodationsList" />
    <Content v-bind="content" />
  </div>
</template>

<script setup>
import {
  AccomodationList,
  Content,
  DestinationsGridLive,
  Header,
  HeroLive,
  Icon,
  RegisterLive,
} from '@/components';

import {
  hero,
  destinationsGrid,
  accomodationsList,
  content,
  register,
} from '@/pages/Homepage/fixtures';
</script>
