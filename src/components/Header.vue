<template>
  <nav class="header">
    <span class="header__logo">
      <router-link to="/">
        Ramon<b class="bold">Cuni</b>
      </router-link>
      <span class="bold margin">|</span>
      <router-link to="/cv">
        CV
      </router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: ['route'],
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 70px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.header__icon {
  left: 10px;
  padding-left: 10px;
  line-height: 70px;
  font-size: 5vh;
  font-weight: lighter;
  color: #000000;
}
.header__icon__home {
  position: absolute;
  right: 10px;
  padding-left: 10px;
  line-height: 70px;
  font-size: 5vh;
  font-weight: lighter;
  color: #000000;
}
.header__logo {
  position: absolute;
  right: 10px;
  font-size: 3vh;
  color: #000000;
  top: 25px;
}
.bold {
  font-weight: 900;
}
.margin {
  margin-left: 10px;
  margin-right: 10px;
}
a {
  color: #000000;
  text-decoration: none;
}
.router-link-exact-active {
  text-decoration: underline;
}
</style>
