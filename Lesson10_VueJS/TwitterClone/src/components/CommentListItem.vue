<template>
  <div class="comment">
    <img class="tweetProfileImg" src="../assets/David.jpg" />
    <div class="tweetBody">
      <h4 class="tweetName">David Mark</h4>
      <p class=tweetText>{{comment}}</p>
    </div>
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
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  
}
.tweetBody  {
  display: block;
}
.tweetName  {
  font-size: 16px;
  margin-bottom: 0;
}
.tweetText  {
  margin: 5%, 0;
}

</style>