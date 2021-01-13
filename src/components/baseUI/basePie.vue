<template>
  <div class="pie-chart-wrapper">
    <Chart
      type="pie"
      :data="chartData"
      :options="options"
      :width="width"
      :height="height"
      ref="chart"
    />
  </div>

</template>

<script>
import Chart from "primevue/chart";
export default {
  props: {
    chartData: {
      type: Object,
      required: true
    },
  
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

  components: {
    Chart
  },
  mounted() {
    console.log(this.$refs.chart);
  }
};
</script>

<style scoped>
.pie-chart-wrapper {
  margin: 0 auto;
}
</style>


