<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img class="is-rounded" :src="user.avatar" alt="Avatar" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-2">{{ user.handle }}</p>
              <p class="subtitle is-4">
                Joined <time datetime="2016-1-1">{{ user.dateCreated }}</time>
              </p>
              <p class="subtitle is-6">
                {{ user.description }}
              </p>

              <p class="subtitle is-6">
                <router-link class="button is-light" to="/editprofile">Edit Profile</router-link>
              </p>
              
            </div>
          <div class="content">
          </div>

          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="card">
        <div class="card-content">
          <p class="title is-6">
                Stats
              </p>
              <p class="subtitle is-6">
                Total dreams logged: {{ dreamCount }}
              </p>
              <p class="subtitle is-6">
                Total words written: {{ wordCount }}
              </p>
              <p class="subtitle is-6">
                Total likes received: {{ likeCount }}
              </p>
              <p class="subtitle is-6">
                Total comments received: {{ commentCount }}
              </p>
        </div>
      </div>
    </div>

    <friends-list :key="updateKey"></friends-list>

    <friend-requests :key="updateKey" @refresh="refresh"></friend-requests>
  </section>
</template>

<script>
import Session from "../services/session";
import FriendRequests from "../components/FriendRequests.vue";
import FriendsList from "../components/FriendsList.vue";
import { GetWall } from '../services/posts';
import { GetByHandle } from '../services/users';
export default {
  components: { FriendRequests, FriendsList },
  data: () => ({
    user: Session.user,
    updateKey: 0,
    dreamCount: 0,
    wordCount: 0,
    likeCount: 0,
    commentCount: 0,
  }),
  mounted() {
    this.stats()
    this.refresh()
  },
  methods: {
    async refresh() {
      this.user = await GetByHandle(this.user.handle)
      this.updateKey += 1;
    },
    async stats() {
      const posts = await GetWall(this.user.handle)
      // console.log(posts)
      this.dreamCount = posts.length
      
      for (let i=0; i<posts.length; i++) {
        this.wordCount += posts[i].description.split(" ").length
        this.likeCount += posts[i].likes.length
        this.commentCount += posts[i].comments.length
      }
    }
  },
};
</script>

<style>
</style>