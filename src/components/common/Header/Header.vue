<template>
  <header
    class="Header"
    :class="{ 'Header--menuOpen': state.isMenuOpen }"
    role="banner"
  >
    <div class="container-full">
      <div class="Header__content">
        <a href="#" class="Header__logo">
          <img
            src="/images/logo.png"
            alt="logo-overflow"
            width="156"
            height="63"
          />
        </a>
        <nav class="Header__nav" role="navigation">
          <div class="Header__navContent">
            <ul class="Header__menu">
              <li v-for="link in menu">
                <a class="Header__link" :href="link.url">{{ link.label }}</a>
              </li>
            </ul>
            <Button
              class="Header__cta"
              :label="cta.label"
              :url="cta.url"
              :variant="buttonVariant.OUTLINE"
              :color="buttonColor.WHITE"
            />
          </div>
          <div
            class="Header__overlay"
            aria-hidden="true"
            role="button"
            @click="toggleMenu(false)"
          ></div>
        </nav>
        <div class="Header__tools">
          <BurgerButton
            :button-active="state.isMenuOpen"
            @on-click="toggleMenu"
          />
          <button class="Header__account">
            <Icon :name="iconEnum.USER" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { reactive } from 'vue';

import { BurgerButton, Button, Icon } from '@/components';
import { buttonColor, buttonVariant } from '@/enums/button';
import { iconEnum } from '@/enums/icon';

const emit = defineEmits(['header:on-menu-toggle']);

const menu = [
  { label: 'Hébergements', url: '#' },
  { label: 'Vols', url: '#' },
  { label: 'Transferts aéroport', url: '#' },
  { label: 'Réduction & offres', url: '#' },
];

const cta = { label: 'Enregistrez votre domicile', url: '#' };

const state = reactive({
  isMenuOpen: false,
});

const toggleMenu = (isActive) => {
  state.isMenuOpen = isActive;

  emit('header:on-menu-toggle', state.isMenuOpen);
};
</script>

<style lang="scss">
@use './Header.scss';
</style>
