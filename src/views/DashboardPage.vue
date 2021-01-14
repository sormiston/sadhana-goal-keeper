<template>
  <div class="container">
    <div class="top-options">
      <div class="page-title"><span>Dashboard</span></div>
      <div class="flex">
        <div class="done-per-day container">
          <steps-done-per-day-pie-card></steps-done-per-day-pie-card>
        </div>
      </div>
    </div>
  </div>
  <div class="cards">
    <steps-by-category-card/>
  </div>
</template>

<script>
import StepsDonePerDayPieCard from "../components/dashboard/StepsDonePerDayPieCard.vue";
export default {
  emits: ["pathComponentLoaded"],
  components: {
    StepsDonePerDayPieCard
  },
   mounted() {
    this.$emit("pathComponentLoaded");
  }
};
</script>
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

