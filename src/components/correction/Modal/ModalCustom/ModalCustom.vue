<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="ModalCustom container"
        @keyup.esc="closeModal"
      >
        <div
          class="ModalCustom__overlay fullwidth-content"
          @click="closeModal"
        />
        <div class="ModalCustom__body" tabindex="-1" ref="modalBody">
          <button class="ModalCustom__close" @click="closeModal">
            <Icon :name="iconEnum.CROSS" />
          </button>
          <h1 class="ModalCustom__title">{{ title }}</h1>
          <div class="ModalCustom__content">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { Button, Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

const emit = defineEmits(['update:modelValue']);

const modalBody = ref(null);

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

watchEffect(() => {
  if (modalBody.value) {
    modalBody.value.focus();
  }
});

const closeModal = () => emit('update:modelValue', false);
</script>

<style lang="scss" scoped>
@use './ModalCustom.scss';
</style>
