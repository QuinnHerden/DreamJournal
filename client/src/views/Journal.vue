<template>
  <div class="container">
    <div class="post" v-for="p in posts" :key="p.src">
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
    posts: GetAll(),
  }),
};
</script>

<style>
</style>