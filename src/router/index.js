import { createRouter, createWebHistory } from "vue-router";
import GoalsIndex from "../components/GoalsIndex.vue";
import NewGoalForm from "../components/NewGoalForm.vue";
import StepsIndex from "../components/StepsIndex.vue"

const routes = [
  {
    path: "/",
    redirect: "/goals"
  },
  {
    path: "/goals",
    name: "GoalsIndex",
    component: GoalsIndex
  },
  {
    path: "/addGoal",
    name: "addGoal",
    component: NewGoalForm
  },
  {
    path: "/steps",
    name: "steps",
    component: StepsIndex
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
