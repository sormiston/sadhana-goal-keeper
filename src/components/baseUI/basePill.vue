<template>
    <div :class="pillStyle" v-on:click="togglePill">{{category}}</div>
</template>

<style scoped>
div {
    padding: 3px 15px 3px 15px; 
    border-radius: 30px; 
    display: inline-block;
    font-size: 12px; 
    margin: 2px 2px 2px 2px;
    font-weight: 600;
    border-color: var(--pink);
    border-style: solid;
    border-width: 1px;
    color: var(--pink);
}

div :hover {
    background-color: red;
}

.pill-selected {
    background-color: white; 
}

.pill-deselected {
    background-color: var(--pink);
    color: white;
}

@media screen and (min-width: 767px) {
    div {
        font-size: 16px; 
    }
}
</style>

<script>
export default {
    data() {
        return {
            selected: true,
        };
    },
    props: [
        "category",
    ],
    computed: {
        pillStyle() {
            if (this.selected) return "pill-selected";
            return "pill-deselected";
        }
    },
    methods: {
        togglePill: function() {
            this.selected = !this.selected;
            console.log(this.category);
        }
    }
}
</script>