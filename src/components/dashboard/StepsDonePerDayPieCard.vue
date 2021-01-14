<template>
  <div class="container card">
    <div class="calendar-grid">
      <div class="blank-a"></div>
      <div class="col-header Mon">Mon</div>
      <div class="col-header Tue">Tue</div>
      <div class="col-header Wed">Wed</div>
      <div class="col-header Thu">Thu</div>
      <div class="col-header Fri">Fri</div>
      <div class="col-header Sat">Sat</div>
      <div class="col-header Sun">Sun</div>
      <div class="row-header row-header-1">This Week</div>
      <div class="row-header row-header-2">Last Week</div>
     
      <div class="m blank-b"></div>
      <div class="m blank-c"></div>
      <div class="m blank-d"></div>
      <div class="m blank-b2"></div>
      <div class="m blank-c2"></div>
      <div class="m blank-d2"></div>
      
      <div class="m col-header Mon2">Mon</div>
      <div class="m col-header Tue2">Tue</div>
      <div class="m col-header Wed2">Wed</div>
      <div class="m col-header Thu2">Thu</div>
      <div class="m col-header Fri2">Fri</div>
      <div class="m col-header Sat2">Sat</div>
      <div class="m col-header Sun2">Sun</div>
      

      <base-pie
        v-for="object in stepsMonthlyReport"
        :key="object.dateTime"
        :chartData="object.data"
      ></base-pie>
    </div>
  </div>
</template>

<script>
import dummyData from "./dummyData.js";
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
  margin: 0 auto;
  padding: 1rem 0.75rem;
  display: grid;
  grid-template-rows: 1rem repeat(2, 60px);
  grid-template-columns: repeat(8, 60px);
  grid-template-areas:
    ". mon tue wed thu fri sat sun"
    "thisweek . . . . . . ."
    "lastweek . . . . . . .";
  /* "wkprev2 . . . . . . ."
    "wkprev3 . . . . . . ."; */
  gap: 1px 6px;
}

.col-header {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.Mon {
  grid-area: mon;
}
.Tue {
  grid-area: tue;
}
.Wed {
  grid-area: wed;
}
.Thu {
  grid-area: thu;
}
.Fri {
  grid-area: fri;
}
.Sat {
  grid-area: sat;
}
.Sun {
  grid-area: sun;
}
.row-header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.row-header.row-header-1 {
  grid-area: thisweek;
  
}
.row-header.row-header-2 {
  grid-area: lastweek;
}

.m {
  display: none;
}

@media screen and (max-width: 604px) {
  .calendar-grid {
  grid-template-rows: repeat(2, 1rem) 60px 1rem 60px;
  grid-template-columns: repeat(7, 60px) ;
  grid-template-areas: 
    "thisweek thisweek thisweek thisweek thisweek thisweek thisweek"
    "mon tue wed thu fri sat sun"
    ". . . . . . ."
    "lastweek lastweek lastweek lastweek lastweek lastweek lastweek"
    ;
  }
  .blank-a {
    display: none;
  }
}
@media screen and (max-width: 512px) {
  .calendar-grid {
  grid-template-rows: repeat(2, 1rem 1rem 60px 1rem 60px);
  grid-template-columns: repeat(5, 60px);
  grid-template-areas: 
    "thisweek thisweek thisweek thisweek thisweek"
    "mon tue wed thu fri"
    ". . . . ."
    "bb sat bc sun bd"
    "bb . bc . bd"
    "lastweek lastweek lastweek lastweek lastweek"
    "mon2 tue2 wed2 thu2 fri2"
    ". . . . ."
    "bb2 sat2 bc2 sun2 bd2"
    "bb2 . bc2 . bd2"   
  ;
  }
  .m {
    display: block;
  }
  .m.col-header {
    display: flex;
  }
  .blank-b {
    grid-area: bb;
  }
  .blank-c {
    grid-area: bc;
  }
  .blank-d {
    grid-area: bd;
  }
  .blank-b2 {
    grid-area: bb2;
  }
  .blank-c2 {
    grid-area: bc2;
  }
  .blank-d2 {
    grid-area: bd2;
  }
.Mon2 {
  grid-area: mon2;
}
.Tue2 {
  grid-area: tue2;
}
.Wed2 {
  grid-area: wed2;
}
.Thu2 {
  grid-area: thu2;
}
.Fri2 {
  grid-area: fri2;
}
.Sat2 {
  grid-area: sat2;
}
.Sun2 {
  grid-area: sun2;
}
}
</style>