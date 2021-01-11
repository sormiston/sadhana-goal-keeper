// SubmissionsModule
import axios from "../../../axios.js";
import buildSteps from "./buildSteps.js";

export default {
  namespaced: true,
  actions: {
    async postNewGoal(context, payload) {
      const userId = context.rootGetters.userId;
      try {
        const response = await axios.post(
          `${userId}/goals.json`,
          JSON.stringify(payload)
        );
        if (response.status < 200 || response.status >= 300)
          throw new Error(response.status);
        const savedGoal = {
          id: response.data.name,
          ...payload
        };
        // pass savedGoal to the build steps helper
        context.dispatch("postNewSteps", savedGoal);
      } catch (error) {
        console.error(error.message);
      }
    },
    async postNewSteps(context, payload) {
      const userId = context.rootGetters.userId;
      const steps = buildSteps(payload);
      for (const item of steps) {
        try {
          const response = await axios.post(
            `${userId}/steps.json`,
            JSON.stringify(item)
          );
          if (response.status < 200 || response.status >= 300)
            throw new Error(response.status);
        } catch (error) {
          console.error(error.message);
        }
      }
    }
  }
};
