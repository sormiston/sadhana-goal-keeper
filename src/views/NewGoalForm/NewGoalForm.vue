<template>
  <h1>Create Goal</h1>
  <div class="container">
    <!-- REMEMBER TO CHANGE LOGFORM TO POSTFORM!!! -->
    <form @submit.prevent="logForm">
      <section>
        <h3>🎉 What would you like to accomplish? Be specific.</h3>
        <div class="form-control">
          <input
            id="title"
            type="text"
            placeholder="Goal title"
            v-model.trim="form.title"
          />
        </div>
        <div class="form-control">
          <textarea
            id="desc"
            rows="3"
            placeholder="Description (max three lines)"
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
        <div class="md-inline-flex">
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
        </div>
        <div class="md-inline-flex">
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
        </div>

        <div class="form-control">
          <div class="md-inline-flex">
            <h4>When do you want to start working on this goal?</h4>
            <input
              type="date"
              id="start"
              name="startDate"
              :min="today"
              v-model="form.startDate"
            />
          </div>
        </div>
        <div class="form-control">
          <div class="md-inline-flex">
            <h4>When do you want to stop working on this goal?</h4>
            <input
              type="date"
              id="until"
              name="deadline"
              :min="today"
              v-model="form.deadline"
            />
          </div>
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
        cycleOnceMonthlyDay: "Wednesday",
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
h1 {
  display: none;
}
.container {
  padding: 0 15px 12px;
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

section {
  margin-bottom: 1.5rem;
}
input#hours,
input#minutes {
  width: 50px;
}
textarea {
  resize: none;
  padding: 0.5rem 1rem;
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

@media screen and (min-width: 767px) {
  h1 {
    display: block;
  }
  h3 {
    font-size: 26px;
  }
  h4 {
    font-size: 16px;
  }
  .container {
    width: 773px;
    min-height: 578px;
  }
  .md-inline-flex {
     display: flex;
     justify-content: space-between;
     margin-bottom: 1rem;
  }
  input[type="date"] {
    width: 160px;
    height: 35px;
  }
}
</style>
