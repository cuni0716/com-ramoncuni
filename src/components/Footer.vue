<template>
  <footer class="footer">
    <a
      class="footer__link"
      v-bind:key="index"
      v-for="(footerLink, index) in footerLinks"
      v-on:click="onLinkClick(footerLink.alt)"
      :href="footerLink.link"
      :target="footerLink.target"
    >
      <img
        class="footer__link__img"
        :src="footerLink.image"
        :alt="footerLink.alt"
      >
    </a>
  </footer>
</template>

<script>
import { gAnalyticsLinkFooter } from '../helpers/analytics';
import { FOOTER_LINKS } from '../constants';

export default {
  name: 'Footer',
  data() {
    return {
      footerLinks: FOOTER_LINKS,
    };
  },
  methods: {
    onLinkClick(link) {
      gAnalyticsLinkFooter('click', link.toLowerCase());
    },
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  width: 100%;
  height: 8vh;
  bottom: 0;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  backdrop-filter: blur(6px);
}
.footer__link {
    line-height: 10vh;
    text-decoration: none;
}
.footer__link__img {
    display: inline-block;
    width: 35px;
    margin-top: 8px;
    margin-left: 10px;
}
</style>
