<template>
  <div class="container">
    <div class="page-title"><span>Today's Tasks</span></div>
    <steps-index></steps-index>
    <clock-card></clock-card>
  </div>
</template>

<script>
import StepsIndex from '../components/StepsIndex.vue'
import ClockCard from "../components/ClockCard.vue";
export default {
  emits: ['pathComponentLoaded'],
  components: {
    StepsIndex,
    ClockCard
  },
  mounted() {
    this.$emit('pathComponentLoaded')
  }
}
</script>

