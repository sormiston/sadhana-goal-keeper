<template>
<div class='top-options'>
    <div class="page-title"><span>My goals</span></div>
    <div>
        <base-pill category="all"></base-pill>
        <base-pill category="health"></base-pill>
        <base-pill category="education"></base-pill>
    </div>
</div>
<goals-index></goals-index>
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
import BasePill from '../components/baseUI/basePill.vue';
import GoalsIndex from "../components/GoalsIndex.vue";

export default {
    components: {
        BasePill,
        GoalsIndex,
    },
}
</script>
