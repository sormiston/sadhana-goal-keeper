<template>
<div class="container">
    <div class="page-title"><span>Today's Tasks</span></div>
    <div class="flex">
        <div class="index-container">
            <steps-index @eventtriggered="performAction"></steps-index>
        </div>
        <clock-card
            :title="title"
            :description="description"
            :hoursDuration="hoursDuration"
            :minutesDuration="minutesDuration"
            :durational="durational"
        ></clock-card>
    </div>
</div>
</template>

<script>
import StepsIndex from "../components/StepsIndex.vue";
import ClockCard from "../components/ClockCard.vue";
export default {
    emits: ["pathComponentLoaded"],
    components: {
        StepsIndex,
        ClockCard
    },
    data() {
        return {
            title: '',
            description: '',
            hoursDuration: '',
            minutesDuration: '',
            durational: false,
        }
    },
    mounted() {
        this.$emit("pathComponentLoaded");
        this.$el.addEventListener("clicked", () => this.onClickChild)
    },
    methods: {
        performAction(value) {
            this.title = value.title
            this.description = value.description
            this.hoursDuration = value.hoursDuration
            this.minutesDuration = value.minutesDuration
            this.durational = value.durational
        }
    }
};
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
}

.index-container {
    width: 100%;
    margin-right: 35px;
}

.detail-container {
    display: none;
    flex-basis: 792px;
    height: 756px;
}

@media screen and (min-width: 1080px) {
    .index-container {
        max-width: 346px;
    }

    .detail-container {
        display: block;
    }
}
</style>
