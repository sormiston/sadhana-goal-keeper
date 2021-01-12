<template>
  <base-card :title="title">
    <template #default>
      <p>{{ description }}</p>
    </template>
    <template v-if="durational" #icons>
      <span>@</span>
      <span v-if="hoursDuration">{{ hoursDurationDisplay }}</span>
      <span v-if="minutesDuration">{{ minutesDurationDisplay }}</span>
    </template>
    <template #markDone>
      <button :class="buttonConditionalStyling">{{ checkOrX }}</button>
    </template>
  </base-card>
</template>

<script>
export default {
  props: [
    "title",
    "dateTime",
    "timeSpecific",
    "durational",
    "hoursDuration",
    "minutesDuration",
    "status",
    "track",
    "goalId",
    "description"
  ],
  computed: {
    hasHoursDuration() {
      return this.hoursDuration > 0;
    },
    hasMinutesDuration() {
      return this.minutesDuration > 0;
    },
    hoursDurationDisplay() {
      if (!this.hasHoursDuration) return null;
      if (this.hoursDuration === 1) {
        return `${this.hoursDuration} hour`;
      } else {
        return `${this.hoursDuration} hours`;
      }
    },
    minutesDurationDisplay() {
      if (!this.hasMinutesDuration) return null;
      return `${this.minutesDuration} minutes`;
    },
    checkOrX() {
      if (this.status) return '✔'
      else return '✘'
    },
    buttonConditionalStyling() {
      return { 'button--notDone': !this.status, 'button--done': this.status }
    }
  },
  methods: {
    markDone() {
      this.$store.dispatch('steps/stepDone', { goalId: this.goalId, dateTime: this.dateTime } )
    }
  },
};
</script>

<style scoped>
  button {
    height: 100%;
    background-color: rgba(216, 216, 216, 0.25);
    border: none;
    min-width: 77px;
    border-radius: inherit;
    font-size: 2rem; 
  }
  
  .button--notDone {
    color: var(--red);
  }
  
  .button--done {
    color: var(--green);
  }
</style>