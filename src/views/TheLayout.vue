<template>
  <main>
    <div class="app-title">
      <span style="font-weight:bold;">goalTracker</span><span>.app</span>
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

.app-title {
  padding-left: 14px; 
  padding-top: 15px; 
  padding-bottom: 15px; 
  color:white; 
  letter-spacing: 0.1em; 
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
}
</style>
