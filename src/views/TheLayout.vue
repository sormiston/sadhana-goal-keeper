<template>
<main>
    <div class="top-bar">
        <div class="app-title">
            <span style="font-weight:bold;">goalTracker</span><span>.app</span>
        </div>
        <div class="menu-button">
            <span><Menu/></span>
        </div>
    </div>
    <nav-bar></nav-bar>
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

.app-title {
    letter-spacing: 0.1em;
}

.menu-button {
    position: absolute;
    right: 14px;
    font-size: 20px;
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
    font-size: 22px;
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

<script>
import NavBar from '../components/NavBar.vue';
import {Menu} from 'mdue';
export default {
  components: {
    NavBar,
    Menu
  },
}
</script>