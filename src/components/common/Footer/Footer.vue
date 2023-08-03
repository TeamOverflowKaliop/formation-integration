<template>
  <footer class="Footer" role="contentinfo">
    <div class="container">
      <div class="Footer__content">
        <div v-for="menu in menus" class="Footer__part">
          <h2 class="Footer__title heading-3">{{ menu.title }}</h2>
          <ul class="Footer__menu">
            <li v-for="link in menu.links" class="Footer__item">
              <a :href="link.url" class="Footer__link">{{ link.label }}</a>
            </li>
          </ul>
        </div>
        <div class="Footer__part">
          <h2 class="Footer__title heading-3">{{ contactMenu.title }}</h2>
          <ul class="Footer__menu">
            <li v-for="link in contactMenu.links" class="Footer__item">
              <a :href="link.url" class="Footer__link">
                <Icon :name="link.icon" />
                {{ link.label }}
              </a>
            </li>
          </ul>
          <ul class="Footer__socialNetworks">
            <li
              v-for="network in socialNetworks"
              class="Footer__socialNetworksItem"
            >
              <a
                :href="network.url"
                class="Footer__socialNetworksLink"
                :aria-label="network.label"
              >
                <Icon :name="network.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="Footer__copyright container">
      <p class="Footer__text">
        Copyright © 2005 – 2022 Overflow Company Pte. Ltd. Tous droits
        réservés.<br />
        Overflow.com fait partie de
        <b>Kaliop Holdings Inc., le leader mondial du voyage en ligne</b> et des
        services associés.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@/components';
import { iconEnum } from '@/enums/icon';

const menus = [
  {
    title: 'Société',
    links: [
      { label: 'À propos de nous', url: '#' },
      { label: 'Emploi', url: '#' },
      { label: 'Presse', url: '#' },
      { label: 'Blog', url: '#' },
      { label: 'PointsMAX', url: '#' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { label: 'Centre d’assistance', url: '#' },
      { label: 'FAQ', url: '#' },
      { label: 'Politique de confidentialité', url: '#' },
      { label: 'Poltique relative aux cookies', url: '#' },
      { label: 'Conditions d’utilisation', url: '#' },
    ],
  },
  {
    title: 'Partenaires',
    links: [
      { label: 'YCS portail partenaire', url: '#' },
      { label: 'Partner Hub', url: '#' },
      { label: 'Affiliés', url: '#' },
      { label: 'Connectivités partenaires', url: '#' },
    ],
  },
];

const contactMenu = {
  title: 'Contact',
  links: [
    { label: '1234567890', url: '#', icon: iconEnum.PHONE },
    { label: 'company@email.com', url: '#', icon: iconEnum.MAIL },
  ],
};

const socialNetworks = [
  { label: 'Facebook', url: '#', icon: iconEnum.FACEBOOK },
  { label: 'Twitter', url: '#', icon: iconEnum.TWITTER },
  { label: 'Instagram', url: '#', icon: iconEnum.INSTAGRAM },
  { label: 'LinkedIn', url: '#', icon: iconEnum.LINKEDIN },
];
</script>

<style lang="scss">
@use './Footer.scss';
</style>
