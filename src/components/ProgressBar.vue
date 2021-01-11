<template>
    <div class='unfilled-progress'>
        <div class='filled-progress' :style="{width: progress}"></div>
    </div>
</template>

<style scoped>
.unfilled-progress {
  background-color: #E3E3E3; 
  height: 5px; 
  border-radius: 2.5px; 
}

.filled-progress {
  background-color: #E95992; 
  border-radius: 2.5px 0px 0px 2.5px; 
  height: 100%;
}
</style>

<script>
export default {
    data() {
        return {
            
        };
    },
    props: [
        "track",
        "totalSteps",
        "stepsComplete",
    ],
    computed: {
        progress() {
            return this.stepsComplete / this.totalSteps * 100 + '%'; 
        },
    },
    methods: {

    }
};
</script>