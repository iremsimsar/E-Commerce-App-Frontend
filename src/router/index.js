import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login/Login.vue";
import Index from "../views/Index/Index";
const routes = [
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
