import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Chatbot from "../views/chatbot.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
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
  ],
});
export default router;
