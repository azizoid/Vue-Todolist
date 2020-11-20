import { createRouter, createWebHistory } from "vue-router";
import Todos from "../views/Todos.vue";

const routes = [
  {
    path: "/",
    name: "Todo List",
    component: Todos,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  // {
  //   path: "/todos",
  //   name: "Todo List",
  //   component: () => import("../views/Todos.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
