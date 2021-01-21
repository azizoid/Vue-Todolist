import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

import Welcome from "../views/Welcome.vue";

const routes = [
  {
    path: "/",
    name: "Welcome Page",
    component: Welcome,
  },
  {
    path: "/todos",
    name: "Todo List",
    meta: { requiresAuth: true },
    component: () => import("../views/Todos.vue"),
  },
  {
    path: "/auth",
    name: "Auth Page",
    meta: { requiresUnAuth: true },
    component: () => import("../views/Auth.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next(to.path);
  } else {
    next();
  }
});

export default router;
