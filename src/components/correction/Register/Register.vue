<template>
  <section class="Register container">
    <div class="Register__content">
      <div class="Register__text">
        <h2 class="heading-2">{{ title }}</h2>
        <p v-if="subtitle" class="Register__subtitle">{{ subtitle }}</p>
      </div>
      <form class="Register__form" action="#">
        <FormField v-for="field in fields" v-bind="field" />
      </form>
    </div>
  </section>
</template>

<script setup>
import { Button, FormField } from '@/components';
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  fields: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
@use './Register.scss';
</style>
