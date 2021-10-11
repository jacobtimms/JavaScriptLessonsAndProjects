<template>
  <div>
    <div class="posttweetcontainer">
      <img class="posttweetprofimg" src="../assets/David.jpg" />
      <div class="ml56px">
        <div class="posttweettacontainer">
          <textarea
            id="posttweetta"
            class="posttweetta"
            placeholder="What's happening?"
            v-model="comment"
            maxlength="240"
          ></textarea>
          <div class="posttweetcountcont">
            <span class="posttweetcount"
              ><span id="totalchars">{{comment.length}}</span>/250</span
            >
          </div>
        </div>
        <div class="posttweetbutcont">
          <button @click="onNewComment" id="posttweetbut" class="posttweetbut">
            Tweet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
  },
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    onNewComment() {
      this.transformHashtag(this.comment);
      this.$emit("newcomment", this.comment);
      this.comment = "";
    },
    transformHashtag(textInput)  {
      let words = [];
      let letters = [];
      let i = 0;
      words = textInput.split(' ');
      for(i=0; i<words.length; i++) {
        letters = words[i].split('');
        if (letters[0] === "#") {
          words[i] = '<b style="color: #1da1f2">'+words[i]+'<b>'
        }
      }
      this.comment = (words.join(' '));
      console.log(words.join(' '));
    }
  },
};
</script>

<style scoped>
.test {
  color: #1da1f2;
}
</style>