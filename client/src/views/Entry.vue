<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <form class="box card-content" @submit.prevent="sub">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Text input"
                required
                v-model="title"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="date"
                required
                v-model="date"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-calendar"></i>
              </span>
              <span class="icon is-small is-right">
                <i class=""></i>
              </span>
            </div>
            <p class="help is-danger"></p>
          </div>

          <div class="field">
            <label class="label">Tags</label>
            <div class="control">
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="#place #your #tags"
                  rows="1"
                  v-model="tags"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Log your dream here..."
                required
                v-model="description"
              ></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label for="" class="label">Visibility</label>
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
    </div>
  </section>
</template>

<script>
import Session from "../services/session";
import FormBadge from "../components/FormBadge.vue";
import { Add } from "../services/posts";

export default {
  components: { FormBadge },
  created() {
    this.visible = true
  },
  data() {
    return {
      Session,
      FormBadge,
      user: Session.user,
      title: null,
      date: null,
      tags: null,
      description: null,
    };
  },
  methods: {
    async sub() {
      const entry = {
        userHandle: this.user.handle,
        title: this.title,
        dateOccured: this.date,
        description: this.description,
        tags: this.tags.split(" "),
        visible: this.visible
      };
      // console.log(entry)
      await Add(entry);
      this.Session.journal = 'global'
      this.$router.push("/journal/global");
    },
  },
};
</script>

<style>
</style>