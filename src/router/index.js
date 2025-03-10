import { createWebHistory, createRouter } from "vue-router";

// page
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Chatbot from "../views/Chatbot.vue";
import ListProduk from "../views/ListProduk.vue";
import Keranjang from "../views/Keranjang.vue";
import Checkout from "../views/checkout.vue";
import DetailProduk from "../views/DetailProduk.vue";
import Profile from "../views/Profile.vue";
import ReBatik from "../views/Rebatik.vue";
import BaThrift from "../views/Bathrift.vue";

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
      component: ListProduk,
    },
    {
      path: "/reBatik",
      name: "reBatik",
      component: ReBatik,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/chatbot",
      name: "chatbot",
      component: Chatbot,
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
    {
      path: "/detailProduk",
      name: "detailproduk",
      component: DetailProduk,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/baThrift",
      name: "baTrift",
      component: BaThrift,
    },
  ],
});
export default router;
