import { createRouter, createWebHistory } from "vue-router";
import NewGoalForm from "../views/NewGoalForm/NewGoalForm.vue";
import StepsPage from "../views/StepsPage.vue"
import TheLayout from "../views/TheLayout.vue"
import GoalsPage from "../views/GoalsPage.vue";
import Dashboard from "../views/Dashboard.vue"
import Settings from "../views/Settings.vue"

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
        component: StepsPage
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "settings",
        name: "settings",
        component: Settings
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
