import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from "@/pages/login/LoginComponent";
import HomeComponent from "@/pages/home/HomeComponent";
import NotFoundComponent from "@/pages/notfound/NotFoundComponent";
import DepartamentComponent from "@/pages/departament/index/DepartamentComponent";
import CreateDepartamentComponent from "@/pages/departament/create/CreateDepartamentComponent";
import Guard from "@/services/middleware/middleware";

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
    path: "/admin-departament",
    name: "admin-departament",
    component: DepartamentComponent,
    beforeEnter: Guard.auth
  },
  {
    path: "/admin-departament/create",
    name: "admin-create-departament",
    component: CreateDepartamentComponent,
    beforeEnter: Guard.auth
  },
  {
    path: "/admin-departament/edit/:id",
    name: "admin-create-edit",
    component: CreateDepartamentComponent,
    beforeEnter: Guard.auth
  },
  {
    path: "/admin-product",
    name: "admin-product",
    // component: CategoryComponent,
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