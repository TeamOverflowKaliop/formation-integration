<template>
  <dialog class="ModalNative" ref="modal" @close="closeModal">
    <div class="ModalNative__body" ref="modalBody">
      <button class="ModalNative__close" @click="closeModal">
        <Icon :name="iconEnum.CROSS" />
      </button>
      <h1 class="ModalNative__title">{{ title }}</h1>
      <div class="ModalNative__content">
        <slot />
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Button, Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

const emit = defineEmits(['update:modelValue']);

const modal = ref(null);

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
    } else {
      modal.value.close();
    }
  }
);

const closeModal = () => emit('update:modelValue', false);
</script>

<style lang="scss" scoped>
@use './ModalNative.scss';
</style>
