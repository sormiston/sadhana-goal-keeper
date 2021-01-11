<template>
  <p v-if="stepsLoading">LOADING...</p>
  <ul>
    <li v-for="step in filteredSteps" :key="step.dateTime">
      <p>{{ step.title }}</p>
      <p>{{ step.track }}</p>

      <p>...</p>
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      stepsLoading: false
    };
  },
  computed: {
    filteredSteps() {
      // filter logic TODO - return all for now
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