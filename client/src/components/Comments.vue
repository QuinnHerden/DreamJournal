<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="avatar" alt="Avatar" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <router-link to="">{{ handle }}</router-link>
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
  data: () => ({author: null, avatar: null, handle: null,}),
  async mounted() {
    this.author = await GetByHandle(this.comment.userHandle);
    this.avatar = this.author.avatar
    this.handle = this.author.handle
  },
};
</script>

<style>
</style>