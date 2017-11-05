<template>
  <div class="timestamp">
    <h1>{{ title }}</h1>
    <h2>{{ timestamp }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Timestamp',
  data() {
    return {
      title: 'Current timestamp',
      timestamp: this.getTimestamp(),
    };
  },
  methods: {
    update() {
      this.timestamp = this.getTimestamp();
    },
    getTimestamp: () => new Date().getTime(),
  },
  mounted() { setInterval(() => this.update(), 1); },
};
</script>

<style scoped>
.timestamp {
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
