<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img
                  class="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-2">username</p>
              <p class="subtitle is-4">
                Joined <time datetime="2016-1-1">2020-09-30</time>
              </p>
              <p class="subtitle is-6">
                <router-link to="/editprofile">Edit Profile</router-link>
              </p>
            </div>
          </div>

          <div class="content">
            <p>
              This is the place-holder for the user's self-submitted
              description. Yaddda yadda hoo hoo! :)
            </p>
          </div>
        </div>
      </div>
    </div>

    <friend-requests></friend-requests>

    <friends-list></friends-list>
  </section>
</template>

<script>
import FriendRequests from "../components/FriendRequests.vue";
import FriendsList from "../components/FriendsList.vue";
export default {
  components: { FriendRequests, FriendsList },
};
</script>

<style>
</style>