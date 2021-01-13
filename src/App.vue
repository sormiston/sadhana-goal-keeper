<template>
  <div id="nav">
    <router-link to="/">Goals Index</router-link> |
    <router-link to="/addGoal">Input</router-link> |
    <router-link to="/steps">Steps Index</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
  </div>

  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap");

:root {
  --primary: #3c3e74;
  --text-light: #7d7d7d;
  --red: #c30712;
  --green: #29c1a3;
  --pink: #e95992;
  --blue: #5096f6;
  --jet: #333232;
  --eagle-green: #073b4c;
  --backdrop: rgba(255, 255, 255, 0.95);
  
  --card-box-shadow: 0px 0px 6px #d8d8d8;
  
  --ease-out-transition: all 0.4s ease-out;
  /* --breakpoint-sm: 575px;
  --breakpoint-md: 767px;
  --breakpoint-lg: 991px;
  --breakpoint-xl: 1999px;
  --breakpoint-xxl: 1399px; */
}
* {
  box-sizing: border-box;
}

html {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

body {
  margin: 0;
  min-height: 100vh;
}
a {
  text-decoration: none;
  color: inherit;
  font: inherit;
  outline: none;
}
h1 {
  font-size: 42px;
  margin: 0;
}
h3 {
  font-size: 1.5rem;
  margin: 0 0 4px;
}
h4 {
  margin: 0 0 4px;
}

p {
  margin: 4px auto;
}

#workspace {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.container {
  padding: 0 15px 12px;
}

.page-title {
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 5px;
}

.card {
  background-color: #fff;
  margin: 0.5rem 0;
  border-radius: 12px;
  box-shadow: 0px 0px 6px #d8d8d8;
  font-size: 0.75rem;
  display: flex;
  height: 100%;
  width: 100%;
}

@media screen and (min-width: 767px) {
  .page-title {
    font-size: 26px;
    color: #000;
  }
  
}

@media screen and (min-width: 767px) {
  .md-inline-flex {
     display: flex;
     justify-content: space-between;
     margin-bottom: 1rem;
  }
}

@media screen and (min-width: 992px) {
  h3 {
    font-size: 1rem;
  }
}
</style>
