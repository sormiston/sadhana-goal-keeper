<template>
  <div class="container">
    <step-card
      v-for="step in steps"
      :key="step.dateTime"
      :title="step.title"
      :dateTime="step.dateTime"
      :timeSpecific="step.timeSpecific"
      :durational="step.durational"
      :hoursDuration="step.hoursDuration || null"
      :minutesDuration="step.minutesDuration || null"
      :status="step.status"
      :track="step.track"
      :goalId="step.goalId"
      :description="step.description"
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
    }
  },
  created() {
    this.getTodaysSteps();
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