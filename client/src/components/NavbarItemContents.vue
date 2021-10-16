<template>
  <div class="buttons" v-if="!Session.user">
    <router-link class="button is-primary" to="/signup">
      <strong>Sign up</strong>
    </router-link>
    <router-link class="button is-light" to="/login"> Log in </router-link>
  </div>

  <div class="buttons" v-else>
    <router-link class="button is-primary" to="/entry">
      <strong>New entry</strong>
    </router-link>
    <router-link class="button is-light" to="/profile"> Profile </router-link>
  </div>
</template>

<script>
import Session from "../services/session";

export default {
  data() {
    return {
      Session,
    };
  },
  methods: {},
  computed: {
  },
};
</script>

<style>
</style>