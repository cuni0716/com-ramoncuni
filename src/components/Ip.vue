<template>
  <div class="ip">
    <h1>{{ title }}</h1>
    <h2>{{ ip }}</h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Ip',
  data() {
    return {
      title: 'Your public IP',
      ip: '127.0.0.1',
    };
  },
  methods: {
    getIp() {
      axios.get('https://api.ipify.org?format=json')
        .then((response) => { this.ip = response.data.ip; })
        .catch();
    },
  },
  mounted() {
    this.getIp();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ip {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 80%;
  margin: auto;
}
h1 {
  text-align: left;
  font-weight: 900;
  font-size: 2.5em;
}
h2 {
  text-align: left;
  font-size: 2em;
  color: #4c5c6b;
  margin-left: 10px;
}
</style>
