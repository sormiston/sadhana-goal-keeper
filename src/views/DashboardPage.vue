<template>
  <div class="container">
    <div class="top-options">
      <div class="page-title"><span>Dashboard</span></div>
      <div class="cards">
        <steps-by-category-card />
      </div>
      <div class="flex">
        <div class="done-per-day container">
          <steps-done-per-day-pie-card></steps-done-per-day-pie-card>
        </div>
      </div>
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
  max-width: 700px;
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

