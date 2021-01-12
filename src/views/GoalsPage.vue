<template>
<div class="container">
    <div class="page-title"><span>My goals</span></div>
    <div class="search-create-row">
        <search-bar />
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
    components: {
        GoalsIndex,
        SearchBar,
    },
    computed: {
        categories() {
            return this.$store.getters.categories;
        }
    }
};
</script>
