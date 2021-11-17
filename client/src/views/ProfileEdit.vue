<template>
  <section class="section">
    <div class="container">
<form action="" class="box" @submit.prevent="update">

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

        <form-badge></form-badge>
      </form>
    </div>
  </section>
</template>

<script>
import FormBadge from "../components/FormBadge.vue";
import Session from "../services/session";
import { Update } from "../services/users";

export default {
  components: { FormBadge },
  data: () => ({
    handle: null,
    password: null,
    firstName: null,
    lastName: null,
    visible: null,
    avatar: null,
    description: null,
    Session,
  }),
  methods: {
    async update() {
      const id = this.Session.user._id;
      let edit = {};
      console.log(edit);
      if (this.firstName) {
        edit.firstName = this.firstName;
      }
      if (this.lastName) {
        edit.lastName = this.lastName;
      }
      if (this.visible) {
        edit.visible = this.visible;
      }
      if (this.avatar) {
        edit.avatar = this.avatar;
      }
      if (this.description) {
        edit.description = this.description;
      }

      this.Session.toRoute = "/profile"
      const response = await Update(id, edit);
      this.Session.Login(response.handle, response.password)
    },
  },
};
</script>

<style>
</style>