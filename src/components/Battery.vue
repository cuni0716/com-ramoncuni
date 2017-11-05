<template>
  <div class="battery">
    <h1>{{ title }}</h1>
    <h2>{{ power }}</h2>
    <h2 class="small">{{ charging }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Battery',
  data() {
    return {
      title: 'Current power level',
      power: '100%',
      charging: null,
    };
  },
  methods: {
    getBatteryLevel() {
      if (!global.navigator.getBattery) {
        this.power = 'Your browser does not support this feature';
      } else {
        global.navigator.getBattery()
          .then((battery) => {
            this.power = `${Math.ceil(battery.level * 100)}%`;
            this.charging = battery.charging ? 'Currently charging' : 'Not currently charging';
          });
      }
    },
  },
  mounted() {
    this.getBatteryLevel();
    setInterval(() => this.getBatteryLevel(), 10000);
  },
};
</script>

<style scoped>
.battery {
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
.small {
  font-size: 1em;
}
</style>
