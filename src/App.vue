<template>
  <Header @header:on-menu-toggle="onMenuToggle" />
  <main>
    <Homepage />
  </main>
  <Footer />
  <Modal :title="modalTitle">patate</Modal>
</template>

<script setup>
import { reactive } from 'vue';

import { Footer, Header, Modal } from '@/components';
import { Homepage } from '@/pages';

const state = reactive({
  isMenuOpen: false,
});

const modalTitle = 'Politique de confidentiacrosslité';

const onMenuToggle = (e) => {
  if (e) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};
</script>
