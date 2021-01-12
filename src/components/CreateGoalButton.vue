<template>
    <div class="button" v-on:click="createGoal">
        <span class="button-text">create</span>
    </div>
</template>

<style scoped>
.button {
    display: inline-block;
    background-color: white; 
    width: 100px;
    align-content: right;
    padding: 3px 15px 3px 15px; 
    border-radius: 30px; 
    display: inline-block;
    margin: 2px 2px 5px 2px;
    border-color: var(--primary);
    border-style: solid;
    border-width: 1px;
    box-shadow: 4px 4px 4px rgba(151, 151, 151, 0.25);
    align-content: center;
    text-align: center;
}
.button-text {
    font-size: 16px; 
    font-weight: 500;
    color: var(--primary);
    font-weight: bold;
}
</style>

<script>
import router from '../router/index.js';
export default {
    methods: {
        createGoal: function() {
            router.push('addGoal');
        }
    }
}
</script>