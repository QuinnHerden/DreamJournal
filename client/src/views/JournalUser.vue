<template>
  <section :key="updateKey" class="section">
    <div class="container is-secondary">
      <div class="card">
        <!-- <div class="card-content is-flex"> -->
        <section>
          <p class="content"><b>Selected:</b> {{ selected }}</p>
          <!-- <o-field label="Find a JS framework"> -->
          <o-autocomplete
            rounded
            expanded
            v-model="name"
            :data="filteredDataArray"
            placeholder="e.g. @Quinn"
            icon="search"
            clearable
            @select="(option) => (selected = option)"
          >
            <template v-slot:empty>No results found</template>
          </o-autocomplete>
          <button @click="dataUp" class="button is-primary is-rounded">
            Search
          </button>
          <button @click="search" class="button is-primary is-rounded">
            Enter
          </button>
          <!-- </o-field> -->
        </section>

        <!-- <form @submit.prevent="Search"> -->
        <!-- <input
            class="input is-rounded is-focused"
            type="text"
            placeholder="enter a user you'd like to find"
            v-model="query"
          /> -->
        <!-- </form> -->
        <!-- </div> -->
      </div>
    </div>

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
                {{ user.description }}
              </p>
              <p class="subtitle is-6">
                <button @click="friend" class="button is-light">
                  {{ friendStatus }}
                </button>
              </p>
            </div>
          </div>

          <div class="content">
            <p></p>
          </div>
          <journals @refresh="refresh"></journals>
        </div>
      </div>
    </div>
    <!-- <div class="section"> -->

    <!-- </div> -->
  </section>
</template>

<script>
import Journals from "../components/Journals.vue";
import Session from "../services/session";
import { GetByHandle, Search, GetUsers } from "../services/users";

export default {
  components: { Journals },
  data: () => ({
    Session,
    user: Session.user,
    updateKey: 0,
    friendStatus: "Send Request",
    query: null,
    data: [""],
    name: "",
    selected: null,
    temp: [],
  }),
  async mounted() {
    this.temp = await GetUsers("@");
    this.data = this.temp.map(function (item) {
      return item["handle"];
    });
    this.refresh();
  },
  methods: {
    async dataUp() {
      this.temp = await GetUsers(this.name);
      this.data = this.temp.map(function (item) {
        return item["handle"];
      });
    },
    async refresh() {
      // await this.dataUp()
      // console.log(this.data)
      this.user = await GetByHandle(this.Session.foreign);
      this.Session.journal = "user";
      this.updateKey += 1;
    },
    async friend() {
      this.Session.addFriend(this.user.handle, this.Session.user.handle);
    },
    async search() {
      try {
        const response = await Search(this.name);
        if (!response.handle) {
          throw "We can't find that user";
        } else if (!response.visible) {
          throw "There are no visible users with that handle";
        }
        this.Session.foreign = response.handle;
      } catch (error) {
        Session.Error(error);
      }

      this.refresh();
    },
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>


<style>
</style>