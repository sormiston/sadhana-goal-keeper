<template>
<div class="card">
    <span>Steps done by category</span>
    <!-- <Chart type="bar" :data="basicData" :options="options" /> -->
    <div class="chart">
        <div class="data-row" v-for="(track, index) in tracks" v-bind:key="index">
            <div class="row-category">
                <span>{{track.name}}</span>
            </div>
            <div class="empty-bar">
                <div 
                    class="filled-bar" 
                    :style="{backgroundColor: `var(${track.color})`, width: `${(25*(index+85)) % 90}%`}">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.card {
    padding: 10px 15px;
    font-weight: bold;
    font-size: 16px;
    display: block;
}

.data-row {
    display: flex;
    margin: 20px 0px;
}

.row-category {
    font-weight: normal;
    font-size: 12px;
    color: var(--primary);
    width: 20%;
}

.empty-bar {
    width: 80%;
    height: 22px;
    border-radius: 20px;
    background-color: transparent;
}

.filled-bar {
    width: 100%;
    /* data */
    height: 100%;
    background-color: var(--pink);
    border-radius: 20px;
}
</style>

<script>
// import Chart from 'primevue/chart';
export default {
    components: {
        // Chart
    },
    data() {
        return {
        }
    },
    computed: {
        tracks() {
            return this.$store.getters.tracks;
        },
        trackData() {
            let proportion;
            this.tracks.forEach((track) => {
                if (track.name == this.track) proportion = track.color;
            });
            console.log(proportion);
            return proportion;
        },
        getData(index) {
            return index;
        }
    }
}
</script>
