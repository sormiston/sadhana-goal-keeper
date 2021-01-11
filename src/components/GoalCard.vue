<template>
<base-card :title="title">
    <template #default>
        <p>{{ description }}</p>
    </template>
    <template #showProgressBar>
        <progress-bar ></progress-bar>
    </template>
</base-card>
</template>

<script>
import ProgressBar from './ProgressBar.vue';
export default {
  components: { ProgressBar },
  props: [
    "key",
    "title",
    "track",
    "description", 
  ],
//   computed: {
//     hasHoursDuration() {
//       return this.hoursDuration > 0;
//     },
//     hasMinutesDuration() {
//       return this.minutesDuration > 0;
//     },
//     hoursDurationDisplay() {
//       if (!this.hasHoursDuration) return null;
//       if (this.hoursDuration === 1) {
//         return `${this.hoursDuration} hour`;
//       } else {
//         return `${this.hoursDuration} hours`;
//       }
//     },
//     minutesDurationDisplay() {
//       if (!this.hasMinutesDuration) return null;
//       return `${this.minutesDuration} minutes`;
//     },
//     checkOrX() {
//       if (this.status) return '✔'
//       else return '✘'
//     },
//     buttonConditionalStyling() {
//       return { 'button--notDone': !this.status, 'button--done': this.status }
//     }
//   },
//   methods: {
//     markDone() {
//       this.$store.dispatch('steps/stepDone', { goalId: this.goalId, dateTime: this.dateTime } )
//     }
//   },
//   created() {
//     console.log(this.$props);
//   }
};
</script>