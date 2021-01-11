<template>
<base-card :title="title">
    <template #default>
        <p>{{ description }}</p>
    </template>
    <template #icons>
        <div>
            <div v-if="!this.noDuration">
                <span>@</span>
                <span v-if="this.durationHours!=null && this.durationHours>0">{{this.durationHours}} hours </span>
                <span v-if="this.durationMinutes!=null && this.durationMinutes>0">{{ this.durationMinutes }} minutes</span>
            </div>
            <div>
                <span>@</span>
                <span>3 months</span>
            </div>
            <div>
                <span>@</span>
                <span>Monday, Wednesday, Friday</span>
            </div>
            <div>
                <span>@</span>
                <span>{{ this.track }}</span>
            </div>
        </div>
    </template>
    <template #progressBar>
        <progress-bar :track="this.track" :totalSteps="2" :stepsComplete="1"></progress-bar>
    </template>
</base-card>
</template>

<script>
import ProgressBar from './ProgressBar.vue';
// import MenuIcon from 'vue-material-design-icons/Menu.vue';
export default {
    components: {
        ProgressBar,
        // MenuIcon
    },
    props: [
        "key",
        "title",
        "track",
        "description",
        "noDuration",
        "durationMinutes",
        "durationHours",
        "totalSteps",
        "stepsCompleted",
        "startDate",
        "endDate",
    ],
    computed: {

    }
};
</script>
