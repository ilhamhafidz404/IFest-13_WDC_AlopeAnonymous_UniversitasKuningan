import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/list-produk",
      name: "listProduk",
      component: () => import("../views/ListProduk.vue"),
    },
    {
      path: "/rebatik",
      name: "reBatik",
      component: () => import("../views/Rebatik.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/chatbot",
      name: "chatbot",
      component: () => import("../views/Chatbot.vue"),
    },
    {
      path: "/keranjang",
      name: "keranjang",
      component: () => import("../views/Keranjang.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/Checkout.vue"),
    },
    {
      path: "/detail-produk",
      name: "detailProduk",
      component: () => import("../views/DetailProduk.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/bathrift",
      name: "baThrift",
      component: () => import("../views/Bathrift.vue"),
    },
  ],
});

export default router;
