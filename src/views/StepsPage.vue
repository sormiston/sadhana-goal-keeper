<template>
<div class='top-options'>
    <div class="page-title"><span>Today's tasks</span></div>
</div>
<div class="main-content-row">
    <steps-index></steps-index>
    <clock-card></clock-card>
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
    .main-content-row {
        display: flex; 
    }
}
</style>

<script>
import StepsIndex from "../components/StepsIndex.vue";
import ClockCard from "../components/ClockCard.vue";
export default {
    components: {
        StepsIndex,
        ClockCard
    },
}
</script>
