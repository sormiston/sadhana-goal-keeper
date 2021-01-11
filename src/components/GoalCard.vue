<template>
<base-card :title="title">
    <template #default>
        <p>{{ description }}</p>
    </template>
    <template #icons>
        <div>
            <div v-if="!this.noDuration">
                <span>@ </span>
                <span v-if="this.durationHours!=null && this.durationHours>0">{{this.durationHours}} hours </span>
                <span v-if="this.durationMinutes!=null && this.durationMinutes>0">{{ this.durationMinutes }} minutes</span>
            </div>
            <div>
                <span>@ </span>
                <span v-if="goalTotalMonths>0">{{goalTotalMonths}} months</span>
                <span v-if="goalTotalMonths==0">{{goalTotalDays}} days</span>
            </div>
            <div>
                <span>@ </span>
                <span>Monday, Wednesday, Friday</span>
            </div>
            <div>
                <span>@ </span>
                <span>{{ this.track }}</span>
            </div>
        </div>
    </template>
    <template #progressBar>
        <progress-bar :track="this.track" :totalSteps="this.totalSteps" :stepsComplete="this.stepsCompleted"></progress-bar>
    </template>
</base-card>
</template>

<script>
import ProgressBar from './ProgressBar.vue';
import dayjs from "dayjs";
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
        goalTotalMonths() {
            const startDate = dayjs(String(this.startDate));
            const endDate = dayjs(String(this.endDate));
            return endDate.diff(startDate, 'month');
        },
        goalTotalDays() {
            const startDate = dayjs(String(this.startDate));
            const endDate = dayjs(String(this.endDate));
            return endDate.diff(startDate, 'day');
        }
    }
};
</script>
