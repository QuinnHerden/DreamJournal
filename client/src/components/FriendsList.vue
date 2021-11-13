<template>
  <div id="friends" class="container">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Friends</p>
          </div>
        </div>

        <div class="content is-flex is-flex-wrap-wrap	">
          <div class="card is-flex flex-wrap" v-for="c in friends" :key="c.i">
            <friends-list-card :card="c" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
import FriendsListCard from "./FriendsListCard.vue";
export default {
  components: { FriendsListCard },
  data() {
    return {
      Session,
      friends: [],
    };
  },
  mounted() {
    this.friends = this.Session.user.friendList;
  },
};
</script>

<style>
</style>