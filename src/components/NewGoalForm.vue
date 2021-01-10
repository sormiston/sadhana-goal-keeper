<template>
  <form @submit.prevent="logForm">
    <div class="form-control">
      <input id="title" type="text" placeholder="Goal" />
    </div>
    <div class="form-control">
      <h3>Track</h3>
      <input type="radio" id="health" value="Health" v-model="track" /><label
        for="health"
        >Health</label
      >
      <input type="radio" id="learning" value="Learning" v-model="track" /><label
        for="learnign"
        >Learning</label
      >
    </div>
    <div class="form-control">
      <label for="desc">Description</label>
      <textarea id="desc" cols="30" rows="5"></textarea>
    </div>
    <div class="form-control">
      <label for="start">Start</label>
      <input type="date" id="start" :value="today" :min="today" />
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
      <input type="number" id="hours" max="8" /><label for="hours">Hours</label>
      <input type="number" id="minutes" max="60" step="15" /><label
        for="minutes"
        >Minutes</label
      >
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
        <span v-if="cycle === 'Monthly'">Of the Month</span>
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
      noTime: false,
      cycle: "Weekly",
      cycleDaysOfWeek: [],
      cycleDayOfMonth: "First",
      track: null
    };
  },
  computed: {
    today() {
      return this.$store.getters.currentTime.format("YYYY-MM-DD");
    },
    oneMonthFromToday() {
      return this.$store.getters.currentTime.add(1, "month");
    }
  },
  methods: {
    logForm() {
      console.log(this.data);
    }
  }
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