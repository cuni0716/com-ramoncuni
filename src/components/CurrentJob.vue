<template>
  <div class="current-job">
    <Description :title="title" :descriptions="description"/>
  </div>
</template>

<script>
import Description from './atoms/Description';

export default {
  name: 'CurrentJob',
  components: {
    Description,
  },
  data() {
    return {
      title: 'Current Job',
      description: [{
        description: 'Fullstack developer',
        link: 'https://www.hundredrooms.com',
        corporation: 'Hundredrooms',
      }],
    };
  },
};
</script>

<style scoped>

</style>
