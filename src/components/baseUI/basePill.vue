<template>
  <div :style="styleObject" v-on:click="emitCategory">{{ category }}</div>
</template>


<script>
export default {
  props: ["category", "color", "selected", "mode"],
  emits: ["update:category"],
  computed: {
    styleObject() {
      if (this.selected === this.category) {
        return {
          "background-color": `var(${this.color})`,
          color: "#fff"
        };
      } else {
        return {
          "background-color": "#fff",
          border: `1px solid var(${this.color})`,
          color: `var(${this.color})`
        };
      }
    }
  },
  methods: {
    emitCategory() {
      this.$emit("update:category", this.category);
    }
  }
};
</script>


<style scoped>
div {
  padding: 3px 15px 3px 15px;
  border-radius: 30px;
  display: inline-block;
  font-size: 12px;
  margin: 2px 2px 2px 2px;
  font-weight: 600;
  border-style: solid;
  border-width: 1px;
}

@media screen and (min-width: 767px) {
  div {
    font-size: 16px;
  }
}
</style>