<template>
  <div class="is-parent is-vertical has-text-centered box">
    <div class="tile is-child">
      <figure class="image is-48x48 is-inline-block">
        <img
          class="is-rounded"
          :src="avatar"
          alt="Avatar"
        />
      </figure>
    </div>
    <router-link to="/journal/user" class="tile is-child" @click="goUser(card.name)">{{ card.name }}</router-link>
  </div>
</template>

<script>
import { GetByHandle } from "../services/users";
import Session from "../services/session";

export default {
  props: {
    card: Object,
  },
  data: () => ({author: null, avatar: null, handle: null, Session}),
  async mounted() {
    this.author = await GetByHandle(this.card.name);
    this.avatar = this.author.avatar
    this.handle = this.author.handle
  },
  methods: {
    goUser(userHandle) {
      this.Session.foreign = userHandle
      this.Session.journal = 'user'
    }
  }
};
</script>

<style>
</style>