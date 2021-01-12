<template>
  <div id="nav">
    <router-link to="/">Goals Index</router-link> |
    <router-link to="/addGoal">Input</router-link> |
    <router-link to="/steps">Steps Index</router-link>
  </div>

  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap");

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
  
  --breakpoint-sm: 575px;
  --breakpoint-md: 767px;
  --breakpoint-lg: 991px;
  --breakpoint-xl: 1999px;
  --breakpoint-xxl: 1399px;
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
</style>
