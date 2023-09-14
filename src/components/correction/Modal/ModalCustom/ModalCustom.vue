<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="ModalCustom container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref="modal"
        @keydown.esc="closeModal"
      >
        <div
          class="ModalCustom__backdrop fullwidth-content"
          @click="closeModal"
          tabindex="-1"
        />
        <div class="ModalCustom__body">
          <button
            class="ModalCustom__close"
            @click="closeModal"
            data-modal-close
            aria-label="Fermer la modale"
          >
            <Icon :name="iconEnum.CROSS" />
          </button>
          <h1 class="ModalCustom__title" id="modal-title">{{ title }}</h1>
          <div class="ModalCustom__content">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { nextTick, ref, watchEffect } from 'vue';
import { useScrollLock } from '@vueuse/core';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { Button, Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

const emit = defineEmits(['update:modelValue']);

const modal = ref(null);
const { activate, deactivate } = useFocusTrap(modal);

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

watchEffect(async () => {
  if (modal.value) {
    await nextTick();
    activate();

    isLocked.value = true;
    modal.value.querySelector('[data-modal-close]').focus();
  }
});

const closeModal = () => {
  deactivate();
  isLocked.value = false;
  emit('update:modelValue', false);
};
</script>

<style lang="scss" scoped>
@use './ModalCustom.scss';
</style>
