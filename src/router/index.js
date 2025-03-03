import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
import Keranjang from "../views/Keranjang.vue";
import Checkout from "../views/Checkout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/keranjang",
      name: "keranjang",
      component: Keranjang,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
  ],
});
export default router;
