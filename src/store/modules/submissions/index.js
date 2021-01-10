// SubmissionsModule
import axios from "../../../axios.js";

export default {
  namespaced: true,
  actions: {
    async postNewGoal(context, payload) {
      const userId = context.rootGetters.userId;
      try {
        const response = await axios.post(
          `goals/${userId}.json`,
          JSON.stringify(payload)
        );
        if (response.status < 200 || response.status >= 300)
          throw new Error(response.status);
      } catch (err) {
        console.error(err.message);
      }
    }
  }
};
