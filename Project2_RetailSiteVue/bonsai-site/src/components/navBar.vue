<template>
  <header class="header" id="navbar">
    <img
      @click="toggleNav"
      src="../assets/images/NavBar/menuWhite.png"
      id="navHamburger"
      role="button"
      style="display: inline-block"
    />
    <router-link
      to="/"
      class="nav-link"
      id="nav-item"
      style="display: inline-block"
      >BONSAI</router-link
    >
    <img
      src="../assets/images/NavBar/basket.jpeg"
      id="navBasket"
      role="button"
      style="display: inline-block"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      navOpen: 0,
    };
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },
    toggleNav() {
      if (this.navOpen === 0) {
        this.navOpen = 1;
        this.openNav();
      } else if (this.navOpen === 1) {
        this.navOpen = 0;
        this.closeNav();
      }
    },
  },
};
</script>

<style>
/* NavBar */
#navbar {
  background: linear-gradient(
    to bottom,
    rgb(151, 146, 146) 0%,
    rgba(151, 146, 146, 0) 100%
  );
  z-index: 99;
  box-shadow: none;
  width: 100vw;
  position: fixed;
}
@media (max-width: 767px) {
  #navbar {
    height: 4rem;
    text-align: center;
    background-color: rgb(151, 146, 146);
  }
}

#navHamburger {
  height: 1rem;
  padding-left: 2rem;
  margin-top: 0rem;
  display: inline;
  padding-right: 1.5rem;
  margin-bottom: 0.4rem;
}
@media (max-width: 767px) {
  #navHamburger {
    padding-left: 1.5rem;
    float: left;
    margin-top: 2rem;
    padding: 0;
    margin-left: 2rem;
  }
}

#navBasket {
  height: 1.5rem;
  margin-top: 1.5rem;
  margin-right: 2rem;
  float: right;
  display: inline;
}

#nav-item {
  color: white;
  font-size: 1.3rem;
  padding: 1.5rem 0rem 0rem 1.5rem;
  letter-spacing: 1.1rem;
}
@media (max-width: 767px) {
  #nav-item {
    padding-top: 1.5rem;
    padding-left: 0;
    font-weight: 200;
  }
}

/* Style page content -  push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 0;
}
</style>