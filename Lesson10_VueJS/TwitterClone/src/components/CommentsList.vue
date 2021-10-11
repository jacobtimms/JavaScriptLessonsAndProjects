<template>
  <div>
    <div v-for="comm in commentsList" :key="comm.id">
      <CommentListItem :comment="comm.message"></CommentListItem>
    </div>
  </div>
</template>

<script>
import CommentListItem from "./CommentListItem"

export default {
  components: {
    CommentListItem,
  },
  props: {
    commentsList: Array,
  },
};
</script>

<style scoped></style>
