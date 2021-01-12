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
      return state.goals;
    },
    goalById(state) {
      return id => state.goals.filter(goal => goal.id === id);
    }
  },
  mutations: {
    setGoals(state, payload) {
      state.goals = payload;
    },
    incrementStepsComplete(state, payload) {
      const goalIdx = state.goals.findIndex(goal => goal.id === payload);
      console.log("mutation");
      console.log(state.goals[goalIdx]);
      state.goals[goalIdx].stepsComplete++;
    }
  },
  actions: {
    async getUserGoals(context) {
      const userId = context.rootGetters.userId;
      try {
        const response = await axios(`${userId}/goals.json`);
        if (response.status < 200 || response.status >= 300)
          throw new Error(response.status);

        const goals = [];
        for (const key in response.data) {
          goals.push({
            id: key,
            ...response.data[key]
          });
        }
        context.commit("setGoals", goals);
      } catch (error) {
        console.error(error.message);
      }
    },
    async updateGoalStepCount(context, payload) {
      const userId = context.rootGetters.userId;
      const currentStepsComplete = context.getters.goalById(payload)[0]
        .stepsComplete;

      try {
        const response = await axios.patch(
          `${userId}/goals/${payload}.json`,
          JSON.stringify({
            stepsComplete: currentStepsComplete + 1
          })
        );
        if (response.status < 200 || response.status >= 300)
          throw new Error(response.status);

        context.commit("incrementStepsComplete", payload);
      } catch (error) {
        console.error(error.message);
      }
    }
  }
};
