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
          <router-link @click="setUser(handle)" to="/journal/user">{{
            handle
          }}</router-link>
          <br />{{ comment.text }}<br />
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { GetByHandle } from "../services/users";
import Session from "../services/session";

export default {
  props: {
    comment: Object,
  },
  data: () => ({ Session, author: null, avatar: null, handle: null }),
  async mounted() {
    this.author = await GetByHandle(this.comment.userHandle);
    this.avatar = this.author.avatar;
    this.handle = this.author.handle;
  },
  methods: {
    setUser(handle) {
      // this.Session.journal = "user";
      this.Session.foreign = handle;
      this.$emit("goUser");
    },
  },
};
</script>

<style>
</style>