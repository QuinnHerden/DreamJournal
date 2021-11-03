<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <!-- <div class="card-image">
          <figure class="image is-4by3">
            <img :src="this.image" :alt="this.image_alt" />
          </figure>
        </div> -->
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  :src="author_profile_src"
                  alt="profile picture of {{author}}"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ title }}</p>
              <p class="subtitle is-6">
                <router-link to="/profile">{{ author }}</router-link>
              </p>
            </div>
          </div>

          <div class="content">
            <p>
              <time datetime="2016-1-1">{{ datePublished }}</time>
            </p>

            <div v-for="desc in description" :key="desc">
              {{ desc }}
            </div>

            <p></p>

            <div v-for="tag in tags" :key="tag">
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
import { Get } from "../services/posts";
import { GetByHandle } from "../services/users";
import Comments from "./Comments.vue";
export default {
  components: { Comments },
  data: () => {
    return {
      id: 0,
    };
  },
  created: function () {
    this.author = Get(this.id).user_handle;
    this.author_profile_src = GetByHandle(this.author).pic;
    this.title = Get(this.id).caption;
    this.datePublished = Get(this.id).time;
    this.description = Get(this.id).description;
    this.tags = Get(this.id).tags;
  },
};
</script>

<style>
</style>