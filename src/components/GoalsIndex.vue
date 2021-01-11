<template>
<p v-if="goalsLoading">LOADING...</p>
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
>
</goal-card>
</template>

<script>
import GoalCard from './GoalCard.vue'; 
export default {
  components: {
    GoalCard, 
  },
  data() {
    return {
      goalsLoading: false
    }
  },
  computed: {
    filteredGoals() {
      // filter logic TODO - return all for now
      return this.$store.getters['goals/goals']
    }
  },
  methods: {
   async getUserGoals() {
      this.goalsLoading = true
      await this.$store.dispatch('goals/getUserGoals')
      this.goalsLoading = false
      console.log(this.$store.getters['goals/goals'][0]);
    }
  },
  created() {
    this.getUserGoals()
  }
}
</script>