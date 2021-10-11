<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld :msg="headingName + ' Igloo'"/> -->
    <button @click="lodashTest">{{btnName}}</button>
    <button :class="myClass" @click="changeTitle">ChangeTitle</button>
    <Avatar :username="headingName + ' Igloo'"></Avatar>
    <CommentHolder></CommentHolder>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import lodash from 'lodash'
import Avatar from 'vue-avatar'
import CommentHolder from './components/CommentHolder'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Avatar,
    CommentHolder
  },
  data() {
    return {
      btnName: "Lodash Other",
      headingName: "Hello World",
      myClass: "btn-red"
    }
  },
  methods: {
    lodashTest() {
      let [oddArr, evenArr ] = lodash.partition([1, 2, 3, 4], n => n === 3);
      console.log('three', oddArr);
      console.log('rest', evenArr);

      this.btnName = "You Clicked Me"
    },
    changeTitle(){
      this.headingName = "New Heading Name"
      this.myClass = "btn-green"
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

.btn-red{
  color: red;
}
.btn-green{
  color: green;
}


</style>
