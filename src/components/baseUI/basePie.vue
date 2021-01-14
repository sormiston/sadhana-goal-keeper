<template>
  <img v-if="freeDay" src="../../assets/bike.png" />
  <Chart
    v-else
    type="pie"
    :data="pooledData"
    :options="options"
    :width="width"
    :height="height"
    style="width: '50px'"
    ref="chart"
  />
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
      width: 50,
      height: 50,
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
  },
  mounted() {
    console.log(this.chartData[0]);
  }
};
</script>

<style scoped>
img {
  height: 50px;
  width: 50px;
}
.p-chart {
  height: 60px;
  display: flex;
  justify-content: center;
}
</style>


