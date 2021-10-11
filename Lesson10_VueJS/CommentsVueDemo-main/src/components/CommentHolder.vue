<template>
  <div class="city">
    <h1>Comments</h1>
    <NewComment @newcomment="onNewEvent"></NewComment>
    <CommentsList :commentsList="list"></CommentsList>
  </div>
</template>

<script>
import NewComment from './NewComment';
import CommentsList from './CommentsList';

export default {
  components: {
    NewComment,
    CommentsList,
  },
  data() {
    return {
      list: [
        { id: 0, message: 'Word' },
        { id: 1, message: 'Lot' },
      ],
      nextId: 2
    };
  },
  methods: {
    onNewEvent(val) {
      var id = this.nextId++;
      this.list.push({ id: id, message: val })
    }
  },
};
</script>

<style scoped>
.city {
  background-color: #42b983;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
