<template>
  <div class="md-inline-flex">
    <base-pill
      category="All"
      color="--primary"
      :selected="passFilter"
      @update:category="updateFilter"
    ></base-pill>
    <base-pill
      v-for="category in categories"
      :key="category.name"
      :category="category.name"
      :color="category.color"
      :selected="passFilter"
      @update:category="updateFilter"
    ></base-pill>
  </div>
  <div v-if="!goalsLoading && filteredGoals.length === 0">
    <p v-if="passFilter === 'All'">
      No scheduled goal tasks today! Go have an ice cream bar!
    </p>
    <p v-else>No scheduled goal steps under that criteria today.</p>
  </div>
  <goal-card
    v-for="goal in filteredGoals"
    :key="goal.id"
    :title="goal.title"
    :track="goal.track"
    :description="goal.description"
    :noDuration="goal.noDuration"
    :durationMinutes="goal.durationMinutes"
    :durationHours="goal.durationHours"
    :totalSteps="goal.totalSteps"
    :stepsCompleted="goal.stepsComplete"
    :startDate="goal.startDate"
    :endDate="goal.deadline"
    :cycle="goal.cycle"
    :cycleDaysOfWeek="goal.cycleDaysOfWeek"
    :cycleDayOfMonth="goal.cycleDayOfMonth"
    :cycleOnceMonthlyDay="goal.cycleOnceMonthlyDay"
  >
  </goal-card>
</template>

<style scoped>
@media screen and (min-width: 767px) {
  
}
</style>

<script>
import GoalCard from "./GoalCard.vue";
import BasePill from "../components/baseUI/basePill.vue";
export default {
  components: {
    GoalCard,
    BasePill
  },
  data() {
    return {
      goalsLoading: false,
      passFilter: "All"
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    filteredGoals() {
      // filter logic TODO - return all for now
      const goals = this.$store.getters["goals/goals"];
      if (this.passFilter === "All") return goals;

      return goals.filter((goal) => this.passFilter.includes(goal.track));
    }
  },
  methods: {
    async getUserGoals() {
      this.goalsLoading = true;
      await this.$store.dispatch("goals/getUserGoals");
      this.goalsLoading = false;
      console.log(this.$store.getters["goals/goals"][0]);
    },
    updateFilter(category) {
      if (category === "All") this.passFilter = "All";
      else if (this.passFilter === "All") {
        this.passFilter = [category];
      } else if (!this.passFilter.includes(category)) {
        this.passFilter.push(category);
      } else {
        const idx = this.passFilter.indexOf(category);
        this.passFilter.splice(idx, 1);
        if (this.passFilter.length === 0)
          setTimeout(() => (this.passFilter = "All"), 750);
      }
      console.log(this.passFilter);
    }
  },
  created() {
    this.getUserGoals();
  }
};
</script>

<style scoped>
.md-inline-flex {
  justify-content: flex-start;
}
</style>