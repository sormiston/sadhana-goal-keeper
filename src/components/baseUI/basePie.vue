<template>
  <Chart
    type="pie"
    :data="chartData"
    :options="options"
    :width="width"
    :height="height"
    ref="chart"
  />
  <small>{{ dateTime }}</small>
</template>

<script>
import Chart from "primevue/chart";
export default {
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
  props: {
    chartData: {
      type: Object,
      required: true
    },
    dateTime: {
      type: null,
      required: false
    }
  },
  components: {
    Chart
  },
  mounted() {
    console.log(this.$refs.chart);
  }
};
</script>


