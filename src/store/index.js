import { createStore } from "vuex";
import submissionsModule from "./modules/submissions/index.js";
import goalsModule from "./modules/goals/index.js"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const store = createStore({
  state() {
    return {
      timeLoaded: dayjs().local(),
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
    submissions: submissionsModule,
    goals: goalsModule
  }
});

export default store;
