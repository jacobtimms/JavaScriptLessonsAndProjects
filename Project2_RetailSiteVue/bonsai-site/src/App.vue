<template>
  <div id="app">
    <head>
      <link rel="stylesheet" href="./assets/css/mdb.min.css" type="text/css">
    </head>
    <side-nav></side-nav>
    <div id="main">
      <navBar></navBar>
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
import navBar from './components/navBar'
import SideNav from './components/sideNav.vue'

export default {
  name: 'App',
  components: {
    navBar,
    SideNav,
  },
}

</script>

<style>
/* Font Awespme */
@import url('https://use.fontawesome.com/releases/v5.11.2/css/all.css');
/* Google Fonts Roboto */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
/* Google Fonts Hind */
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500&display=swap');
/* MBD */
@import "./assets/css/mdb.min.css";

html{
  background-color: rgb(151, 146, 146);
}

#app {
  font-family: 'Roboto', sans-serif;
}
</style>
