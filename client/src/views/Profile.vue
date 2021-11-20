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
          </div>

          <div class="content">
          </div>
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
export default {
  components: { FriendRequests, FriendsList },
  data: () => ({
    user: Session.user,
    updateKey: 0,
  }),
  methods: {
    refresh() {
      this.updateKey += 1;
    },
  },
};
</script>

<style>
</style>