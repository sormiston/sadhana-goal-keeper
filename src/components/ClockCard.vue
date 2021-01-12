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
            <clock/>
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
}
</style>

<script>
import Clock from './Clock.vue';
export default {
    components: {
        Clock,
    },
    computed: {
        title() {
            return "Learn VueJS";
        },
        subtitle() {
            return "Complete today's Jira tickets, and allocate tasks for tomorrow"
        },
        hoursDuration() {
            return 2;
        },
        minutesDuration() {
            return 0;
        }
    }
}
</script>