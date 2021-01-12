<template>
  <div class="form-control">
    <div class="subform-control-inline">
      <button
        type="button"
        :class="{ active: cycle === 'Daily' }"
        @click="updateCycle('Daily')"
      >
        Daily
      </button>
      <button
        type="button"
        :class="{ active: cycle === 'Weekly' }"
        @click="updateCycle('Weekly')"
      >
        Weekly
      </button>
      <button
        type="button"
        :class="{ active: cycle === 'Monthly' }"
        @click="updateCycle('Monthly')"
      >
        Monthly
      </button>
    </div>

    <div class="daysOfWeek" v-if="cycle !== 'Daily'">
      <div class="subform-control-inline">
        <h4 v-if="cycle === 'Monthly'">
          Remind me on the first
          <select
            :value="cycleOnceMonthlyDay"
            @change="updateCycleOnceMonthlyDay"
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
            </select
          >each month.
        </h4>
      </div>
      <div
        v-if="cycle !== 'Monthly'"
        class="subform-control-inline dow-selector"
      >
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Monday') }"
          @click="updateCycleDaysOfWeek('Monday')"
        >
          Mon
        </button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Tuesday') }"
          @click="updateCycleDaysOfWeek('Tuesday')"
        >
          Tue
        </button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Wednesday') }"
          @click="updateCycleDaysOfWeek('Wednesday')"
        >
          Wed
        </button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Thursday') }"
          @click="updateCycleDaysOfWeek('Thursday')"
        >
          Thu
        </button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Friday') }"
          @click="updateCycleDaysOfWeek('Friday')"
        >
          Fri
        </button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Saturday') }"
          @click="updateCycleDaysOfWeek('Saturday')"
        >
          Sat
        </button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Sunday') }"
          @click="updateCycleDaysOfWeek('Sunday')"
        >
          Sun
        </button>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  emits: [
    "update:cycle",
    "updateCycleDaysOfWeek",
    "update:cycleOnceMonthlyDay"
  ],
  props: {
    cycle: String,
    cycleDayOfMonth: String, // deprecated
    cycleOnceMonthlyDay: String,
    cycleDaysOfWeek: Array
  },
  methods: {
    updateCycle(value) {
      this.$emit("update:cycle", value);
    },
    updateCycleDaysOfWeek(value) {
      this.$emit("updateCycleDaysOfWeek", value);
    },
    updateCycleOnceMonthlyDay(event) {
      this.$emit("update:cycleOnceMonthlyDay", event.target.value);
    }
  }
};
</script>

<style scoped>
h4 {
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 300;
  margin-top: 1rem;
}

.subform-control-inline {
  display: flex;
  
}
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 15px;
  width: 106px;
  font: inherit;
  padding: 0.15rem 1rem;
  margin-top: 0.75rem;
}

button {
  flex-grow: 1;
  font-family: inherit;
  font-weight: 700;
  height: 27px;
  background-color: #fff;
  border: none;
  color: var(--primary);
  
}
button, input {
  box-shadow: var(--card-box-shadow);
}
button:nth-child(1) {
  border-radius: 15px 0 0 15px;
}
button:nth-child(2) {
  margin: 0 6px;
}
button:nth-child(3) {
  border-radius: 0 15px 15px 0;
}
.dow-selector button {
  border-radius: 0 !important;
  margin: 14px 1px 0;
}
.active {
  color: #fff;
  background-color: var(--primary);
}

@media screen and (min-width: 767px) {
  button{
    font-size: 16px;
    height: 35px;
  }
  .subform-control-inline {
    min-width: 345px;
  }
  h4 {
    margin-top: 12px;
  }
  
}
</style>