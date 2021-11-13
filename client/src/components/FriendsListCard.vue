<template>
  <div class="is-parent is-vertical has-text-centered box">
    <div class="tile is-child">
      <figure class="image is-48x48 is-inline-block">
        <img
          class="is-rounded"
          :src="userAvatar"
          alt="Avatar"
        />
      </figure>
    </div>
    <router-link to="" class="tile is-child">{{ card.name }}</router-link>
  </div>
</template>

<script>
import { GetByHandle } from "../services/users";

export default {
  props: {
    card: Object,
  },
  data: () => ({}),
  created() {
        this.userAvatar = GetByHandle(this.card.name).avatar;

  },
};
</script>

<style>
</style>