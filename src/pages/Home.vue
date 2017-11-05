<template>
  <div id="app">
    <Header :route="route"/>
    <Typewritter/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Typewritter from '../components/Typewritter';
import Footer from '../components/Footer';
import { gAnalyticsPageView } from '../helpers/analytics';

export default {
  name: 'Home',
  data() {
    return {
      route: this.$route.path,
    };
  },
  components: {
    Header,
    Typewritter,
    Footer,
  },
  mounted() {
    setTimeout(() => gAnalyticsPageView(), 1000);
  },
};
</script>

<style scoped>

</style>
