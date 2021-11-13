<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  :src="userAvatar"
                  alt="Avatar"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ post.title }}</p>
              <p class="subtitle is-6">
                <router-link :to="'/profile/' + post.userHandle">{{
                  post.userHandle
                }}</router-link>
              </p>
            </div>
          </div>

          <div class="content">
            <p>
              <time datetime="2016-1-1">{{ post.dateOccured }}</time>
            </p>

            <div class="description">{{ post.description }}</div>

            <p></p>
            <div>
              <a v-for="tag in post.tags" :key="tag">
                #{{ tag }} 
              </a>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <router-link class="card-footer-item" to="">Share</router-link>
          <router-link class="card-footer-item" to="">Edit</router-link>
          <router-link class="card-footer-item" to="">Delete</router-link>
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
  data: () => ({}),
  created: function () {
    this.userAvatar = GetByHandle(this.post.userHandle).pic;
  },
};
</script>

<style>
</style>