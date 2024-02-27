import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../pages/index.vue";
import Kurumsal from "../pages/kurumsal.vue";
import Urunlerimiz from "../pages/urunlerimiz.vue"

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/kurumsal",
    component: Kurumsal,
  },
  {
    path: "/urunlerimiz",
    component: Urunlerimiz,
  },
  {
    path: "/urunlerimiz",
    component: Urunlerimiz,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
