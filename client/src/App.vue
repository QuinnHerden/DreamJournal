<template>
  <Nav />
  <!-- <messages /> -->
  <router-view />
</template>

<style lang="scss">
</style>

<script>
import "../public/mystyles.scss";
// import Messages from "./components/Messages.vue";
import Nav from "./components/Nav";
export default {
  components: {
    Nav,
    // Messages,
  },
};
</script>