<template>
  <div class="time">
    <h1>{{ title }}</h1>
    <h2>{{ time }}</h2>
  </div>
</template>

<script>
import format from 'date-fns/format';

export default {
  name: 'Time',
  data() {
    return {
      title: 'Current time',
      time: this.getTime(),
      interval: null,
    };
  },
  methods: {
    update() { this.time = this.getTime(); },
    getTime: () => format(new Date(), 'HH[:]mm[:]ss'),
  },
  mounted() { this.interval = setInterval(() => this.update(), 100); },
  destroyed() { clearInterval(this.interval); },
};
</script>

<style scoped>
.time {
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
  font-size: 1.5em;
  color: #4c5c6b;
  margin-left: 10px;
}
</style>
