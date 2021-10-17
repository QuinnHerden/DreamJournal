<template>
  <div id="friend_requests" class="container">
    <div class="card">
      <header class="card-header"  @click="toggle">
        <p class="card-header-title">({{ count }}) Friend Requests</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-up" aria-hidden="false"></i>
          </span>
        </button>
      </header>

      <div class="card-content" :class="{ 'is-hidden': hidden }">
        <div class="media">
          <div class="media-content"></div>
        </div>
        <div class="content">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">
              <friend-requests-row></friend-requests-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FriendRequestsRow from "./FriendRequestsRow.vue";
export default {
  components: { FriendRequestsRow },
  data() {
    return {
      count: 3,
      hidden: false,
    };
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style>
</style>