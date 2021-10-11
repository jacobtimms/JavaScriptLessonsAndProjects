<template>
  <div id="app">
    <div>
      <div>
        <div class="wallcontainer">
          <div class="profilecard">
            <div class="profilecardhead"></div>
            <div class="profilecardimagediv">
              <img src="./assets/David.jpg" />
            </div>

            <div class="profilecardnameidcont">
              <div class="profilecardnamecont">
                <span id="profilecardname"></span>
              </div>
              <span id="profilecarduid">David Mark</span>
            </div>

            <div class="profilecardstatsdiv">
              <ul class="profilecardstatslist">
                <li class="profilecardstatslistitem">
                  <span class="dispblk">
                    <span class="statslistitemhead">Tweets</span>
                    <span id="statslistitemcount" class="statslistitemcount">
						{{tweetCount}}</span>
                  </span>
                </li>

                <li class="profilecardstatslistitem">
                  <span class="dispblk">
                    <span class="statslistitemhead">Following</span>
                    <span class="statslistitemcount">35</span>
                  </span>
                </li>

                <li class="profilecardstatslistitem">
                  <span class="dispblk">
                    <span class="statslistitemhead">Followers</span>
                    <span class="statslistitemcount">34</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="rightcontainer">
            <CommentHolder @tweetCount="tweetCount=$event"></CommentHolder>
            <div id="tweetscontainer" class="tweetscontainer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentHolder from "./components/CommentHolder";

export default {
  name: "App",
  components: {
    CommentHolder,
  },
  data() {
    return {
      tweetCount: 2,
    };
  },
  methods: {},
};
</script>

<style>
@import "./assets/index.css";
</style>
