<template>
  <picture class="Image">
    <template v-if="sources.length">
      <source
        v-for="source in sources"
        :media="source.media"
        :srcset="source.srcset"
      />
    </template>
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="lazy ? 'lazy' : 'eager'"
    />
  </picture>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  sources: {
    type: Array,
    default: () => [],
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  preload: {
    type: Boolean,
    default: false,
  },
});
</script>
