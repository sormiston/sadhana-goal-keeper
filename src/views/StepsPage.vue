<template>
  <div class="container">
    <div class="page-title"><span>Today's Tasks</span></div>
    <steps-index></steps-index>
  </div>
</template>

<script>
import StepsIndex from '../components/StepsIndex.vue'
export default {
  components: {
    StepsIndex
  }
}
</script>