// GoalsModule
import axios from "../../../axios.js";

export default {
  namespaced: true,
  state() {
    return {
      goals: []
    };
  },
  getters: {
    goals(state) {
      return state.goals
    }
  },
  mutations: {
    setGoals(state, payload) {
      state.goals = payload
    }
  },
  actions: {
    async getUserGoals(context) {
      const userId = context.rootGetters.userId;
      try {
        const response = await axios(`goals/${userId}.json`);
        if (response.status < 200 || response.status >= 300)
          throw new Error(response.status);

        const goals = [];
        for (const key in response.data) {
          goals.push({
            id: key,
            ...response.data[key]
          });
        }
        context.commit('setGoals', goals)
      } catch (error) {
        console.error(error.message);
      }
    }
  }
};
