<template>
  <div class="tile is-6 is-parent">
      <friend-requests-card></friend-requests-card>
      <friend-requests-card></friend-requests-card>
      <friend-requests-card></friend-requests-card>
  </div>
</template>

<script>
import FriendRequestsCard from "./FriendRequestsCard.vue";
export default {
  components: { FriendRequestsCard },
};
</script>

<style>
</style>