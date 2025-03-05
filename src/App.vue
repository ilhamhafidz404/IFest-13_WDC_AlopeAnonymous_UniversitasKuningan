<template>
  <main>
    <Navbar></Navbar>
    <router-view></router-view>

    <Footer></Footer>
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
