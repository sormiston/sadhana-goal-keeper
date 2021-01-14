<template>
<div class="card">
    <div class="task-row">
        <div class="task-info">
            <div class="task-title">{{title}}</div>
            <div class="task-subtitle">{{description}}</div>
        </div>
        <div v-if="showDurationEstimate" class="task-time-info">
            <div v-if="durational" class="time-title">Estimated time</div>
            <div class="goal-duration">
                <span v-if="hoursDuration!=null&&hoursDuration!=0" class="hours-duration">{{hoursDuration}} hrs</span>
                <span v-if="minutesDuration!=null&&minutesDuration!=0" class="minutes-duration">{{minutesDuration}} mins</span>
            </div>
        </div>
    </div>
    <div class="clock-container">
        <clock :timer="clockDisplay" :duration="durationInMinutes" :durational="durational"/>
        <div class='button-row'>
            <circular-button :type="pauseOrPlayButton" v-on:click="pressPlayPause"/>
            <circular-button type="stop" v-on:click="pressStop"/>
        </div>
    </div>
</div>
</template>

<script>
import Clock from './Clock.vue';
import CircularButton from './CircularButton.vue';
import dayjs from 'dayjs';
export default {
    props: [
        "title", 
        "description",
        "hoursDuration",
        "minutesDuration",
        "durational"
    ],
    data() {
        return {
            clockDisplay: '',
            pauseOrPlayButton: "play",
            timeStarted: null,
            secondsEllapsed: 0,
            pausedSecondsEllapsed: null,
            timePaused: null,
            secondsPaused: 0,
        };
    },
    components: {
        Clock,
        CircularButton
    },
    computed: {
        durationInMinutes() {
            const minutesInHour = 60;
            return this.hoursDuration * minutesInHour + this.minutesDuration;
        },
        showDurationEstimate() {
            return this.durational
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
            if (this.pauseOrPlayButton == 'play') this.pressPlay();
            else this.pressPause();
        },
        pressPlay() {
            console.log(this.minutesDuration)
            if (this.timeStarted == null) {
                this.timeStarted = dayjs();
            }
            this.pauseOrPlayButton = 'pause';
        },
        pressPause() {
            this.pausedSecondsEllapsed = this.secondsEllapsed;
            this.timePaused = dayjs();
            this.pauseOrPlayButton = 'play';
        },
        pressStop() {
            this.timeStarted = null;
            this.pausedSecondsEllapsed = 0;
            this.pauseOrPlayButton = 'play';
        },
        formatClockDisplay() {
            const minutesInHour = 60;
            const zeroPad = (num, places) => String(num).padStart(places, '0');
            var minutes = 0;
            var seconds = 0;
            if (this.pauseOrPlayButton == 'pause') {
                minutes = Math.floor(this.secondsEllapsed / minutesInHour);
                seconds = this.secondsEllapsed - minutes * minutesInHour;
            } else {
                minutes = Math.floor(this.pausedSecondsEllapsed / minutesInHour);
                seconds = this.pausedSecondsEllapsed - minutes * minutesInHour;
            }
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
        margin-right: 30px;
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
        font-size: 32px;
        font-weight: bold;
        line-height: 1.0;
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