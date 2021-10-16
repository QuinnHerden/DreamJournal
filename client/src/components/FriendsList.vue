<template>
  <div id="friends" class="container">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Friends</p>
          </div>
        </div>

        <div class="content">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-12 is-parent">
              <friends-list-row></friends-list-row>
              <friends-list-row></friends-list-row>
              <friends-list-row></friends-list-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FriendsListRow from "./FriendsListRow.vue";
export default {
  components: { FriendsListRow },
};
</script>

<style>
</style>