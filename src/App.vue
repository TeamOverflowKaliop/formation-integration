<template>
  <Header />
  <main>
    <Homepage />
    <!--<HomepageLive />-->
  </main>
  <Footer />
</template>

<script setup>
import { reactive } from 'vue';

import { Footer, Header } from '@/components';
import { Homepage, HomepageLive } from '@/pages';
</script>
