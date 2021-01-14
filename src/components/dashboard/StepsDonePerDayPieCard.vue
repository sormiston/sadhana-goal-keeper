<template>
  <base-card title="Steps done per day">
    <div class="calendar-grid">
      <div class="blank"></div>
      <div class="col-header Mon">Mon</div>
      <div class="col-header Tue">Tue</div>
      <div class="col-header Wed">Wed</div>
      <div class="col-header Thu">Thu</div>
      <div class="col-header Fri">Fri</div>
      <div class="col-header Sat">Sat</div>
      <div class="col-header Sun">Sun</div>
      <div class="row-header row-header-1">This Week</div>
      <div class="row-header row-header-2">Last Week</div>
      <div class="row-header row-header-3">2 Weeks Ago</div>
      <div class="row-header row-header-4">3 Weeks Ago</div>

      <base-pie
        v-for="object in stepsMonthlyReport"
        :key="object.dateTime"
        :chartData="object.data"
      ></base-pie>
    </div>
  </base-card>
</template>

<script>
import dummyData from './dummyData.js'
export default {
  data() {
    return {
      stepsMonthlyReport: dummyData.stepsMonthlyReport
    };
  }
};
</script>

<style scoped>
.calendar-grid {
  padding: 1rem 0.75rem;
  display: grid;
  grid-template-rows: 12px repeat(4, 60px);
  grid-template-columns: repeat(8, 60px);
  grid-template-areas:
    ". mon tue wed thu fri sat sun"
    "thisweek none none none none none none none"
    "lastweek none none none none none none none"
    "wkprev2 none none none none none none none"
    "wkprev3 none none none none none none none";

  grid-gap: 1px 6px;
}
.col-header {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.col-header.Mon {
  grid-area: mon;
}
.col-header.Tue {
  grid-area: tue;
}
.col-header.Wed {
  grid-area: wed;
}
.col-header.Thu {
  grid-area: thu;
}
.col-header.Fri {
  grid-area: fri;
}
.col-header.Sat {
  grid-area: sat;
}
.col-header.Sun {
  grid-area: sun;
}
.row-header {
  display: flex;
  align-items: center;
}
.row-header.row-header-1 {
  grid-area: thisweek;
}
.row-header.row-header-2 {
  grid-area: lastweek;
}
.row-header.row-header-3 {
  grid-area: wkprev2;
}
.row-header.row-header-4 {
  grid-area: wkprev3;
}
</style>