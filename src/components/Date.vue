<template>
  <div class="date">
    <h1>{{ title }}</h1>
    <h2>{{ date }}</h2>
  </div>
</template>

<script>
import format from 'date-fns/format';

export default {
  name: 'Date',
  data() {
    return {
      title: 'Current date',
      date: this.getDate(),
      interval: null,
    };
  },
  methods: {
    update() { this.time = this.getDate(); },
    getDate: () => format(new Date(), 'dddd, MMMM D, YYYY'),
  },
  mounted() { this.interval = setInterval(() => this.update(), 1000); },
  destroyed() { clearInterval(this.interval); },
};
</script>

<style scoped>
.date {
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
