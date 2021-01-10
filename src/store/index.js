import { createStore } from 'vuex';
import dayjs from 'dayjs';

const store = createStore({
  state() {
    return {
      timeLoaded: dayjs()
    }
  },
  mutations: {},
  actions: {},
  getters: {
    currentTime(state) {
      return state.timeLoaded;
    }
  },
  modules: {}
});


export default store