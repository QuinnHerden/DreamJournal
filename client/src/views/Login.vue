<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form class="box" @submit.prevent="login">
              <div class="field">
                <label for="" class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    type="text"
                    placeholder="@username"
                    class="input"
                    required
                    v-model="handle"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="***********"
                    class="input"
                    required
                    v-model="password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field">
                <button class="button is-primary">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Session from "../services/session";
export default {
  data: () => ({
    Session,
    handle: null,
    password: null
  }),
  methods: {
    async login() {
      this.Session.Login(this.handle, this.password);
      if (this.Session.user && this.Session.toRoute) {
        this.$router.push(this.Session.toRoute);
      } else if (this.Session.user) {
        this.$router.push('/journal');
      }
    },
  },
};
</script>

<style>
</style>