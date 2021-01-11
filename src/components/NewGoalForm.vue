<template>
  <form @submit.prevent="postForm">
    <div class="form-control">
      <input
        id="title"
        type="text"
        placeholder="Goal"
        v-model.trim="form.title"
      />
    </div>
    <div class="form-control">
      <h3>Track</h3>
      <input
        type="radio"
        id="health"
        value="Health"
        v-model="form.track"
      /><label for="health">Health</label>
      <input
        type="radio"
        id="learning"
        value="Learning"
        v-model="form.track"
      /><label for="learning">Learning</label>
      <input
        type="radio"
        id="relationships"
        value="Relationships"
        v-model="form.track"
      /><label for="relationships">Relationships</label>
      <input
        type="radio"
        id="self-growth"
        value="Self-Growth"
        v-model="form.track"
      /><label for="self-growth">Self-Growth</label>
      <input type="radio" id="work" value="Work" v-model="form.track" /><label
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
        v-model.trim="form.description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="start">Start</label>
      <input type="date" id="start" :min="today" v-model="form.startDate" />
    </div>
    <div class="form-control">
      <h3>Time</h3>
      <input
        type="time"
        id="time"
        min="00:00"
        max="24:00"
        :disabled="form.noTime"
        v-model="form.startTime"
      />
      <input type="checkbox" v-model="form.noTime" id="no-time" />
      <label for="no-time">No set time</label>
    </div>
    <div class="form-control">
      <h3>
        How much time will you spend on this goal each regular session?
        (duration)
      </h3>
      <input
        type="number"
        id="hours"
        min="0"
        max="8"
        :disabled="form.noDuration"
        v-model.number="form.durationHours"
      /><label for="hours">Hours</label>

      <input
        type="number"
        id="minutes"
        min="0"
        max="60"
        step="15"
        :disabled="form.noDuration"
        v-model.number="form.durationMinutes"
      /><label for="minutes">Minutes</label>

      <input type="checkbox" id="no-duration" v-model="form.noDuration" />
      <label for="no-duration">No specific duration</label>
      <span @click.stop="toggleTooltip">?</span>
      <p v-if="tooltip">
        Helpful reminder. <span @click="toggleTooltip">Dismiss.</span>
      </p>
    </div>
    <div class="form-control">
      <h3>Cycle</h3>
      <select v-model="form.cycle">
        <option>Daily</option>
        <option>Weekly</option>
        <option>Monthly</option>
      </select>
      <div class="daysOfWeek" v-if="form.cycle !== 'Daily'">
        <select v-if="form.cycle === 'Monthly'" v-model="form.cycleDayOfMonth">
          <option>First</option>
          <option>Second</option>
          <option>Third</option>
          <option>Fourth</option>
        </select>
        <div v-if="form.cycle !== 'Monthly'" class="dow-checkboxes">
          <input
            type="checkbox"
            value="Monday"
            id="Monday"
            v-model="form.cycleDaysOfWeek"
          />
          <label for="Monday">Monday</label>
          <input
            type="checkbox"
            value="Tuesday"
            id="Tuesday"
            v-model="form.cycleDaysOfWeek"
          />
          <label for="Tuesday">Tuesday</label>
          <input
            type="checkbox"
            value="Wednesday"
            id="Wednesday"
            v-model="form.cycleDaysOfWeek"
          />
          <label for="Wednesday">Wednesday</label>
          <input
            type="checkbox"
            value="Thursday"
            id="Thursday"
            v-model="form.cycleDaysOfWeek"
          />
          <label for="Thursday">Thursday</label>
          <input
            type="checkbox"
            value="Friday"
            id="Friday"
            v-model="form.cycleDaysOfWeek"
          />
          <label for="Friday">Friday</label>
          <input
            type="checkbox"
            value="Saturday"
            id="Saturday"
            v-model="form.cycleDaysOfWeek"
          />
          <label for="Saturday">Saturday</label>
          <input
            type="checkbox"
            value="Sunday"
            id="Sunday"
            v-model="form.cycleDaysOfWeek"
          />
          <label for="Sunday">Sunday</label>
        </div>
        <div v-if="form.cycle === 'Monthly'" class="dow-radio">
          <input
            type="radio"
            value="Monday"
            id="Monday"
            v-model="form.cycleOnceMonthlyDay"
          />
          <label for="Monday">Monday</label>
          <input
            type="radio"
            value="Tuesday"
            id="Tuesday"
            v-model="form.cycleOnceMonthlyDay"
          />
          <label for="Tuesday">Tuesday</label>
          <input
            type="radio"
            value="Wednesday"
            id="Wednesday"
            v-model="form.cycleOnceMonthlyDay"
          />
          <label for="Wednesday">Wednesday</label>
          <input
            type="radio"
            value="Thursday"
            id="Thursday"
            v-model="form.cycleOnceMonthlyDay"
          />
          <label for="Thursday">Thursday</label>
          <input
            type="radio"
            value="Friday"
            id="Friday"
            v-model="form.cycleOnceMonthlyDay"
          />
          <label for="Friday">Friday</label>
          <input
            type="radio"
            value="Saturday"
            id="Saturday"
            v-model="form.cycleOnceMonthlyDay"
          />
          <label for="Saturday">Saturday</label>
          <input
            type="radio"
            value="Sunday"
            id="Sunday"
            v-model="form.cycleOnceMonthlyDay"
          />
          <label for="Sunday">Sunday</label>
        </div>
        <span v-if="form.cycle === 'Monthly'">-- of the Month</span>
      </div>
    </div>
    <div class="form-control">
      <h3>Deadline</h3>
      <label for="deadline">Until</label>
      <input type="date" id="until" :min="today" v-model="form.deadline" />
    </div>
    <button>submit</button>
  </form>
</template>

<script>
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default {
  data() {
    return {
      form: {
        title: "",
        track: null,
        description: "",
        startDate: this.$store.getters.currentTime.format("YYYY-MM-DD"),
        startTime: null,
        noTime: false,
        durationHours: null,
        durationMinutes: null,
        noDuration: false,
        cycle: "Weekly",
        cycleDaysOfWeek: [],
        cycleOnceMonthlyDay: "",
        cycleDayOfMonth: "First",
        deadline: this.$store.getters.currentTime
          .add(1, "month")
          .format("YYYY-MM-DD")
      },

      tooltip: false
    };
  },
  computed: {
    today() {
      return this.$store.getters.currentTime.format("YYYY-MM-DD");
    },
    oneMonthFromToday() {
      return this.$store.getters.currentTime
        .add(1, "month")
        .format("YYYY-MM-DD");
    }
  },
  methods: {
    postForm() {
      let startDate = dayjs(this.form.startDate);
      if (this.form.startTime) {
        startDate = startDate
          .clone()
          .hour(parseInt(this.form.startTime.substring(0, 2)));
        startDate = startDate
          .clone()
          .minute(parseInt(this.form.startTime.substring(3, 5)));
      }
      let formData = { ...this.form };
      formData.noTime = formData.startTime === null ? true : false;
      formData.noDuration =
        formData.durationHours === null && formData.durationMinutes === null
          ? true
          : false;
      delete formData.startTime;

      let deadline = dayjs(this.form.deadline);
      deadline = deadline.clone().hour(23);
      deadline = deadline.clone().minute(59);
    
      formData = {
        ...formData,
        startDate,
        deadline
      };
    
      this.$store.dispatch("submissions/postNewGoal", formData);
    },
    toggleTooltip() {
      this.tooltip = !this.tooltip;
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