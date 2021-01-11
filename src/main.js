import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ProgressBar from "./components/ProgressBar.vue"; 

createApp(App)
  .use(store)
  .use(router)
  .component('progress-bar', ProgressBar)
  .mount("#app");
