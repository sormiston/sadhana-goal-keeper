<template>
  <div class="wrapper">
    <base-card :title="title" @click="doEvent">
      <template #default>
        <p>{{ description }}</p>
      </template>
      <template v-if="durational" #icons>
        <span class="goal-info-icon"><alarm/></span>
        <span v-if="hoursDuration">{{ hoursDurationDisplay }}</span>
        <span v-if="minutesDuration">{{ minutesDurationDisplay }}</span>
      </template>
      <template #markDone>
        <button :class="buttonConditionalStyling" @click="markDone">
          {{ checkOrX }}
        </button>
      </template>
    </base-card>
  </div>
</template>

<script>
import { Alarm } from 'mdue';
export default {
  components: {
    Alarm
  },
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
    "description",
    "id"
  ],
  data() {
    return {
      localStatus: this.status
    };
  },
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
      if (this.localStatus) return "✔";
      else return "✘";
    },
    buttonConditionalStyling() {
      return {
        "button--notDone": !this.localStatus,
        "button--done": this.localStatus
      };
    }
  },
  methods: {
    markDone() {
      if (this.localStatus) return;
      this.$store.dispatch("steps/markDone", {
        goalId: this.goalId,
        id: this.id
      });
      this.localStatus = true;
    },
    doEvent() { 
      this.$emit('eventtriggered', {
        title: this.title, 
        description: this.description, 
        hoursDuration: this.hoursDuration, 
        minutesDuration: this.minutesDuration, 
        durational: this.durational
      }) 
    }
  }
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
  cursor: pointer;
}
p {
  margin: 0;
}
.button--notDone {
  color: var(--red);
}

.button--done {
  color: var(--green);
}
.wrapper {
  flex-shrink: 0;
  margin: 0 auto;
}
@media screen and (min-width: 1080px) {
.wrapper {
  height: 106px;
  width: 346px;
  margin-right: 1rem;
}
}
</style>