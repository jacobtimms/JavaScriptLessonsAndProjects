<template>
  <div id="app">
    <div id="heading">
      <roller v-bind:text="headingName" defaultChar="vue"></roller>
    </div>
    <input id="headingInput" v-model="headingName" placeholder="Edit Me!">
    <button @click="shuffle(headingName)" id="clickMe" class="btn">Click Me!</button>
  </div>
</template>

<script>
import Roller from "vue-roller"

export default {
  name: 'App',
  components: {
    Roller
  },
  data()  {
    return{
      headingName: 'Edit Me!'
    }
  },
  methods: {
  shuffle(s) {
    function getRandomInt(n) {
      return Math.floor(Math.random() * n);
    }
    
    var arr = s.split('');           // Convert String to array
    var n = arr.length;              // Length of the array

    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       // Get random of [0, n-1]

      var temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }

    s = arr.join('');                // Convert Array to string
    this.headingName = s             // Replace heading with shuffled string
    }
  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn  {
  display: inline-block;
}
#heading  {
  font-size: 32px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
}
</style>
