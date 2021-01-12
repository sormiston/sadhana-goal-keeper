<template>
  <main>
    <div class="top-bar">
      <div class="app-title">
        <span style="font-weight: bold">goalTracker</span><span>.app</span>
      </div>
      <div
        class="menu-button"
        :class="{ close: mobileMenuOpen }"
        @click="toggleMobileMenu"
      >
        <div class="btn-line"></div>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
      </div>
    </div>
    <div id="mobileMenu" :class="{ hidden: !mobileMenuOpen }">
      <router-link to="/goals"
        ><div class="menu-item">My Goals</div>
      </router-link>
      <router-link to="/steps"
        ><div class="menu-item"><p>Today's Tasks</p></div>
      </router-link>
      <router-link to="/dashboard"
        ><div class="menu-item"><p>Dashboard</p></div>
      </router-link>
      <router-link to="/settings"
        ><div class="menu-item"><p>Settings</p></div>
      </router-link>
    </div>
    <nav-bar></nav-bar>
    <section>
      <router-view />
    </section>
  </main>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
};
</script>


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

.app-title {
  letter-spacing: 0.1em;
}

.menu-button {
  position: absolute;
  right: 14px;
  cursor: pointer;
  transition: var(--ease-out-transition);
  z-index: 2;
}

.btn-line {
  width: 32px;
  height: 4px;
  margin: 0 0 5px;
  background: #fff;
  transition: var(--ease-out-transition);
}

.btn-line:nth-child(2) {
  transition: opacity 0.1s;
}
/* Rotate to X */
.menu-button.close {
  transform: rotate(180deg);
}
/* Line 1 - Rotate */
.menu-button.close .btn-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}
/* //Line 2 - Hide */
.menu-button.close .btn-line:nth-child(2) {
  opacity: 0;
}

.menu-button.close .btn-line:nth-child(3) {
  transform: rotate(315deg) translate(7px, -6px);
}

#mobileMenu {
  position: absolute;
  z-index: 1;
  background-color: var(--primary);
  width: 100%;
  top: 0;
  bottom: 0;
  transition: var(--ease-out-transition);
}

#mobileMenu.hidden {
  transform: translateY(-100%);
  opacity: 0;
}
.menu-item {
  display: inline-block;
  color: #fff;
  font-weight: 400;
  text-align: center;
  border-width: 0 0 1px;
  border-color: #fff;
  border-style: solid;
  letter-spacing: 1.75px;
  height: 54px;
  width: 100%;
  vertical-align: middle;
  padding: 14px 0;
}

.menu-item p {
  margin: 0;
}
#mobileMenu a:nth-child(1) > .menu-item {
  margin-top: 70px;
  border-width: 1px 0;
}


/* // Line 3 - Rotate */
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

nav-bar {
  display: none;
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

  nav-bar {
    display: block;
  }
}
</style>

