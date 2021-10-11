<template>
  <div>
    <input type="text" v-model="comment" placeholder="Enter a comment"/>
    <button @click="onNewComment">Comment</button>
    <button @click="$emit('newcomment', this.comment)">Comment</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        comment: "",
      }
    },
    methods: {
      onNewComment() {
        this.$emit('newcomment', this.comment)
      }
    },
  }
</script>

<style scoped>

</style>