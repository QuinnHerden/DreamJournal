<template>
  <journals @refresh="refresh" :key="updateKey"></journals>
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