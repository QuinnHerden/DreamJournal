<template>
  <section class="section">
    <div class="container is-fccused">
      <div class="card">
        <div class="card-content">
          <journals @refresh="refresh" :key="updateKey"></journals>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Journals from "../components/Journals.vue";
import Session from "../services/session";

export default {
  components: { Journals },
  data: () => ({
    Session,
    updateKey: 0,
  }),
  mounted() {
    this.Session.journal = "global";
    this.refresh();
  },
  methods: {
    refresh() {
      this.updateKey += 1;
    },
  },
};
</script>


<style>
</style>