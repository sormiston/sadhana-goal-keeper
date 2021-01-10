<template>
    <div class='unfilled-progress'>
        <div class='filled-progress'></div>
    </div>
</template>

<style scoped>
.unfilled-progress {
    background-color: #E3E3E3; 
    height: 5px; 
};

.filled-progress {
    background-color: #E95992; 
};

</style>

<script>
export default {
    data() {
        return {

        };
    },
    props: {
        percent: {
            type: Number,
            default: 0,
            required: true,
            validator: val => val >= 0 && val <= 100
        },
    },
    computed: {
        progress() {
            return 0.75; 
        },
        filledColor() {
            var fillColor = new SolidColor;
            fillColor.rgb.hexValue = "E95992"; 
            return fillColor; 
        }
    },
    methods: {

    }
};
</script>