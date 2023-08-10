<template>
  <Teleport to="body">
    <div class="Modal" :class="{ 'Modal--open': modelValue }">
      <div class="Modal__overlay"></div>
      <div class="Modal__body">
        <button class="Modal__close" @click="closeModal">
          <Icon :name="iconEnum.CROSS" />
        </button>
        <h1 class="Modal__title">{{ title }}</h1>
        <slot />
      </div>
    </div>
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

<style lang="scss" scoped></style>
