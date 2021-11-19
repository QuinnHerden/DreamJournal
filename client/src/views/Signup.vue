<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">

            <form action="" class="box" @submit.prevent="signup">
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="@username"
                    v-model="handle"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>
              
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
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
                <label class="label">First Name</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="John"
                    v-model="firstName"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-info-circle"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Last Name</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Smith"
                    v-model="lastName"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-info-circle"></i>
                  </span>
                </div>
              </div>


              <div class="field">
                <div class="control">
                  <label for="" class="label">Account Visibility</label>
                  <label class="radio">
                    <input
                      type="radio"
                      name="visibility"
                      checked
                      v-model="visible"
                      v-bind:value="true"
                    />
                    Public
                  </label>
                  <label class="radio">
                    <input
                      type="radio"
                      name="visibility"
                      v-model="visible"
                      v-bind:value="false"
                    />
                    Private
                  </label>
                </div>
              </div>

              <div class="field">
                <button class="button is-primary">Sign up</button>
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
import { Add } from "../services/users";

export default {
  data: () => ({
    handle: null,
    password: null,
    firstName: null,
    lastName: null,
    visible: null,
    Session,
  }),
  methods: {
    async signup() {
      await Add({
        handle: this.handle,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        visible: this.visible,
      })
            
      this.Session.Login(this.handle, this.password);
      if (this.Session.user) {
        this.$router.push("/journal/global");
      }
    },
  },
};
</script>

<style>
</style>