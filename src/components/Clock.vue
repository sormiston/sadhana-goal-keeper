<template>
    <div class="clock">
        <Knob 
            v-model="percentage" 
            :strokeWidth="strokeWidth"
            :valueTemplate="timer"
            valueColor="#18C2A3"
            rangeColor="#DADADA"
            :size="375"
            textColor="black"
            :showValue=false 
            :readOnly=false
            :change="onChange"/>
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
    margin-top: -390px;
}
.timer-time-text {
    font-size: 64px;
    font-weight: bold;
}
.p-knob {
    font-weight: bold;
}
.ellapsed-label {
    font-size: 16px;
    color: var(--primary);
}
</style>

<script>
import Knob from 'primevue/knob';
export default {
    data(){
      return{

      }
    },
    props: [
        "timer",
        "duration",
        "durational"
    ],
    components: {
        Knob,
    },
    computed: {
        percentage() {
            const secondsInMinute = 60;
            let totalTimeInSeconds = this.duration * secondsInMinute; 
            let minutes = parseInt(this.timer.substring(0,2));
            let seconds = parseInt(this.timer.substring(3));
            let timeInSeconds = seconds + minutes * secondsInMinute;
            if (!this.durational) {
                return (timeInSeconds % 60) / secondsInMinute * 100
            }
            return Math.min(timeInSeconds / totalTimeInSeconds * 100, 100);
        },
        strokeWidth() {
          return 1
        }
    },
    methods:{
        onChange(value) {
            console.log(value);
        } 
    }
}
</script>