<template>
    <nav
      :class="{
        'bg-transparent': !scrolled,
        'bg-white/30 backdrop-blur-md': scrolled,
      }"
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div class="container mx-auto px-5 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img src="../assets/img/logo.png" alt="Logo" class="h-8" />
          <span class="text-white font-semibold">Sundara Batik</span>
        </div>
        <ul class="flex space-x-6 text-white">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">Product</a></li>
          <li><a href="#" class="hover:underline">Chat Bot</a></li>
          <li><a href="#" class="hover:underline">ReBatik</a></li>
          <li><a href="#" class="hover:underline">Jual</a></li>
        </ul>
        <div class="flex space-x-4">
          <button class="text-white"><i class="fas fa-shopping-cart"></i></button>
          <button class="text-white"><i class="fas fa-user"></i></button>
          <button class="text-white"><i class="fas fa-sign-out-alt"></i></button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scrolled: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 0;
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  </style>
  