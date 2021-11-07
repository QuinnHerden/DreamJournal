<template>
  <Nav />
  <router-view />
</template>

<style lang="scss">
</style>

<script>
import '../public/mystyles.scss'
import Nav from "./components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>