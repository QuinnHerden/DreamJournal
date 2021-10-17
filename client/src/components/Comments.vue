<template>
  <div id="comments" class="container">
    <div class="card">
      <header class="card-header" @click="toggle">
        <p class="card-header-title">({{ count }}) Comments</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-up" :aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div class="card-content" :class="{ 'is-hidden': hidden }">
        <comments-parent></comments-parent>

        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea
                  class="textarea"
                  placeholder="Add a comment..."
                ></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button">Post comment</button>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import CommentsParent from "./CommentsParent.vue";
export default {
  components: { CommentsParent },
  data() {
    return {
      hidden: true,
      count: 3,
    };
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style>
</style>