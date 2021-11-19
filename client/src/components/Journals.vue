<template>
  <div class="container">
    <div class="post" v-for="(p, i) in posts" :key="p._id">
      <entry-card :post="p" @remove="remove(p, i)" @Like="like(p)" />
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
import EntryCard from "./EntryCard.vue";
import { Delete, GetAll, Like, GetWall } from "../services/posts";
export default {
  components: {
    EntryCard,
  },
  data: () => ({
    Session,
    posts: [],
    user: null,
  }),
  async mounted() {
    this.user = this.Session.user;

    if (this.Session.journal == "personal") {
      this.posts = await GetWall(this.Session.user.handle);
    // } else if (this.Session.journal == "friend") {
    // } else if (this.Session.journal == "user") {
    // } else if (this.Session.journal == "tag") {
    } else {
      this.posts = await GetAll();
    }
    this.posts.reverse();
  },
  methods: {
    async remove(post, i) {
      // console.log({ post });
      const response = await Delete(post._id);
      if (response.deleted) {
        this.posts.splice(i, 1);
      }
    },
    async like(post) {
      // console.log(this.user._id)
      const info = {
        postId: post._id.toString(),
        userId: this.user._id.toString(),
      };
      const response = await Like(info);
      console.log(response);
    },
  },
};
</script>

<style>
</style>