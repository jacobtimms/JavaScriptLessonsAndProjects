<template>
  <div class="hello">
    <div :class="headerClass">
      <h1>{{ msg }}</h1>
      <h1>{{ internalMsg }}</h1>
      <h1>{{ computedMsg }}</h1>
    </div>
    <input type="text" v-model="fullName" />
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      internalMsg: 'Testo',
      lastName: 'Mark',
      firstName: 'David',
    };
  },
  computed: {
    headerClass() {
      return this.fullName.split(' ').length >  2 ? 'warning' : 'good';
    },
    computedMsg() {
      return this.internalMsg + ' ' + this.msg;
    },
    fullName: {
      // getter
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.warning {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
.good {
  background-color: #42b983;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
