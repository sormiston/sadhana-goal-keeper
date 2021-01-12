<template>
  <div class="container">
    <step-card
      v-for="step in steps"
      :key="step.id"
      :title="step.title"
      :dateTime="step.dateTime"
      :timeSpecific="step.timeSpecific"
      :durational="step.durational"
      :hoursDuration="step.hoursDuration || null"
      :minutesDuration="step.minutesDuration || null"
      :status="step.done"
      :track="step.track"
      :goalId="step.goalId"
      :description="step.description"
      :id="step.id"
    >
    </step-card>
  </div>
</template>


<script>
import StepCard from "./StepCard.vue";
export default {
  components: {
    StepCard
  },
  data() {
    return {
      stepsLoading: false
    };
  },
  computed: {
    steps() {
      return this.$store.getters["steps/steps"];
    }
  },
  methods: {
    async getTodaysSteps() {
      this.stepsLoading = true;
      await this.$store.dispatch("steps/getTodaysSteps");
      this.stepsLoading = false;
      console.log(this.steps[0]);
    }
  },
  created() {
    this.getTodaysSteps();
  },
  mounted() {
    this.$store.dispatch('goals/getUserGoals')
  }
};
</script>

<style scoped>
header {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
}
</style>