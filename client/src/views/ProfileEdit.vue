<template>
  <section class="section">
    <div class="container">
      <form action="" class="box">
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-success"
              type="text"
              placeholder="Text input"
              value=""
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>

        <div class="field">
          <label for="" class="label">New Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              type="password"
              placeholder="***********"
              class="input"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-danger">Password must contain eight characters</p>
        </div>

        <div class="field">
          <label for="" class="label">Confirm Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              type="password"
              placeholder="***********"
              class="input"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-danger">Passwords don't match</p>
        </div>

        <div class="field">
          <div class="control">
            <label for="" class="label">Account Visibility</label>
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

        <form-badge></form-badge>
      </form>
    </div>
  </section>
</template>

<script>
import FormBadge from '../components/FormBadge.vue';
export default {
  components: { FormBadge },};
</script>

<style>
</style>