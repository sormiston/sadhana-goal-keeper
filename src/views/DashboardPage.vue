<template>
  <div class="top-options">
    <div class="page-title"><span>Dashboard</span></div>
    <div class="container">
      <steps-by-category-card />
      <steps-done-per-day-pie-card />
    </div>
  </div>
</template>

<script>
import StepsDonePerDayPieCard from "../components/dashboard/StepsDonePerDayPieCard.vue";
import StepsByCategoryCard from "../components/dashboard/StepsByCategoryCard.vue";
export default {
  emits: ["pathComponentLoaded"],
  components: {
    StepsDonePerDayPieCard,
    StepsByCategoryCard
  },
  mounted() {
    this.$emit("pathComponentLoaded");
  }
};
</script>
<style scoped>
.container {
  max-width: 590px;
}

.container > * {
  margin: 1rem 0;
}
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

