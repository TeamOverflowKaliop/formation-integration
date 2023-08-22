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
          ref="modalButton"
        />
      </form>
    </div>
    <ModalCustom
      v-model="state.isModalOpen"
      @update:modelValue="onValueUpdate"
      :title="privacyPolicy.title"
    >
      {{ privacyPolicy.content }}
    </ModalCustom>
    <!-- <ModalNative v-model="state.isModalOpen" :title="privacyPolicy.title">
      {{ privacyPolicy.content }}
    </ModalNative> -->
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

import { Button, FormField, ModalCustom, ModalNative } from '@/components';
import { buttonColor } from '@/enums/button';

import { privacyPolicy } from '@/pages/Homepage/Homepage-fixtures';

const modalButton = ref(null);

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

const onValueUpdate = async (value) => {
  if (!value) {
    modalButton.value.button.focus();
  }
};

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
