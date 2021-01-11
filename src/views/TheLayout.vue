<template>
<main>
    <div class="top-bar">
        <div class="app-title">
            <span style="font-weight:bold;">goalTracker</span><span>.app</span>
        </div>
        <div class="menu-button">
            <span>menu</span>
        </div>
    </div>
    <div class="nav-bar">
        <div id="dashboard-button" :class="dashboardNavStatus" v-on:click="selectDashboard">
            <div class='nav-icon-container'>
                <div class='nav-icon'></div>
                <div class="nav-text"><p>dashboard</p></div>
            </div>
        </div>
        <div id="today-button" :class="todayNavStatus" v-on:click="selectToday">
            <div class='nav-icon-container'>
                <div class='nav-icon'></div>
                <div class="nav-text"><p>my tasks</p></div>
            </div>
        </div>
        <div id="goals-button" :class="goalsNavStatus" v-on:click="selectGoals">
            <div class='nav-icon-container'>
                <div class='nav-icon'></div>
                <div class="nav-text"><p>my goals</p></div>
            </div>
        </div>
    </div>
    <section>
        <router-view />
    </section>
</main>
</template>

<style scoped>
main {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--primary);
}

section {
    background-color: var(--backdrop);
    min-height: calc(100vh - 16px - 30px);
    padding-top: 10px;
    overflow: hidden;
}

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

.app-title {
    letter-spacing: 0.1em;
}

.menu-button {
    position: absolute;
    right: 14px;
}

.top-bar {
    display: flex;
    padding-left: 14px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: white;
}

.menu-button :hover {
    font-weight: bold;
}

.top-bar div {
    flex: 100%;
}

.nav-icon-container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20% 0 0 -20%;
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

.nav-icon {
    width: 30px;
    height: 30px;
    background-color: var(--blue);
}

@media screen and (min-width: 767px) {
    section {
        margin-left: 75px;
        border-top-left-radius: 50px;
        padding-top: 40px;
        padding-left: 74px;
    }

    .app-title {
        padding-left: 45px;
    }

    .menu-button {
        display: none;
    }

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
export default {
  data() {
    return {
      navSelection: "goals",
    };
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
    }
  },
  methods: {
    selectDashboard: function() {
      this.navSelection = "dashboard"; 
    },
    selectToday: function() {
      this.navSelection = "today";
    },
    selectGoals: function() {
      this.navSelection = "goals";
    }
  }
}
</script>>
