<template>
<div class="card">
    <div class="task-row">
        <div class="task-info">
            <div class="task-title">{{title}}</div>
            <div class="task-subtitle">{{subtitle}}</div>
        </div>
        <div class="task-time-info">
            <div class="time-title">Estimated time</div>
            <div class="goal-duration">
                <span v-if="hoursDuration!=0" class="hours-duration">{{hoursDuration}} hrs</span>
                <span v-if="minutesDuration!=0" class="minutes-duration">{{minutesDuration}} mins</span>
            </div>
        </div>
    </div>
    <div class="clock-container">
        <clock :timer="clockDisplay" :duration="durationInMinutes"/>
        <div class='button-row'>
            <circular-button :type="pauseOrPlayButton" v-on:click="pressPlayPause"/>
            <circular-button type="stop" v-on:click="pressStop"/>
        </div>
    </div>
</div>
</template>

<style scoped>
.card {
    display: none;
}

@media screen and (min-width: 1080px) {
    .card {
        display: inline-block;
        background-color: white;
        width: 100%;
        height: 80vh;
        margin-right: 118px;
        box-shadow: 10px 10px 40px rgba(216, 216, 216, 0.25);
        border-radius: 15px;
        padding: 2% 1% 1% 3%;
    }

    .task-row {
        display: flex;
        justify-content: space-between;
    }

    .task-info {
        width: 60%;
    }

    .task-time-info {
        width: 25%
    }

    .task-title {
        font-size: 42px;
        font-weight: bold;
        color: var(--primary);
    }

    .time-title {
        color: var(--primary);
        font-size: 12px;
    }

    .goal-duration {
        color: var(--primary);
        font-size: 42px;
        font-weight: bold;
    }

    .clock-container {
        padding: 5%;
        width: 100%;
    }

    .button-row {
        padding: 3%;
        display: flex;
        justify-content: space-evenly;
    }
}
</style>

<script>
import Clock from './Clock.vue';
import CircularButton from './CircularButton.vue';
import dayjs from 'dayjs';
export default {
    data() {
        return {
            clockDisplay: '',
            timeStarted: null,
            secondsEllapsed: 0,
        };
    },
    components: {
        Clock,
        CircularButton
    },
    computed: {
        title() {
            return "Learn VueJS";
        },
        subtitle() {
            return "Complete today's Jira tickets, and allocate tasks for tomorrow"
        },
        hoursDuration() {
            return 1;
        },
        minutesDuration() {
            return 0;
        },
        durationInMinutes() {
            const minutesInHour = 60;
            return this.hoursDuration * minutesInHour + this.minutesDuration;
        },
        pauseOrPlayButton() {
            if (this.timeStarted == null) return "play";
            return "pause";
        }
    },
    methods: {
        time() {
            const millisecondsInSecond = 1000;
            let dateNow = dayjs();
            this.secondsEllapsed = Math.floor(parseInt(dateNow.diff(this.timeStarted), 'second') / millisecondsInSecond);
            if (this.timeStarted == null) this.secondsEllapsed = 0;
            this.clockDisplay = this.formatClockDisplay();
            setInterval(this.time, millisecondsInSecond);
        },
        pressPlayPause() {
            this.timeStarted = dayjs();
        },
        pressStop() {
            this.timeStarted = null;
        },
        formatClockDisplay() {
            const minutesInHour = 60;
            const zeroPad = (num, places) => String(num).padStart(places, '0');
            let minutes = Math.floor(this.secondsEllapsed / minutesInHour);
            let seconds = this.secondsEllapsed - minutes * minutesInHour;
            return zeroPad(minutes, 2) + ':' + zeroPad(seconds, 2);
        },
    },
    ready: function () {
        this.timer();
        this.interval = setInterval(function () {
            this.timer();
        }.bind(this), 1000);
    },
    mounted: function () {
        this.time()
    },
    beforeUnmount: function () {
        clearInterval(this.interval);
    }
}
</script>
