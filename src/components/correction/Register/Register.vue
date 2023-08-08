<template>
  <section class="Register container">
    <div class="Register__content">
      <div class="Register__text">
        <h2 class="heading-2">{{ title }}</h2>
        <p v-if="subtitle" class="Register__subtitle">{{ subtitle }}</p>
      </div>
      <form class="Register__form" @submit.prevent="onSubmitForm">
        <FormField v-for="field in fields" v-bind="field" />
        <Button
          class="Register__button"
          type="submit"
          label="Je m'inscris"
          :color="buttonColor.BLUE"
        />
      </form>
    </div>
  </section>
</template>

<script setup>
import { Button, FormField } from '@/components';
import { buttonColor } from '@/enums/button';

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

const onSubmitForm = (event) => {
  const formData = Object.fromEntries(
    Array.from(new FormData(event.target).entries()).map(([key, value]) => [
      key,
      value || null,
    ])
  );

  console.log(formData);
};
</script>

<style lang="scss">
@use './Register.scss';
</style>
