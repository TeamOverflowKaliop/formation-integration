<template>
  <div class="site-wrapper" :class="{ 'no-scroll': state.isMenuOpen }">
    <Header @header:on-menu-toggle="onMenuToggle" />
    <main>
      <Homepage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { reactive } from 'vue';

import { Footer, Header } from '@/components';
import { Homepage } from '@/pages';

const state = reactive({
  isMenuOpen: false,
});

const onMenuToggle = (e) => (state.isMenuOpen = e);
</script>
