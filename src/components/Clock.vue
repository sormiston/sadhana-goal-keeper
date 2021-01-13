<template>
    <div class="clock">
        <div class="timer-text-box">
            <div class="timer-time-text">{{timer}}</div>
            <div class="ellapsed-label">ellapsed</div>
        </div>
    </div>
</template>

<style scoped>
.clock {
    width: 368px; 
    height: 368px; 
    margin: auto;
    background-color: white; 
    border-radius: 189px;
    box-shadow: -15px -15px 15px rgba(243, 243, 243, 0.25), 30px 30px 30px rgba(180, 180, 180, 0.25);
}
.timer-text-box {
    padding-top: 140px;
    text-align: center;
}
.timer-time-text {
    font-size: 42px;
    font-weight: bold;
}
</style>

<script>
export default {
    computed: {
        timer() {
            return "00:44:32";
        }
    }
}
</script>