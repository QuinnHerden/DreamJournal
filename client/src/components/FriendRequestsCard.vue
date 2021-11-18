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
    <router-link to="" class="tile is-child">{{ card.name }}</router-link>
    <div class="tile is-parent">
      <div class="tile is-child">
        <button @click="$emit('accept')" class="button is-outlined">
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
        </button>
      </div>
      <div class="tile is-child">
        <button @click="$emit('reject')" class="button is-outlined">
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { GetByHandle } from "../services/users";

export default {
  props: {
    card: Object,
  },
  data: () => ({author: null, avatar: null, handle: null,}),
  async mounted() {
    this.author = await GetByHandle(this.card.name);
    this.avatar = this.author.avatar
    this.handle = this.author.handle
  },
};
</script>

<style>
</style>