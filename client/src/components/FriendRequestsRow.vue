<template>
  <div class="tile is-6 is-parent">
    <div class="card" v-for="c in requests" :key="c.i">
      <friend-requests-card :card="c" />
    </div>
  </div>
</template>

<script>
import FriendRequestsCard from "./FriendRequestsCard.vue";
import Session from "../services/session";
export default {
  components: {
    FriendRequestsCard,
  },
  data: () => ({
    Session,
    requests: [],
  }),
  mounted() {
    this.requests = this.Session.user.friendRequests
  },
};
</script>

<style>
</style>