import { createRouter, createWebHistory } from "vue-router";
import NewGoalForm from "../components/NewGoalForm.vue";
import StepsIndex from "../components/StepsIndex.vue"
import TheLayout from "../views/TheLayout.vue"
import GoalsPage from "../views/GoalsPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/goals",
    component: TheLayout,
    children: [
      {
        path: "goals",
        name: "GoalsPage",
        component: GoalsPage
      },
      {
        path: "addGoal",
        name: "addGoal",
        component: NewGoalForm
      },
      {
        path: "steps",
        name: "steps",
        component: StepsIndex
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
