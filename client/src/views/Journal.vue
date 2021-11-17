<template>
  <div class="container">
    <div class="post" v-for="(p, i) in posts" :key="p._id">
      <entry-card :post="p" @remove="remove(p, i)" @like="like(p, i)"/>
    </div>

  </div>
</template>

<script>
import EntryCard from "../components/EntryCard.vue";
import { Delete, GetAll } from "../services/posts";
export default {
  components: {
    EntryCard,
  },
  data: () => ({
    posts: []
  }),
  async mounted(){
    this.posts = await GetAll()
  },
   methods: {
        async remove(post, i){
            console.log({post})
            const response = await Delete(post._id)
            if(response.deleted){
                this.posts.splice(i, 1)
            }
        },
        like(post, i){
          console.log("liked", i);
        }
    }
};
</script>

<style>
</style>