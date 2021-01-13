<template>
  <div class="top-options">
    <div class="page-title"><span>Dashboard</span></div>
  </div>
  <div class="cards">
    <steps-by-category-card/>
  </div>
</template>

<style scoped>
.top-options {
  padding-left: 14px;
}
.page-title {
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 5px;
}
.cards {
  margin: 0px 15px;
}

@media screen and (min-width: 767px) {
  .page-title {
    font-size: 26px;
  }
}
</style>

<script>
import StepsByCategoryCard from '../components/StepsByCategoryCard.vue';
export default {
  emits: ["pathComponentLoaded"],
  components: {
    StepsByCategoryCard
  },
  mounted() {
    this.$emit("pathComponentLoaded");
  }
};
</script>
