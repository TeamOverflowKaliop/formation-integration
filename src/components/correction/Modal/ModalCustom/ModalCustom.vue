<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="ModalCustom container"
        role="dialog"
        aria-modal="true"
        ref="modal"
        @keydown.esc="closeModal"
      >
        <div
          class="ModalCustom__overlay fullwidth-content"
          @click="closeModal"
          tabindex="-1"
        />
        <div class="ModalCustom__body" tabindex="-1" data-modal-body>
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
import { nextTick, ref, watchEffect } from 'vue';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { Button, Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

const emit = defineEmits(['update:modelValue']);

const modal = ref(null);

const { activate, deactivate } = useFocusTrap(modal);

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

    modal.value.querySelector('[data-modal-body]').focus();
  }
});

const closeModal = () => {
  deactivate();
  emit('update:modelValue', false);
};
</script>

<style lang="scss" scoped>
@use './ModalCustom.scss';
</style>
