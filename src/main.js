import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/baseUI/baseCard.vue"
import router from "./router";
import store from "./store";

createApp(App)
  .component('base-card', BaseCard)
  .use(store)
  .use(router)
  .mount("#app");
