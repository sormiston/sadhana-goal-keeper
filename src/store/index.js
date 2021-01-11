import { createStore } from "vuex";
import submissionsModule from "./modules/submissions/index.js";
import goalsModule from "./modules/goals/index.js"
import stepsModule from "./modules/steps/index.js"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const store = createStore({
  state() {
    return {
      timeLoaded: dayjs().local(),
      userId: 'x1',
      userCustomization: {
        categories: [
          { category: 'Health', color: '--pink' },
          { category: 'Learning', color: '--green' },
          { category: "New Year's", color: '--blue' },
          { category: 'Self-Growth', color: '--eagle-green' },
          { category: 'Work', color: '--jet'}
          ]
      }
    };
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId
    },
    currentTime(state) {
      // returns a daysjs object
      return state.timeLoaded;
    }
  },
  modules: {
    submissions: submissionsModule,
    goals: goalsModule,
    steps: stepsModule
  }
});

export default store;
