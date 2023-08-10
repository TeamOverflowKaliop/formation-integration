<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modelValue" class="Modal container">
        <div class="Modal__overlay fullwidth-content" @click="closeModal" />
        <div class="Modal__body">
          <button class="Modal__close" @click="closeModal">
            <Icon :name="iconEnum.CROSS" />
          </button>
          <h1 class="Modal__title">{{ title }}</h1>
          <div class="Modal__content">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { Button, Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

const emit = defineEmits(['update:modelValue']);

defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const closeModal = () => emit('update:modelValue', false);
</script>

<style lang="scss" scoped>
@use './Modal.scss';
</style>
