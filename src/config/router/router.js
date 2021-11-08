import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from "../../pages/login/LoginComponent";
import HomeComponent from "../../pages/home/HomeComponent";
import NotFoundComponent from "../../pages/notfound/NotFoundComponent";
import CategoryComponent from "../../pages/category/CategoryComponent";
import Guard from "../../services/middleware/middleware";

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
    beforeEnter: Guard.auth
  },
  {
    path: "/admin-category",
    name: "admin-category",
    component: CategoryComponent,
    beforeEnter: Guard.auth
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;