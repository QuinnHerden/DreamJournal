<template>
  <section :key="updateKey" class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img class="is-rounded" :src="user.avatar" alt="Avatar" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-2">{{ user.handle }}</p>
              <p class="subtitle is-4">
                Joined <time datetime="2016-1-1">{{ user.dateCreated }}</time>
              </p>
              <p class="subtitle is-6">
                <button @click="friend" class="button is-primary">
                  {{ friendStatus }}
                </button>
              </p>
            </div>
          </div>

          <div class="content">
            <p>
              {{ user.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <journals @refresh="refresh"></journals>
  </section>
</template>

<script>
import Journals from "../components/Journals.vue";
import Session from "../services/session";
import { GetByHandle } from "../services/users";

export default {
  components: { Journals },
  data: () => ({
    Session,
    user: Session.user,
    updateKey: 0,
    friendStatus: "Send Request",
  }),
  async mounted() {
    this.user = await GetByHandle(this.Session.foreign);
    this.Session.journal = "user";
    this.refresh();
  },
  methods: {
    async refresh() {
      this.user = await GetByHandle(this.Session.foreign);
      this.updateKey += 1;
    },
    async friend() {
      this.Session.addFriend(this.user.handle, this.Session.user.handle);
    },
  },
};
</script>


<style>
</style>