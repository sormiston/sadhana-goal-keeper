import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/baseUI/baseCard.vue"
import router from "./router";
import store from "./store";
import ProgressBar from "./components/ProgressBar.vue"; 
import BasePill from "./components/baseUI/basePill.vue";
import BasePie from "./components/baseUI/basePie.vue"

createApp(App)
  .component('base-card', BaseCard)
  .component('progress-bar', ProgressBar)
  .component('base-pill', BasePill)
  .component('base-pie', BasePie)
 
  .use(store)
  .use(router)
  .mount("#app");
