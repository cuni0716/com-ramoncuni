<template>
  <div class="section">
    <h1>{{ title }}</h1>
    <div class="description" v-bind:key="index" v-for="(description, index) in descriptions">
      <span>{{ description.description }}</span>
      <br>
      <span class="small" v-if="description.corporation">
        ·
        <a :href="description.link" target="_blank">{{ description.corporation }}</a>
      </span>
      <span class="timing" v-if="description.timing">{{ description.timing }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVSection',
  props: ['title', 'descriptions', 'timing'],
};
</script>

<style scoped>
.section {
  margin-bottom: 50px;
  border-bottom: 1px solid #4c5c6b;
}
.description {
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: left;
}
h1 {
  text-align: left;
  font-weight: 900;
  font-size: 2.5em;
}
span {
  text-align: left;
  font-size: 1.5em;
  color: #4c5c6b;
}
a {
  color: #4c5c6b;
}
.small {
  font-size: 1em;
}
.timing {
  font-size: 1em;
  color: #4c5c6b;
}
</style>
