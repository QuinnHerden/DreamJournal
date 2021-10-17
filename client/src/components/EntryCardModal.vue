<template>
  <div class="modal is-clipped" :class="{ 'is-active': Active }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
      </p>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="toggle"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Active: true,
      Src: null,
    };
  },
  methods: {
    toggle() {
      this.Active = !this.Active;
      console.log(this.Active);
    },
  },
};
</script>

<style>
</style>