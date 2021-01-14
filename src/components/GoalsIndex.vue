<template>
  <div class="md-inline-flex">
    <base-pill
      track="All"
      color="--primary"
      :selected="passFilter"
      @update:track="updateFilter"
    ></base-pill>
    <base-pill
      v-for="track in tracks"
      :key="track.name"
      :track="track.name"
      :color="track.color"
      :selected="passFilter"
      @update:track="updateFilter"
    ></base-pill>
  </div>
  <div v-if="!goalsLoading && filteredGoals.length === 0">
    <p v-if="passFilter === 'All'">
      No scheduled goal tasks today! Go have an ice cream bar!
    </p>
    <p v-else>No scheduled goal steps under that criteria today.</p>
  </div>
  <div class="goals">
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
  </div>
</template>

<script>
import GoalCard from "./GoalCard.vue";
import BasePill from "../components/baseUI/basePill.vue";
export default {
  components: {
    GoalCard,
    BasePill
  },
  props: [
    "searchFilteredGoals",
    "parentLoaded"
  ],
  data() {
    return {
      goalsLoading: false,
      passFilter: "All"
      
    };
  },
  computed: {
    tracks() {
      return this.$store.getters.tracks;
    },
    filteredGoals() {
      // filter logic TODO - return all for now
      if (!this.parentLoaded) return this.$store.getters["goals/goals"]
      const goals = this.searchFilteredGoals
      if (this.passFilter === "All") return goals;
      return goals.filter((goal) => this.passFilter.includes(goal.track));
    }
  },
  methods: {
    async getUserGoals() {
      this.goalsLoading = true;
      await this.$store.dispatch("goals/getUserGoals");
      this.goalsLoading = false;
    },
    updateFilter(track) {
      console.log(this.searchFilteredGoals)
      if (track === "All") this.passFilter = "All";
      else if (this.passFilter === "All") {
        this.passFilter = [track];
      } else if (!this.passFilter.includes(track)) {
        this.passFilter.push(track);
      } else {
        const idx = this.passFilter.indexOf(track);
        this.passFilter.splice(idx, 1);
        if (this.passFilter.length === 0)
          setTimeout(() => (this.passFilter = "All"), 1500);
      }
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
@media screen and (min-width: 767px) {
  .goals {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
@media screen and (min-width: 1000px) {
  .goals {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>