<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ Author }}</strong>
          <br />{{ Comment }}<br />
          <small><a>Like</a> · <a>Reply</a></small>
        </p>
      </div>

      <comments-child></comments-child>
    </div>
  </article>
</template>

<script>
import CommentsChild from "./CommentsChild.vue";
export default {
  components: { CommentsChild },
  data() {
    return {
      Author: "Barbara_Nicely",
      Comment: "Nice dream! That sounds super cool.",
      Likes: 0,
      DatePub: "1 Jan 2016 - 11:09 PM",
    };
  },
};
</script>

<style>
</style>