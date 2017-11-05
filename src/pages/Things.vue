<template>
  <div id="app">
    <Header/>
    <Ip/>
    <Date/>
    <Hour/>
    <Timestamp/>
    <Battery/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Ip from '../components/Ip';
import Date from '../components/Date';
import Hour from '../components/Hour';
import Timestamp from '../components/Timestamp';
import Battery from '../components/Battery';
import Footer from '../components/Footer';
import { gAnalyticsPageView } from '../helpers/analytics';

export default {
  name: 'Things',
  components: {
    Header,
    Ip,
    Date,
    Hour,
    Timestamp,
    Battery,
    Footer,
  },
  mounted() {
    setTimeout(() => gAnalyticsPageView(), 1000);
  },
};
</script>

<style>
body {
  padding-bottom: 50px;
}
</style>
