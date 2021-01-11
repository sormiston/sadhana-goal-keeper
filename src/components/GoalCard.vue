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
                <span v-if="goalTotalMonths>0">{{ goalTotalMonths }} months</span>
                <span v-if="goalTotalMonths==0">{{ goalTotalDays }} days</span>
            </div>
            <div>
                <span>@ </span>
                <span>{{ goalCycle }}</span>
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
        "cycle",
        "cycleDaysOfWeek",
        "cycleDayOfMonth",
        "cycleOnceMonthlyDay",
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
        },
        goalCycle() {
            var cycle = ""; 
            switch (this.cycle) {
                case "Daily": 
                    cycle = this.cycle; 
                    break; 
                case "Weekly": 
                    var i; 
                    for (i=0; i<this.cycleDaysOfWeek.length; i++) {
                        cycle += this.cycleDaysOfWeek[i];
                        if (i!=this.cycleDaysOfWeek.length-1) cycle += ", ";
                    }
                    break; 
                case "Monthly": 
                    cycle = this.cycleDayOfMonth + this.cycleOnceMonthlyDay + 'of each month'
                    break; 
                default: 
                    cycle = this.cycle; 
                    break; 
            }
            return cycle; 
        }
    }
};
</script>
