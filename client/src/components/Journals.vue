<template>
  <div class="container">
    <div class="post" v-for="(p, i) in posts" :key="p._id">
      <entry-card :post="p" @refresh="refresh()" @remove="remove(p, i)" />
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
import EntryCard from "./EntryCard.vue";
import { Delete, GetAll, GetWall, GetTags } from "../services/posts";
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
    } else if (this.Session.journal == "user") {
      this.posts = await GetWall(this.Session.foreign);
    } else if (this.Session.journal == "tag") {
      this.posts = await GetTags(this.Session.tag);
    } else if (this.Session.journal == "global") {
      this.posts = await GetAll();
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
    refresh() {
      this.$emit("refresh");
    },
  },
};
</script>

<style>
</style>