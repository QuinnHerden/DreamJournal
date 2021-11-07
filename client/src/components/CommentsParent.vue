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
          <router-link :to="'/profile/' + author">{{ author }}</router-link>
          <br />{{ reply }}<br />
          <!-- <small><router-link to="">Reply</router-link></small> -->
        </p>
      </div>
    <!-- <comments-child></comments-child> -->
    </div>
  </article>
</template>

<script>
// import CommentsChild from './CommentsChild.vue';
import { GetByHandle } from "../services/users";
import { GetById } from '../services/comments'
export default {
  // components: { CommentsChild },
  data: () => ({
    
  }),
    created: function () {
      this.owner = GetByHandle("@JewPaltz"),
      this.comment = GetById("0"),

      this.author = this.owner.handle,
      this.reply = this.comment.reply,
      this.datePublished = this.comment.published
    },
};
</script>

<style>
</style>