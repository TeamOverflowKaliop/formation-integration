<template>
  <div class="Modal" :class="{ 'Modal--open': state.isOpen }">
    <div class="Modal__overlay"></div>
    <div class="Modal__body">
      <button class="Modal__close"><Icon :name="iconEnum.CROSS" /></button>
      <h1 class="Modal__title">{{ title }}</h1>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Button, Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const state = reactive({
  isOpen: false,
});
</script>

<style lang="scss"></style>
