import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login/Login.vue";
import Register from "../views/Login/Register";
import Index from "../views/Index/Index";
const routes = [{
        path: "/index",
        name: "Index",

        component: Index,
    },
    {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Login,
    },
    {
        path: "/register",
        name: "Register",

        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;