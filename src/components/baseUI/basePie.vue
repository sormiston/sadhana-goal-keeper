<template>
  <div v-if="freeDay" class="img-wrapper">
    <img src="../../assets/bike.png" />
  </div>
  <div v-else>
    <Chart
      type="doughnut"
      :data="pooledData"
      :options="options"
      :width="width"
      :height="height"
      ref="chart"
    />
    <span class="readout">{{ chartData[0] }}/{{chartData[0] + chartData[1]}}</span>
  </div>
</template>

<script>
import Chart from "primevue/chart";
export default {
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      width: 60,
      height: 60,
      options: {
        responsive: false,
        animation: {
          animateRotate: true
        },
        tooltips: {
          enabled: false
        }
      }
    };
  },
  computed: {
    pooledData() {
      const data = this.chartData;
      return {
        datasets: [
          {
            data,
            backgroundColor: ["#6E34EA", "#E3E3E3"],
            borderWidth: 0
          }
        ]
      };
    },
    freeDay() {
      return this.chartData.every((val) => val === 0);
    }
  },

  components: {
    Chart
  }
};
</script>

<style scoped>
.img-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 42px;
  width: 42px;
}
.p-chart {
  height: 60px;
  display: flex;
  justify-content: center;
}
.readout {
  position: relative;
  display: inline-block;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
  font-weight: 700;
  
}
</style>


