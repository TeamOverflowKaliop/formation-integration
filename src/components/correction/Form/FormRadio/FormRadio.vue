<template>
  <div class="FormRadio">
    <div class="FormRadio__item" v-for="option in options">
      <input
        class="sr-only"
        type="radio"
        :value="option.value"
        :id="option.id"
        :name="name"
      />
      <label class="FormRadio__label" :for="option.id">
        <span class="FormRadio__input" aria-hidden="true"></span>
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
@use './FormRadio.scss';
</style>
