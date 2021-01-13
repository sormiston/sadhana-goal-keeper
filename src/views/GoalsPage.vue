<template>
<div class="container">
    <div class="desktop-row">
        <div class="page-title"><span>My goals</span></div>
        <div class="search-create-row">
            <search-bar />
            <create-goal-button />
        </div>
    </div>
    <goals-index></goals-index>
</div>
</template>

<style scoped>
.top-options {
    padding-left: 14px;
}

.page-title {
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 5px;
}

.search-create-row {
    display: flex;
    justify-content: space-between;
}

@media screen and (min-width: 767px) {
    .page-title {
        font-size: 26px;
    }
    .desktop-row {
        display: flex;
        justify-content: space-between;
    }
}

</style>

<script>
import GoalsIndex from "../components/GoalsIndex.vue";
import SearchBar from '../components/SearchBar.vue';
import CreateGoalButton from "../components/CreateGoalButton.vue";
export default {
  emits: ['pathComponentLoaded'],
 components: {
        GoalsIndex,
        SearchBar,
        CreateGoalButton
    },
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },
  mounted() {
    this.$emit('pathComponentLoaded')
  }
};
</script>
