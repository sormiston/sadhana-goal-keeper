<template>
  <form @submit.prevent="logForm">
    <div class="form-control">
      <input id="title" type="text" placeholder="Goal" v-model.trim="title" />
    </div>
    <div class="form-control">
      <h3>Track</h3>
      <input type="radio" id="health" value="Health" v-model="track" /><label
        for="health"
        >Health</label
      >
      <input
        type="radio"
        id="learning"
        value="Learning"
        v-model="track"
      /><label for="learning">Learning</label>
      <input
        type="radio"
        id="relationships"
        value="Relationships"
        v-model="track"
      /><label for="relationships">Relationships</label>
      <input
        type="radio"
        id="self-growth"
        value="Self-Growth"
        v-model="track"
      /><label for="self-growth">Self-Growth</label>
      <input type="radio" id="work" value="Work" v-model="track" /><label
        for="work"
        >Work</label
      >
    </div>
    <div class="form-control">
      <label for="desc">Description</label>
      <textarea
        id="desc"
        cols="30"
        rows="5"
        v-model.trim="description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="start">Start</label>
      <input type="date" id="start" :min="today" v-model="startTime" />
    </div>
    <div class="form-control">
      <h3>Time</h3>
      <input type="time" id="time" min="00:00" max="24:00" :disabled="noTime" />
      <input type="checkbox" v-model="noTime" id="no-time" />
      <label for="no-time">No set time</label>
    </div>
    <div class="form-control">
      <h3>
        How much time will you spend on this goal each regular session?
        (duration)
      </h3>
      <input type="number" id="hours" max="8" /><label
        for="hours"
        :disabled="noDuration"
        >Hours</label
      >
      <input
        type="number"
        id="minutes"
        max="60"
        step="15"
        :disabled="noDuration"
      /><label for="minutes">Minutes</label>
      <input type="checkbox" id="no-duration" v-model="noDuration" />
      <label for="no-duration">No specific duration</label>
      <span @click.stop="toggleTooltip">?</span>
      <p v-if="tooltip">Helpful reminder.  <span @click="toggleTooltip">Dismiss.</span></p>
      
    </div>
    <div class="form-control">
      <h3>Cycle</h3>
      <select v-model="cycle">
        <option>Daily</option>
        <option>Weekly</option>
        <option>Monthly</option>
      </select>
      <div class="daysOfWeek" v-if="cycle !== 'Daily'">
        <select v-if="cycle === 'Monthly'" v-model="cycleDayOfMonth">
          <option>First</option>
          <option>Second</option>
          <option>Third</option>
          <option>Fourth</option>
        </select>
        <div v-if="cycle !== 'Monthly'" class="dow-checkboxes">
          <input
            type="checkbox"
            value="Monday"
            id="Monday"
            v-model="cycleDaysOfWeek"
          />
          <label for="Monday">Monday</label>
          <input
            type="checkbox"
            value="Tuesday"
            id="Tuesday"
            v-model="cycleDaysOfWeek"
          />
          <label for="Tuesday">Tuesday</label>
          <input
            type="checkbox"
            value="Wednesday"
            id="Wednesday"
            v-model="cycleDaysOfWeek"
          />
          <label for="Wednesday">Wednesday</label>
          <input
            type="checkbox"
            value="Thursday"
            id="Thursday"
            v-model="cycleDaysOfWeek"
          />
          <label for="Thursday">Thursday</label>
          <input
            type="checkbox"
            value="Friday"
            id="Friday"
            v-model="cycleDaysOfWeek"
          />
          <label for="Friday">Friday</label>
          <input
            type="checkbox"
            value="Saturday"
            id="Saturday"
            v-model="cycleDaysOfWeek"
          />
          <label for="Saturday">Saturday</label>
          <input
            type="checkbox"
            value="Sunday"
            id="Sunday"
            v-model="cycleDaysOfWeek"
          />
          <label for="Sunday">Sunday</label>
        
        </div>
        <div v-if="cycle === 'Monthly'" class="dow-radio">
          <input
            type="radio"
            value="Monday"
            id="Monday"
            v-model="cycleOnceMonthlyDay"
          />
          <label for="Monday">Monday</label>
          <input
            type="radio"
            value="Tuesday"
            id="Tuesday"
            v-model="cycleOnceMonthlyDay"
          />
          <label for="Tuesday">Tuesday</label>
          <input
            type="radio"
            value="Wednesday"
            id="Wednesday"
            v-model="cycleOnceMonthlyDay"
          />
          <label for="Wednesday">Wednesday</label>
          <input
            type="radio"
            value="Thursday"
            id="Thursday"
            v-model="cycleOnceMonthlyDay"
          />
          <label for="Thursday">Thursday</label>
          <input
            type="radio"
            value="Friday"
            id="Friday"
            v-model="cycleOnceMonthlyDay"
          />
          <label for="Friday">Friday</label>
          <input
            type="radio"
            value="Saturday"
            id="Saturday"
            v-model="cycleOnceMonthlyDay"
          />
          <label for="Saturday">Saturday</label>
          <input
            type="radio"
            value="Sunday"
            id="Sunday"
            v-model="cycleOnceMonthlyDay"
          />
          <label for="Sunday">Sunday</label>
        
        </div>
        <span v-if="cycle === 'Monthly'">-- of the Month</span>
      </div>
    </div>
    <div class="form-control">
      <h3>Deadline</h3>
      <label for="deadline">Until</label>
      <input type="date" id="until" :value="oneMonthFromToday" :min="today" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      startTime: this.$store.getters.currentTime.format("YYYY-MM-DD"),
      noTime: false,
      noDuration: false,
      cycle: "Weekly",
      cycleDaysOfWeek: [],
      cycleOnceMonthlyDay: '',
      cycleDayOfMonth: "First",
      track: null,
      tooltip: false
    };
  },
  computed: {
    today() {
      return this.$store.getters.currentTime.format("YYYY-MM-DD");
    },
    oneMonthFromToday() {
      return this.$store.getters.currentTime.add(1, "month").format("YYYY-MM-DD");
    },
    
  },
  methods: {
    logForm() {
      console.log(this.data);
    },
    toggleTooltip() {
      this.tooltip = !this.tooltip
    }
  },
};
</script>


<style scoped>
span {
  margin-left: 1.5rem;
}
label {
  margin: 0 0.5rem;
}
</style>