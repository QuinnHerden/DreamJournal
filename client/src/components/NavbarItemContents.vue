<template>
  <div class="buttons" v-if="!Session.user">
    <a class="button is-primary" @click="signup">
      <strong>Sign up</strong>
    </a>
    <a class="button is-light" @click="login"> Log in </a>
  </div>

  <div class="buttons" v-else>
    <a class="button is-primary" @click="entry">
      <strong>New entry</strong>
    </a>
    <a class="button is-light" @click="profile"> Profile </a>
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
  methods: {
    login() {
      this.$router.push("/login");
    },
    signup() {
      this.$router.push("/signup");
    },
    entry() {
      this.$router.push("/entry");
    },
    profile() {
      this.$router.push("/profile");
    },
  },
  computed: {
    name() {
      return this.Session.user.FirstName + " " + this.Session.user.LastName;
    },
  },
};
</script>

<style>
</style>