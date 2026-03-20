import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import EmployeeDashboard from "../pages/EmployeeDashboard.vue";
import EmployerDashboard from "../pages/EmployerDashboard.vue";
import ApplyLeave from "../pages/ApplyLeave.vue";

const routes = [
  { path: "/", component: Home },

  { path: "/employee-login", component: () => import("../pages/EmployeeLogin.vue") },
  { path: "/employer-login", component: () => import("../pages/EmployerLogin.vue") },

  { path: "/employee-signup", component: () => import("../pages/EmployeeSignup.vue") },
  { path: "/employer-signup", component: () => import("../pages/EmployerSignup.vue") },

  { path: "/dashboard", component: EmployeeDashboard },
  { path: "/apply", component: ApplyLeave },
  { path: "/employer", component: EmployerDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;