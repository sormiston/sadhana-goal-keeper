<template>
  <div class="container">
    <form @submit.prevent="logPost">
      <section>
        <h3>🎉 What would you like to accomplish? Be specific.</h3>
        <div class="form-control">
          <input
            id="title"
            type="text"
            placeholder="Goal title"
            v-model.trim="form.title"
            autofocus
          />
        </div>
        <div class="form-control">
          <textarea
            id="desc"
            rows="3"
            v-model.trim="form.description"
          ></textarea>
        </div>
        <div class="form-control">
          <base-pill
            v-for="category in categories"
            :key="category.name"
            :category="category.name"
          ></base-pill>
        </div>
      </section>
      <section>
        <h3>⏰ Set a time frame for this goal. Be Realistic.</h3>

        <!-- <div class="form-control">
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
        </div> -->

        <h4>How frequently do you want to work on this goal?</h4>
        <div class="form-control">
          <frequency-selector
            v-model:cycle="form.cycle"
            v-model:cycleDayOfMonth="form.cycleDayOfMonth"
            :cycleDaysOfWeek="form.cycleDaysOfWeek"
            v-model:cycleOnceMonthlyDay="form.cycleOnceMonthlyDay"
            @updateCycleDaysOfWeek="updateCycleDaysOfWeek"
          ></frequency-selector>
        </div>
        <h4>How long will the goal take each time?</h4>
        <div class="form-control">
          <div class="form-control-inline">
            <input
              type="number"
              id="hours"
              placeholder="0"
              :disabled="form.noDuration"
              v-model.number="form.durationHours"
            /><label for="hours">hours</label>

            <input
              type="number"
              id="minutes"
              placeholder="0"
              :disabled="form.noDuration"
              v-model.number="form.durationMinutes"
            /><label for="minutes">minutes</label>
          </div>

          <div class="form-control-inline">
            <input type="checkbox" id="no-duration" v-model="form.noDuration" />
            <label for="no-duration">No specific duration</label>

            <span @click.stop="toggleTooltip">?</span>
            <p v-if="tooltip">
              Helpful reminder. <span @click="toggleTooltip">Dismiss.</span>
            </p>
          </div>
        </div>

        <div class="form-control">
          <h4>When do you want to start working on this goal?</h4>
          <input
            type="date"
            id="start"
            name="startDate"
            :min="today"
            v-model="form.startDate"
          />
        </div>
        <div class="form-control">
          <h4>When do you want to stop working on this goal?</h4>
          <input
            type="date"
            id="until"
            name="deadline"
            :min="today"
            v-model="form.deadline"
          />
        </div>
      </section>
      <button>submit</button>
    </form>
  </div>
</template>

<script>
import FrequencySelector from "../../components/NewGoalForm/FrequencySelector.vue";
import postForm from "./postFormHelper.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default {
  components: {
    FrequencySelector
  },
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
    categories() {
      return this.$store.getters.categories;
    },
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
    logForm() {
      console.log(this.form);
    },
    postForm, // see postFormHelper.js
    toggleTooltip() {
      this.tooltip = !this.tooltip;
    },
    updateCycleDaysOfWeek(val) {
      if (this.form.cycleDaysOfWeek.includes(val)) {
        const idx = this.form.cycleDaysOfWeek.indexOf(val);
        this.form.cycleDaysOfWeek.splice(idx, 1);
      } else {
        this.form.cycleDaysOfWeek.push(val);
      }
    }
  }
};
</script>


<style scoped>
.container {
  padding: 12px 15px;
}
.form-control {
  margin-bottom: 10px;
}
.form-control-inline {
  display: inline-block;
  margin-left: 0.2rem;
}

@media screen and (max-width: 424px) {
  .form-control-inline:nth-child(2) {
    margin: 6px 0 0 10px;
  }
}
input:not([type="checkbox"]),
textarea {
  border: none;
  border-radius: 15px;
  width: 100%;
  font: inherit;
  padding: 0.15rem 1rem;
}

input[type="checkbox"] {
  transform: scale(1.75);
}

input#hours,
input#minutes {
  width: 50px;
}
textarea {
  resize: none;
}
input[type="number"] {
  text-align: right;
  appearance: textfield;
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  color: var(--text-light);
  height: 27px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
}
label {
  margin: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
}
h3 {
  font-size: 0.75rem;
}
h4,
input[type="number"] {
  font-size: 0.75rem;
  font-weight: 300;
}
h4 {
  color: var(--primary);
}

button {
  font: inherit;
  background-color: #fff;
  border: 1px solid var(--primary);
  border-radius: 30px;
  width: 100%;
  padding: 4px 0;
}

button:hover,
button:active {
  color: #fff;
  background-color: var(--primary);
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: var(--card-box-shadow);
}
</style>

<!-- OLD FREQ INPUT
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
  -->
<!--      
OLD CATEOGRY INPUT 
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
        <input type="radio" id="work" value="Wor k" v-model="form.track" /><label
          for="work"
          >Work</label
        > -->