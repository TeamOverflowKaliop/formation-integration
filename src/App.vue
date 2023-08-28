<template>
  <Header @header:on-menu-toggle="onMenuToggle" />
  <main>
    <Homepage />
    <HomepageLive />
  </main>
  <Footer />
</template>

<script setup>
import { reactive } from 'vue';

import { Footer, Header } from '@/components';
import { Homepage, HomepageLive } from '@/pages';

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
