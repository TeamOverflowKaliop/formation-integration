<template>
  <section class="Content container">
    <div>
      <h2 class="Content__title heading-2" v-html="title" />
      <p>{{ text }}</p>
      <div v-if="ctas" class="Content__ctas">
        <Button v-for="cta in ctas" :label="cta.label" :color="cta.color" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Button } from '@/components';

defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  ctas: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss">
@use './Content.scss';
</style>
