<template>
  <div class="container">
    <div class="page-title"><span>My goals</span></div>
    <goals-index></goals-index>
  </div>
</template>

<style scoped>
.top-options {
  padding-left: 14px;
}

</style>

<script>
import GoalsIndex from "../components/GoalsIndex.vue";

export default {
  emits: ['pathComponentLoaded'],
  components: {
    GoalsIndex
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },
  mounted() {
    this.$emit('pathComponentLoaded')
  }
};
</script>
