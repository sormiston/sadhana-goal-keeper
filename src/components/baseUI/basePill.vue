<template>
  <div :style="styleObject" v-on:click="emitTrack">{{ track }}</div>
</template>


<script>
export default {
  props: {
    track: String,
    color: String,
    selected: [String, Array],
  },
  emits: ["update:track"],
  computed: {
    styleObject() {
      if (this.selected === this.track || this.selected.includes(this.track)) {
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
    emitTrack() {
      this.$emit("update:track", this.track);
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
  cursor: pointer;
}

@media screen and (min-width: 767px) {
  div {
    font-size: 16px;
  }
}
</style>