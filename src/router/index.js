import { createRouter,createWebHistory } from "vue-router"

import MainPage from "../pages/index.vue"
import About from "../pages/about.vue"


const routes = [
  {
    path:"/",
    component:MainPage
  },
  {
    path:"/about",
    component:About
  },
 
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})