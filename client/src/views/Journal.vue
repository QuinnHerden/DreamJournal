<template>
  <entry-card></entry-card>
  <entry-card></entry-card>
</template>

<script>
import Session from "../services/session";
import EntryCard from "../components/EntryCard.vue";

export default {
  components: {
    EntryCard,
  },
  data() {
    return {
      Session,
    };
  },
};
</script>

<style>
</style>