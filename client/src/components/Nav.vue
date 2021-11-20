<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo.png" width="112" height="28" />
      </router-link>

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
          <router-link class="navbar-link" to="/journal/global">
            Journals
          </router-link>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/journal/global">
              Global
            </router-link>
            <router-link
              class="navbar-item"
              to="/journal/user">
            Users
            </router-link>
            <router-link class="navbar-item" to="/journal/personal">
              Personal
            </router-link>
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
// import Vue from "../../node_modules/@vue/";

export default {
  components: {
    NavbarItemContents,
  },
  data() {
    return {
      Session,
      isActive: false,
    };
  },
  methods: {
    journal(type) {
      // this.Session.journal = type;
      console.log(type);
    },
  },
};
</script>

<style>
</style>