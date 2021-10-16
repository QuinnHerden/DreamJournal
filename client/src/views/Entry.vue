<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <form class="box card-content" @submit.prevent="submit">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                placeholder="09/30/2021"
                value=""
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
              ></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label for="" class="label">Visibility</label>
              <label class="radio">
                <input type="radio" name="visibility" checked />
                Public
              </label>
              <label class="radio">
                <input type="radio" name="visibility" />
                Private
              </label>
            </div>
          </div>

          <div class="field">
            <label class="label">Illustration</label>
            <div class="file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label"> Choose a file… </span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light" @click="cancel">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$router.push("/journal");
    },
    cancel() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>