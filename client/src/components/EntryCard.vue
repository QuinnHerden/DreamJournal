<template>
  <section class="section" :class="{ 'is-hidden': !visible}">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="userAvatar" alt="Avatar" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ post.title }}</p>
              <p class="subtitle is-6">
                <router-link to="">{{ post.userHandle }}</router-link>
              </p>
            </div>
          </div>

          <div class="content">
            <p>
              <time datetime="2016-1-1">{{ post.dateOccured }}</time>
            </p>

            <div class="description">{{ post.description }}</div>

            <p></p>
            <div>
              <router-link to="" v-for="tag in post.tags" :key="tag">
                #{{ tag }}
              </router-link>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <router-link class="card-footer-item" to="">Share</router-link>
          <router-link
            class="card-footer-item"
            to=""
            @click="$emit(actionEmit)"
            >{{ actionString }}</router-link
          >
          <!-- <router-link class="card-footer-item" to="">Delete</router-link> -->
        </footer>
      </div>
    </div>

    <div id="comments" class="container">
      <div class="card">
        <header class="card-header" @click="toggle">
          <a class="card-header-title">({{ count }}) Comments</a>
          <button class="card-header-icon is-active" aria-label="more options">
            <span class="icon">
              <i
                class="fas"
                :class="{ 'fa-angle-up': !hidden, 'fa-angle-down': hidden }"
                aria-hidden="true"
              ></i>
            </span>
          </button>
        </header>
        <div class="card-content" :class="{ 'is-hidden': hidden }">
          <div class="comment" v-for="c in commentsArr" :key="c._id">
            <comments :comment="c" /> <br />
          </div>

          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img :src="avatar" />
              </p>
            </figure>
            <div class="media-content">
              <form @submit.prevent="addComment">
                <div class="field">
                  <p class="control">
                    <textarea
                      class="textarea"
                      placeholder="Add a comment..."
                      v-model="text"
                    ></textarea>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-primary">Post comment</button>
                  </p>
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Comments from "./Comments.vue";
import Session from "../services/session";
import { GetByHandle } from "../services/users";
import { addComment } from "../services/posts";
// import Comments from './Comments.vue';
export default {
  components: { Comments },
  props: {
    post: Object,
  },
  data: () => ({
    hidden: true,
    commentsArr: [],
    count: null,
    user: Session.user,
    actionString: null,
    text: null,
  }),
  created() {
    this.commentsArr = this.post.comments;
    this.count = this.commentsArr.length;
    this.userAvatar = GetByHandle(this.post.userHandle).avatar;
    this.avatar = this.user.avatar;
    if (this.post.userHandle == this.user.handle) {
      this.actionString = "Delete";
      this.actionEmit = "remove";
    } else {
      this.actionString = "Like";
      this.actionEmit = "like";
    }
    if (!this.post.visible && (this.post.userHandle != this.user.handle)) {
    // if (this.post.visible) {
      console.log(this.post.visible)
      this.visible = false;
    } else {
      this.visible = true;
    }
  },
  methods: {
    async addComment() {
      const comment = { userHandle: this.user.handle, text: this.text };
      await addComment(this.post._id, comment);
      this.commentsArr.push(comment);
      this.count = this.commentsArr.length;
    },
    toggle() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style>
</style>