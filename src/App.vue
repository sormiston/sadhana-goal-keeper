<template>
  <div id="nav">
    <router-link to="/">Goals Index</router-link> |
    <router-link to="/addGoal">Input</router-link> | 
    <router-link to="/steps">Steps Index</router-link>
  </div>
  <div>
  <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');

:root {
  --primary: #3C3E74;
 --text-light: #7D7D7D;
 --red: #c30712;
 --green: #29c1a3;
 --pink: #E95992; 
 --blue: #5096F6;
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
  background-color: rgba(245, 245, 248, 0.95);
}

h3 {
  font-size: 1.5rem;
  margin: 0 0 4px;
}

p {
  margin: 4px auto;
}

</style>
