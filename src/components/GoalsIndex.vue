<template>
<p v-if="goalsLoading">LOADING...</p>
<ul>
  <li v-for="goal in filteredGoals" :key="goal.id">
    <p>{{ goal.title}}</p>
    <p>{{ goal.track }}</p>
    <p>{{ goal.description }}</p>
    <p>...</p>
    </li>
</ul>

</template>

<script>
export default {
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