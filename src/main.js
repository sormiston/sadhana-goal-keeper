import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/baseUI/baseCard.vue"
import router from "./router";
import store from "./store";
import ProgressBar from "./components/ProgressBar.vue"; 
import BasePill from "./components/baseUI/basePill.vue";


createApp(App)
  .component('base-card', BaseCard)
  .component('progress-bar', ProgressBar)
  .component('base-pill', BasePill)
  .use(store)
  .use(router)
  .mount("#app");
