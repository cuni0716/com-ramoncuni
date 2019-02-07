<template>
  <div id="app">
    <Header :route="route"/>
    <div class="cv">
      <CVSection :title="description.title" :descriptions="description.description" />
      <CVSection :title="currentJob.title" :descriptions="currentJob.description" :timing="currentJob.timing" />
      <CVSection :title="studies.title" :descriptions="studies.descriptions" />
      <CVSection :title="skills.title" :descriptions="skills.description" />
      <CVSection :title="projects.title" :descriptions="projects.descriptions" />
      <CVSection :title="articles.title" :descriptions="articles.descriptions" />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import CVSection from '../components/atoms/CVSection';
import Footer from '../components/Footer';
import { gAnalyticsPageView } from '../helpers/analytics';
import { DESCRIPTION, CURRENT_JOB, STUDIES, SKILLS, PROJECTS, ARTICLES } from '../constants';

export default {
  name: 'CV',
  data() {
    return {
      route: this.$route.path,
      description: DESCRIPTION,
      currentJob: CURRENT_JOB,
      studies: STUDIES,
      skills: SKILLS,
      projects: PROJECTS,
      articles: ARTICLES,
    };
  },
  components: {
    Header,
    CVSection,
    Footer,
  },
  mounted() {
    setTimeout(() => gAnalyticsPageView(), 1000);
  },
};
</script>

<style scoped>
.cv {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 80%;
  margin: auto;
}
</style>
