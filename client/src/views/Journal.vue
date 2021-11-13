<template>
  <div class="container">
    <div class="post" v-for="p in posts" :key="p._id">
      <entry-card :post="p" />
    </div>

  </div>
</template>

<script>
import EntryCard from "../components/EntryCard.vue";
import { GetAll } from "../services/posts";
export default {
  components: {
    EntryCard,
  },
  data: () => ({
    posts: []
  }),
  async mounted(){
    this.posts = await GetAll()
  }
};
</script>

<style>
</style>