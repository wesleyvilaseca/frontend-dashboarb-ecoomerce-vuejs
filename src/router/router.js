import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from "../pages/login/LoginComponent";
import HomeComponent from "../pages/home/HomeComponent";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginComponent,
  },
  {
    path: "/admin-home",
    name: "admin-home",
    component: HomeComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;