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
        <Button
          type="button"
          label="Modale"
          @click="state.isModalOpen = true"
        />
      </form>
    </div>
    <Modal v-model="state.isModalOpen" :title="privacyPolicy.title">
      {{ privacyPolicy.content }}
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

import { Button, FormField, Modal } from '@/components';
import { buttonColor } from '@/enums/button';

import { privacyPolicy } from '@/pages/Homepage/Homepage-fixtures';

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

const state = reactive({
  isModalOpen: false,
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

<style lang="scss" scoped>
@use './Register.scss';
</style>
