<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" @click="home">
        <img src="../../../static/image/logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" @click="journal"> Journals </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" @click="journal"> Global </a>
            <a class="navbar-item" @click="journal"> Friends </a>
            <a class="navbar-item" @click="journal"> Personal </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <navbar-item-contents />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarItemContents from "./NavbarItemContents.vue";
import Session from "../services/session";

export default {
  components: {
    NavbarItemContents,
  },
  data() {
    return {
      Session,
    };
  },
  methods: {
    journal() {
      this.$router.push("/journal");
    },
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>