<template>
  <div class="unfilled-progress">
    <div
      class="filled-progress"
      :style="{ width: progress, backgroundColor: `var(${trackColor})` }"
    ></div>
  </div>
</template>

<style scoped>
.unfilled-progress {
  background-color: #e3e3e3;
  height: 5px;
  border-radius: 2.5px;
}

.filled-progress {
  border-radius: 2.5px 0px 0px 2.5px;
  height: 100%;
}
</style>

<script>
export default {
  props: ["track", "totalSteps", "stepsComplete"],
  computed: {
    tracks() {
      return this.$store.getters.tracks;
    },
    trackColor() {
      let color;
      this.tracks.forEach((track) => {
        if (track.name === this.track) color = track.color;
      });
      return color;
    },
    progress() {
      return (this.stepsComplete / this.totalSteps) * 100 + "%";
    }
  },
  methods: {}
};
</script>