<template>
  <div class="comment">
    {{comment}}
  </div>
</template>

<script>
  export default {
    props: {
      comment: String,
    },
  }
</script>

<style  scoped>
.comment {
  border-bottom: 1px solid #ccc;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
}
</style>