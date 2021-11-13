<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="author.avatar" alt="Avatar" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <router-link :to="'/profile/'">{{ author.userHandle }}</router-link>
          <br />{{ comment.text }}<br />
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { GetByHandle } from "../services/users";

export default {
  props: {
    comment: Object,
  },
  data: () => ({}),
  created() {
    this.author = GetByHandle(this.comment.userHandle);
  },
};
</script>

<style>
</style>