<template>
    <div class='circular-button'>
        <play v-if="showPlay"/>
        <pause v-if="showPause"/>
        <square v-if="showStop"/>
    </div>
</template>

<style scoped>
.circular-button {
    width: 70px;
    height: 70px;
    border-radius: 35px; 
    background-color:white;
    border: 2px solid var(--primary);
    font-size: 30px;
    color: var(--primary);
    text-align: center;
    padding-top: 15px;
}
.circular-button:hover {
    background-color: var(--primary);
    color: white;
    cursor: pointer;
}
</style>

<script>
import {Play, Pause, Square} from 'mdue';
export default {
    props: [
        "type"
    ],
    components: {
        Play,
        Pause,
        Square,
    },
    computed: {
        showPlay() {
            if (this.type == "play") return true;
            return false;
        },
        showPause() {
            if (this.type == "pause") return true;
            return false;
        },
        showStop() {
            if (this.type == "stop") return true;
            return false;
        }
    }
}
</script>