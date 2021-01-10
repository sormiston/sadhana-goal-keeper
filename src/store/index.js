import { createStore } from 'vuex';
import dayjs from 'dayjs';

const store = createStore({
  state() {
    return {
      timeLoaded: dayjs()
    }
  },
  mutations: {},
  actions: {
    // async postNewGoal(context, payload) {
    //   try {
        
    //   } catch (err) {
    //     console.error(err.message)
    //   }
    // }
  },
  getters: {
    currentTime(state) {
      return state.timeLoaded;
    }
  },
  modules: {}
});


export default store