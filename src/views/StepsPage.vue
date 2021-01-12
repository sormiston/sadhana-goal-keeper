<template>
  <div class="container">
    <div class="page-title"><span>Today's Tasks</span></div>
    <steps-index></steps-index>
  </div>
</template>

<script>
import StepsIndex from '../components/StepsIndex.vue'
export default {
  emits: ['pathComponentLoaded'],
  components: {
    StepsIndex
  },
  mounted() {
    this.$emit('pathComponentLoaded')
  }
}
</script>