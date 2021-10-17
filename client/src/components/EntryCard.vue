<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <a @click="openIllustration">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Dream Illustration"
                  />
                </a>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ title }}</p>
              <p class="subtitle is-6">
                <router-link to="/profile">{{ author }}</router-link>
              </p>
            </div>
          </div>

          <div class="content">
            <p>
              <time datetime="2016-1-1">{{ datePublished }}</time>
            </p>

            <div v-for="desc in description" :key="desc">
              {{ desc }}
            </div>

            <p></p>

            <div v-for="tag in tags" :key="tag">
              {{ tag }}
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Share</a>
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>

    <comments></comments>

    <entry-card-modal></entry-card-modal>
  </section>
</template>

<script>
import Comments from "./Comments.vue";
import EntryCardModal from './EntryCardModal.vue';
export default {
  components: { Comments, EntryCardModal },
  data: () => {
    return {
      title: "Dream Title",
      author: "John Smith",
      datePublished: "11:09 PM - 1 Jan 2016",
      description: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in .",
      ],
      tags: ["#list", "#of", "#tags"],
      image: null,
      EntryCardModal,
    };
  },
  methods: {
    openIllustration() {
      this.EntryCardModal.methods.toggle();
    }
  }
};
</script>

<style>
</style>