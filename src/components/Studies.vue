<template>
  <div class="current-job">
    <Description :title="title" :descriptions="descriptions"/>
  </div>
</template>

<script>
import Description from './atoms/Description';

export default {
  name: 'Studies',
  components: {
    Description,
  },
  data() {
    return {
      title: 'Studies',
      descriptions: [
        {
          description: 'Senior Technician in Web Application Development',
          link: 'http://www.iespaucasesnoves.cat/',
          corporation: 'IES Pau Casesnoves',
        },
        {
          description: 'Linux Essentials',
          link: 'http://cs.lpi.org/caf/Xamman/certification/verify/LPI000353030/bx9nnbq9ac',
          corporation: 'Linux Professional Institute',
        },
        {
          description: 'Scrum Master training',
          link: 'http://www.agilar.es/trainings?gclid=Cj0KEQjwmcTJBRCYirao6oWPyMsBEiQA9hQPbrHpYJBsMEOH-9pp3j65i3ly2eJX7g8kYmK3YYfPgsgaAm5h8P8HAQ',
          corporation: 'Agilar',
        },
      ],
    };
  },
};
</script>

<style scoped>
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
a {
  color: #4c5c6b;
}
</style>
