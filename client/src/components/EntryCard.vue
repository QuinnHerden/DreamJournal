<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  :src="author_pic"
                  alt="profile picture of {{post.user_handle}}"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ post.caption }}</p>
              <p class="subtitle is-6">
                <router-link to="/profile">{{ post.user_handle }}</router-link>
              </p>
            </div>
          </div>

          <div class="content">
            <p>
              <time datetime="2016-1-1">{{ post.time }}</time>
            </p>

            <div v-for="desc in post.description" :key="desc">
              {{ desc }}
            </div>

            <p></p>

            <div v-for="tag in post.tags" :key="tag">
              {{ tag }}
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Share</a>
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>

    <comments></comments>
  </section>
</template>

<script>
import Comments from "./Comments.vue";
import { GetByHandle } from "../services/users";
export default {
  components: { Comments },
  props: {
    post: Object,
  },
  data: () => ({
    
  }),
  created: function () {
    this.author_pic = GetByHandle(this.post.user_handle).pic
  },
};
</script>

<style>
</style>