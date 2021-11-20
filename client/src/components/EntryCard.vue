<template>
  <section class="section" :class="{ 'is-hidden': !visible }">
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
                <router-link
                  to="/journal/user"
                  @click="goUser(post.userHandle)"
                  >{{ post.userHandle }}</router-link
                >
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
              <router-link
                to="/journal/tag"
                v-for="tag in post.tags"
                :key="tag"
                @click="setTag(tag)"
              >
                #{{ tag }}
              </router-link>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <!-- <router-link class="card-footer-item" to="">Share</router-link> -->
          <router-link class="card-footer-item" to="" @click="action">{{
            actionString
          }}</router-link>
          <!-- <router-link class="card-footer-item" to="">Delete</router-link> -->
        </footer>
      </div>
    </div>

    <div id="comments" class="container">
      <div class="card">
        <header class="card-header" @click="toggle">
          <a class="card-header-title" :key="infoBar"
            >({{ commentCount }}) Comments ~ ({{ likesCount }}) Likes</a
          >
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
            <comments @goUser="goCommentUser" :comment="c" /> <br />
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
                      required
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
import { addComment, Like } from "../services/posts";
// import Comments from './Comments.vue';
export default {
  components: { Comments },
  props: {
    post: Object,
  },
  data: () => ({
    Session,
    hidden: true,
    commentsArr: [],
    commentCount: null,
    user: Session.user,
    actionString: null,
    text: null,
    visible: true,
    userAvatar: null,
    avatar: null,
    likesArr: [],
    likesCount: null,
    infoBar: 0,
  }),
  async mounted() {
    this.likesArr = this.post.likes;
    this.likesCount = this.likesArr.length;

    this.commentsArr = this.post.comments;
    this.commentCount = this.commentsArr.length;

    this.postUser = await GetByHandle(this.post.userHandle);
    this.avatar = this.user.avatar;
    this.userAvatar = this.postUser.avatar;

    if (this.post.userHandle == this.user.handle) {
      this.actionString = "Delete";
      this.actionEmit = "";
    } else {
      this.actionString = "Like";
      this.actionEmit = "like";
    }
    // if (!this.post.visible && this.post.userHandle != this.user.handle) {
    //   // if (this.post.visible) {
    //   console.log(this.post.visible);
    //   this.visible = false;
    // } else {
    //   this.visible = true;
    // }
  },
  methods: {
    async addComment() {
      const comment = { userHandle: this.user.handle, text: this.text };
      await addComment(this.post._id, comment);
      this.commentsArr.push(comment);
      this.commentCount = this.commentsArr.length;
    },
    toggle() {
      this.hidden = !this.hidden;
    },
    setTag(name) {
      // console.log(name)
      this.Session.journal = "tag";
      this.Session.tag = name;
      this.$emit("refresh");
    },
    refresh() {
      this.$emit("refresh");
    },
    goUser(userHandle) {
      this.Session.journal = "user";
      this.Session.foreign = userHandle;
      this.$emit("refresh");
    },
    goCommentUser() {
      this.Session.journal = "user";
      this.$emit("refresh");
    },
    action() {
      if (this.actionString == "Delete") {
        this.$emit("remove");
      } else {
        this.like();
      }
    },
    async like() {
      // console.log(this.user._id)
      const info = {
        postId: this.post._id.toString(),
        userId: this.user._id.toString(),
      };
      const response = await Like(info);
      this.likesArr = response.likes;
      this.likesArr.push("");
      this.likesArr.pop("");
      this.likesCount = this.likesArr.length;
      this.infoBar += 1;
      // console.log(response);
    },
  },
};
</script>

<style>
</style>