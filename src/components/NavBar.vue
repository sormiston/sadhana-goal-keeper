<template>
    <div class="nav-bar">
        <div id="dashboard-button" :class="dashboardNavStatus" v-on:click="selectDashboard">
            <div class='nav-icon-container'>
                <div :class='dashboardNavIconStatus'><view-dashboard/></div>
                <div class="nav-text"><p>dashboard</p></div>
            </div>
        </div>
        <div id="today-button" :class="todayNavStatus" v-on:click="selectToday">
            <div class='nav-icon-container'>
                <div :class='todayNavIconStatus'><checkbox-marked/></div>
                <div class="nav-text"><p>my tasks</p></div>
            </div>
        </div>
        <div id="goals-button" :class="goalsNavStatus" v-on:click="selectGoals">
            <div class='nav-icon-container'>
                <div :class='goalsNavIconStatus'><clipboard/></div>
                <div class="nav-text"><p>my goals</p></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-bar {
    position: absolute;
    top: 100px;
    width: 88px;
    height: 65px;
}

.selected {
    align-content: center;
    display: none;
}

.deselected {
    display: none;
}

.nav-icon-container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25% 0 0 -20%;
}

.nav-text p {
  font-size: 10px; 
  color: var(--primary);
  margin: 0 0 0 -20%;
  width: 100%; 
  text-align: center;
}

.deselected p {
  display: none;
}

.nav-icon-deselected {
    width: 30px;
    height: 30px;
    font-size: 30px;
    color: white; 
}

.nav-icon-selected {
    width: 30px;
    height: 30px;
    font-size: 30px;
    color: var(--primary); 
}

@media screen and (min-width: 767px) {
    .selected {
        background-color: white;
        width: 88px;
        height: 65px;
        box-shadow: 10ch;
        display: flex;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
        position: relative;
    }

    .deselected {
        background-color: transparent;
        width: 74px;
        height: 65px;
        display: block;
        position: relative;
    }
}
</style>

<script>
import router from '../router/index.js';
import { ViewDashboard, CheckboxMarked, Clipboard } from 'mdue';

export default {
  data() {
    return {
      navSelection: "goals",
    };
  },
  components: {
    ViewDashboard,
    CheckboxMarked,
    Clipboard
  },
  computed: {
    dashboardNavStatus() {
      if (this.navSelection == "dashboard") return "selected";
      return "deselected";
    },
    todayNavStatus() {
      if (this.navSelection == "today") return "selected";
      return "deselected";
    },
    goalsNavStatus() {
      if (this.navSelection == "goals") return "selected";
      return "deselected";
    },
    dashboardNavIconStatus() {
      if (this.navSelection == "dashboard") return "nav-icon-selected";
      return "nav-icon-deselected";
    },
    todayNavIconStatus() {
      if (this.navSelection == "today") return "nav-icon-selected";
      return "nav-icon-deselected";
    },
    goalsNavIconStatus() {
      if (this.navSelection == "goals") return "nav-icon-selected";
      return "nav-icon-deselected";
    }
  },
  methods: {
    selectDashboard: function() {
      this.navSelection = "dashboard"; 
      router.push('dashboard');
    },
    selectToday: function() {
      this.navSelection = "today";
      router.push('steps');
    },
    selectGoals: function() {
      this.navSelection = "goals";
      router.push('goals');
    }
  }
}
</script>>
