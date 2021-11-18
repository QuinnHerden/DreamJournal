<template>
  <div id="friend_requests" class="container" :class="{ 'is-hidden': count==0 }">
    <div class="card">
      <header class="card-header" @click="toggle">
        <a class="card-header-title">({{ count }}) Friend Requests</a>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i
              class="fas"
              :class="{ 'fa-angle-up': !hidden, 'fa-angle-down': hidden }"
              aria-hidden="true"
            ></i>
          </span>
        </button>
      </header>

      <div class="card-content" :class="{ 'is-hidden': hidden }">
        <div class="media">
          <div class="media-content"></div>
        </div>
        <div class="content is-flex is-flex-wrap-wrap	">
          <div class="card is-flex flex-wrap" v-for="(c, i) in requests" :key="c.i">
            <friend-requests-card :card="c" @reject="reject(c, i)" @accept="accept(c, i)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RequestAccept, RequestReject } from "../services/users";
import Session from "../services/session";
import FriendRequestsCard from "./FriendRequestsCard.vue";

export default {
  components: {
    FriendRequestsCard,
  },
  data() {
    return {
      Session,
      requests: [],
      hidden: false,
      count: null,
    };
  },
  mounted() {
    this.requests = this.Session.user.friendRequests;
    this.count = this.requests.length;
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden;
    },
    async accept(c, i) {
      const response = await RequestAccept(this.Session.user.handle, c.name)
      console.log(response)
      this.requests.splice(i, 1)
      this.count -=1
    },
    async reject(c, i) {
      const response = await RequestReject(this.Session.user.handle, c.name)
      console.log(response)
      this.requests.splice(i, 1)
    }
  },
};
</script>

<style>
</style>