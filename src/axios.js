const axios = require("axios").default;
axios.defaults.baseURL =
  "https://sadhana-goal-keeper-default-rtdb.firebaseio.com/";

export default axios;
