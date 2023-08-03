<template>
  <div class="site-wrapper">
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

const onMenuToggle = (e) => {
  if (e) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};
</script>
