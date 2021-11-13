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
                  :src="user.pic"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-2">{{ user.handle }}</p>
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
              {{ user.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Session from "../services/session";
export default {
      data: ()=> ({
        user: Session.user,
    })
};
</script>

<style>
</style>