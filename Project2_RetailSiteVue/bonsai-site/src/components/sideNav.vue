<template>
  <div id="mySidenav" class="sidenav">
    <router-link to="/">Home</router-link>
    <router-link to="/Account">Account</router-link>
    <router-link to="/storePage/outdoorBonsaiProducts">Outdoor Bonsai</router-link>
    <router-link to="/storePage/indoorBonsaiProducts">Indoor Bonsai</router-link>
    <router-link to="/storePage/bonsaiCareProducts">Bonsai Care</router-link>
    <router-link to="/Contact">Contact</router-link>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* SideNav menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 100; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* SideNav menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  white-space: nowrap;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>