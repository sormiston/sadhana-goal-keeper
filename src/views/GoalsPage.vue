<template>
  <div class="container">
    <div class="page-title"><span>My goals</span></div>
<<<<<<< HEAD
    <div class="search-create-row">
        <search-bar/>
    </div>
    <div>
        <base-pill category="all"></base-pill>
        <base-pill category="health"></base-pill>
        <base-pill category="education"></base-pill>
    </div>
</div>
<goals-index></goals-index>
=======
    <goals-index></goals-index>
  </div>
>>>>>>> 3299a20d7a38181ecb1efbc6efed07cfb7f05fe9
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

@media screen and (min-width: 767px) {
  .page-title {
    font-size: 26px;
  }
}
</style>

<script>
import GoalsIndex from "../components/GoalsIndex.vue";
import SearchBar from '../components/SearchBar.vue';
export default {
<<<<<<< HEAD
    components: {
        BasePill,
        GoalsIndex,
        SearchBar,
    },
}
=======
  components: {
    GoalsIndex
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  }
};
>>>>>>> 3299a20d7a38181ecb1efbc6efed07cfb7f05fe9
</script>
