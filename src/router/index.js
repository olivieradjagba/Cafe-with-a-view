import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Contact from "../views/ContactPage.vue";
import Item from "../views/ItemDetailPage.vue";
import Learning from "../views/LearningPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/item/:name",
      //name: "item",
      component: Item,
    },
    {
      path: "/learning",
      name: "learning",
      component: Learning,
    },
  ],
});

export default router;
