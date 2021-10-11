<template>
  <div class="tweetFeed">
    <NewComment @newcomment="onNewEvent"></NewComment>
    <CommentsList :commentsList="list"></CommentsList>
  </div>
</template>

<script>
import NewComment from "./NewComment";
import CommentsList from "./CommentsList";

export default {
  components: {
    NewComment,
    CommentsList,
  },
  data() {
    return {
      list: [
        { id: 0, message: "I love code! 😍" },
        { id: 1, message: "I hate milk! 😤" },
      ],
      nextId: 2,
    };
  },
  methods: {
    onNewEvent(val) {
      var id = this.nextId++;
      this.list.push({ id: id, message: val });
      this.$emit("tweetCount", this.list.length);
    },
  },
};
</script>

<style scoped>
.tweetFeed {
  border: solid;
  border-color: lightgray;
  border-radius: 1px;
  border-width: 1px;
  height:100%;
}
</style>
