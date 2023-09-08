<template>
  <section class="Register container">
    <div class="Register__content">
      <div class="Register__text">
        <h2 class="heading-2">{{ title }}</h2>
        <p v-if="subtitle" class="Register__subtitle">{{ subtitle }}</p>
      </div>
      <form
        class="Register__form"
        @submit.prevent="onSubmitForm"
        ref="registerForm"
      >
        <FormField v-for="field in fields" v-bind="field" />
        <Button
          class="Register__button"
          type="submit"
          label="Je m'inscris"
          :color="buttonColor.BLUE"
        />
      </form>
    </div>
    <ModalCustom
      v-model="state.isModalOpen"
      @update:modelValue="onValueUpdate"
      :title="privacyPolicy.title"
    >
      <div class="richtext" v-html="privacyPolicy.content" />
    </ModalCustom>
    <!-- <ModalNative v-model="state.isModalOpen" :title="privacyPolicy.title">
      <div class="richtext" v-html="privacyPolicy.content" />
    </ModalNative> -->
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';

import { Button, FormField, ModalCustom, ModalNative } from '@/components';
import { buttonColor } from '@/enums/button';

import { privacyPolicy } from '@/pages/Homepage/fixtures';

const registerForm = ref(null);

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
  modalTrigger: null,
  isModalOpen: false,
});

onMounted(() => {
  state.modalTrigger = registerForm.value.querySelector('#access-credentials');
  state.modalTrigger.addEventListener('click', openModal);
});

onUnmounted(() => {
  state.modalTrigger.removeEventListener('click', openModal);
});

const openModal = (e) => {
  e.stopPropagation;
  state.isModalOpen = true;
};

const onValueUpdate = async (value) => {
  if (!value) {
    state.modalTrigger.focus();
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
