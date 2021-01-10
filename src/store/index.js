import { createStore } from "vuex";
import submissionsModule from "./modules/submissions/index.js";
import dayjs from "dayjs";

const store = createStore({
  state() {
    return {
      timeLoaded: dayjs(),
      userId: 'x1'
    };
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId
    },
    currentTime(state) {
      return state.timeLoaded;
    }
  },
  modules: {
    submissions: submissionsModule
  }
});

export default store;
