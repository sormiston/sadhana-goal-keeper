<template>
  <base-card title="Steps done per day">
    <base-pie
      v-for="object in chartData"
      :key="object"
      :chartData="object"
      
    ></base-pie>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      chartData: [
        {
          datasets: [
            {
              data: [1, 2],
              backgroundColor: ["#6E34EA", "#E3E3E3"],
              borderWidth: 0
             
            }
          ]
        }
      ],
      
    };
  }
};
</script>

<style scoped>
.num {
  position: relative;
  top: 55px;
  right: 175px;
  font-size: 2rem;
  color: var(--orange);

  background-color: transparent;
  z-index: 1;
}
</style>