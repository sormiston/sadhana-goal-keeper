<template>
  <main>
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
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  padding-top: 10px;
  overflow: hidden;
}

@media screen and (min-width: 767px) {
  section {
    margin-left: 75px;
    border-top-left-radius: 50px;
    padding-top: 40px;
    padding-left: 74px;
    
  }
}
</style>
