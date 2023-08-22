<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="ModalCustom container"
        role="dialog"
        aria-modal="true"
        @keyup.esc="closeModal"
        ref="modal"
      >
        <div
          class="ModalCustom__overlay fullwidth-content"
          @click="closeModal"
          tabindex="-1"
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
import { nextTick, ref, watchEffect } from 'vue';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { Button, Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

const emit = defineEmits(['update:modelValue']);

const modal = ref(null);
const modalBody = ref(null);

const { activate, deactivate } = useFocusTrap(modal);

defineExpose({
  modal,
});

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
  if (modalBody.value) {
    await nextTick();
    activate();

    modalBody.value.focus();
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
