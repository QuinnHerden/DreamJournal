<template>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-primary">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light" @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>