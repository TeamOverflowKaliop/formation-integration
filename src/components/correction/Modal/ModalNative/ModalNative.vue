<template>
  <dialog
    class="ModalNative"
    ref="modal"
    aria-labelledby="modal-title"
    @close="closeModal"
    @click="closeWithBackdrop"
  >
    <div class="ModalNative__body" ref="modalBody">
      <button
        class="ModalNative__close"
        @click="closeModal"
        aria-label="Fermer la modale"
      >
        <Icon :name="iconEnum.CROSS" />
      </button>
      <h1 class="ModalNative__title" id="modal-title">{{ title }}</h1>
      <div class="ModalNative__content">
        <slot />
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useScrollLock } from '@vueuse/core';

import { Button, Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

const emit = defineEmits(['update:modelValue']);

const modal = ref(null);

const body = document.body;
const isLocked = useScrollLock(body);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      modal.value.showModal();
      isLocked.value = true;
    } else {
      modal.value.close();
      isLocked.value = false;
    }
  }
);

const closeModal = () => emit('update:modelValue', false);

const closeWithBackdrop = (e) => {
  const dialogDimensions = modal.value.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    closeModal();
  }
};
</script>

<style lang="scss" scoped>
@use './ModalNative.scss';
</style>
