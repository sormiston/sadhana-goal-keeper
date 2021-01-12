<template>
<div class='top-options'>
    <div class="page-title"><span>Today's tasks</span></div>
</div>
<steps-index></steps-index>
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
import StepsIndex from "../components/StepsIndex.vue";
export default {
    components: {
        StepsIndex,
    },
}
</script>
