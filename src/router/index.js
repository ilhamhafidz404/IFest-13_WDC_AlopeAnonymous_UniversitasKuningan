import { createWebHistory, createRouter } from "vue-router";

// page
import Home from "../views/home.vue";
import listProduk from "../views/listProduk.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/listProduk",
      name: "listProduk",
      component: listProduk,
    },
  ],
});
export default router;
