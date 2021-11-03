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
                    class="input is-success"
                    type="text"
                    placeholder="Text input"
                    v-model="handle"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </div>
                <p class="help is-success">This handle is available</p>
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
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </div>
                <p class="help is-danger">
                  Password must contain eight characters
                </p>
              </div>

              <div class="field">
                <div class="control">
                  <label for="" class="label">Account Visibility</label>
                  <label class="radio">
                    <input
                      type="radio"
                      name="visibility"
                      checked
                      v-model="visibility"
                    />
                    Public
                  </label>
                  <label class="radio">
                    <input type="radio" name="visibility" v-model="visibility" />
                    Private
                  </label>
                </div>
              </div>

              <div class="field">
                <label class="label">Profile Picture</label>
                <div class="file">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume" />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label"> Choose a file… </span>
                    </span>
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
import { Add } from "../services/users"

export default {
  data: () => ({
    handle: null,
    password: null,
    visibility: null,
    picture: null,
    Session,
  }),
  methods: {
    signup() {
      Add({
        handle: this.handle,
        password: this.password,
        visibility: this.visibility,
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo3I5GL9_Zd_LULXRIXTzRLlVESBnoGp8sw&usqp=CAU',
      });
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