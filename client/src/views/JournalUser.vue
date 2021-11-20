<template>
<journals @refresh="refresh" :key="updateKey"></journals>
</template>

<script>
import Journals from '../components/Journals.vue'
export default {
  components: { Journals },
  data: () => ({
  updateKey: 0
  }),
  methods: {
    refresh() {

      this.updateKey += 1
    }
  }

}
</script>


<style>

</style>