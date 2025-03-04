<template>
  <main>
    <Navbar></Navbar>
    <router-view></router-view>

    <Footer></Footer>
  </main>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
