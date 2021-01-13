<template>
<base-card :title="title">
    <template #default>
        <p>{{ description }}</p>
    </template>
    <template #icons>
        <div class="goal-time-info">
            <div>
                <div v-if="!this.noDuration">
                    <span class="goal-info-icon">
                        <alarm /></span>
                    <span v-if="this.durationHours!=null && this.durationHours>0">{{this.durationHours}} hours </span>
                    <span v-if="this.durationMinutes!=null && this.durationMinutes>0">{{ this.durationMinutes }} minutes</span>
                </div>
                <div>
                    <span class="goal-info-icon">
                        <clock /></span>
                    <span v-if="goalTotalMonths>0">{{ goalTotalMonths }} months</span>
                    <span v-if="goalTotalMonths==0">{{ goalTotalDays }} days</span>
                </div>
            </div>
            <div>
                <div>
                    <span class="goal-info-icon">
                        <repeat /></span>
                    <span>{{ goalCycle }}</span>
                </div>
                <div>
                    <span class="goal-info-icon">
                        <tag /></span>
                    <span>{{ this.track }}</span>
                </div>
            </div>
        </div>
    </template>
    <template #progressBar>
        <progress-bar :track="this.track" :totalSteps="this.totalSteps" :stepsComplete="this.stepsCompleted"></progress-bar>
    </template>
</base-card>
</template>

<style>
.goal-info-icon {
    padding-right: 3px;
    font-size: 15px;
}

@media only screen and (max-width: 600px) {
    .goal-time-info {
        display: flex;
    }

    .goal-time-info div {
        flex: 50%;
    }

    .goal-info-icon {
        padding-right: 3px;
        font-size: 12px;
    }
}
</style>

<script>
import ProgressBar from './ProgressBar.vue';
import dayjs from "dayjs";
import {
    Alarm,
    Clock,
    Repeat,
    Tag
} from 'mdue';
export default {
    components: {
        ProgressBar,
        Alarm,
        Clock,
        Repeat,
        Tag
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
                    for (i = 0; i < this.cycleDaysOfWeek.length; i++) {
                        cycle += this.cycleDaysOfWeek[i];
                        if (i != this.cycleDaysOfWeek.length - 1) cycle += ", ";
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
