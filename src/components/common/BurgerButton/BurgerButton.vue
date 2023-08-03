<template>
  <button
    class="BurgerButton"
    :class="{ 'BurgerButton--active': state.isActive }"
    aria-label="Menu"
    @click="onButtonClick"
  >
    <span class="BurgerButton__content" aria-hidden="true">
      <span class="BurgerButton__stripe"></span>
    </span>
  </button>
</template>

<script setup>
import { reactive, watch } from 'vue';

const emit = defineEmits(['onClick']);

const props = defineProps({
  buttonActive: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  isActive: props.buttonActive,
});

watch(
  () => props.buttonActive,
  (value) => {
    state.isActive = value;
  }
);

const onButtonClick = () => {
  state.isActive = !state.isActive;

  emit('onClick', state.isActive);
};
</script>

<style lang="scss">
@use './BurgerButton.scss';
</style>
