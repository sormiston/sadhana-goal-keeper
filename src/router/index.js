import { createRouter, createWebHistory } from "vue-router";
<<<<<<< HEAD
import NewGoalForm from "../components/NewGoalForm.vue";
=======
import NewGoalForm from "../views/NewGoalForm/NewGoalForm.vue";
import StepsIndex from "../components/StepsIndex.vue"
>>>>>>> 3299a20d7a38181ecb1efbc6efed07cfb7f05fe9
import TheLayout from "../views/TheLayout.vue"
import GoalsPage from "../views/GoalsPage.vue";
import StepsPage from "../views/StepsPage.vue";
import DashboardPage from "../views/DashboardPage.vue";

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
        component: DashboardPage
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
