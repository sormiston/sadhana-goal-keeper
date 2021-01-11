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
      <select v-if="cycle === 'Monthly'" :value="cycleDayOfMonth">
        <option>First</option>
        <option>Second</option>
        <option>Third</option>
        <option>Fourth</option>
      </select>
      <div v-if="cycle !== 'Monthly'" class="subform-control-inline" id="daysOfWeek">
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Monday') }"
          @click="updateCycleDaysOfWeek('Monday')"
        >Mon</button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Tuesday') }"
          @click="updateCycleDaysOfWeek('Tuesday')"
        >Tue</button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Wednesday') }"
          @click="updateCycleDaysOfWeek('Wednesday')"
        >Wed</button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Thursday') }"
          @click="updateCycleDaysOfWeek('Thursday')"
        >Thu</button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Friday') }"
          @click="updateCycleDaysOfWeek('Friday')"
        >Fri</button>
        <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Saturday') }"
          @click="updateCycleDaysOfWeek('Saturday')"
        >Sat</button>
          <button
          type="button"
          :class="{ active: cycleDaysOfWeek.includes('Sunday') }"
          @click="updateCycleDaysOfWeek('Sunday')"
        >Sun</button>
      </div>
      
      <!-- CONTINUE HERE -->
      
      <div v-if="cycle === 'Monthly'" class="dow-radio">
        <input type="radio" value="Monday" id="Monday" />
        <label for="Monday">Monday</label>
        <input type="radio" value="Tuesday" id="Tuesday" />
        <label for="Tuesday">Tuesday</label>
        <input type="radio" value="Wednesday" id="Wednesday" />
        <label for="Wednesday">Wednesday</label>
        <input type="radio" value="Thursday" id="Thursday" />
        <label for="Thursday">Thursday</label>
        <input type="radio" value="Friday" id="Friday" />
        <label for="Friday">Friday</label>
        <input type="radio" value="Saturday" id="Saturday" />
        <label for="Saturday">Saturday</label>
        <input type="radio" value="Sunday" id="Sunday" />
        <label for="Sunday">Sunday</label>
      </div>
      <span v-if="cycle === 'Monthly'">-- of the Month</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["update:cycle", "updateCycleDaysOfWeek"],
  props: {
    cycle: String,
    cycleDayOfMonth: String,
    cycleOnceMonthlyDay: String,
    cycleDaysOfWeek: Array
  },
  methods: {
    updateCycle(value) {
      this.$emit("update:cycle", value);
    },
    updateCycleDaysOfWeek(value) {
      this.$emit("updateCycleDaysOfWeek", value)
    }
  }
};
</script>

<style scoped>
.subform-control-inline {
  display: flex;
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
button:nth-child(1) {
  border-radius: 15px 0 0 15px;
}
button:nth-child(2) {
  margin: 0 6px;
}
button:nth-child(3) {
  border-radius: 0 15px 15px 0;
}
#daysOfWeek button {
  border-radius: 0;
  margin: 14px 1px 0;
}
.active {
  color: #fff;
  background-color: var(--primary);
}
</style>