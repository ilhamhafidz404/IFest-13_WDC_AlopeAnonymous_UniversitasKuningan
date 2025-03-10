<template>
  <nav
    :class="{
      'bg-transparent text-white': !scrolled,
      'bg-white text-primary shadow-md': scrolled,
    }"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 lg:px-16 md:px-10 px-5"
  >
    <div class="container mx-auto py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img
          :src="logo"
          alt="Logo"
          class="lg:h-10 h-9 transition-all duration-300"
        />
      </div>

      <!-- Menu pada layar besar -->
      <ul
        :class="{ 'text-white': !scrolled, 'text-primary': scrolled }"
        class="hidden md:flex space-x-6"
      >
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li>
          <router-link to="listProduk" class="nav-link">Produk</router-link>
        </li>
        <li>
          <router-link to="chatbot" class="nav-link">Chat Bot</router-link>
        </li>
        <li>
          <router-link to="reBatik" class="nav-link">ReBatik</router-link>
        </li>
        <li>
          <router-link to="baThrift" class="nav-link">BaThrift</router-link>
        </li>
      </ul>

      <!-- Tombol ikon di layar besar -->
      <div class="hidden md:flex space-x-4">
        <RouterLink
          to="keranjang"
          :class="{ 'text-white': !scrolled, 'text-primary': scrolled }"
        >
          <i class="fas fa-shopping-cart text-xl"></i>
        </RouterLink>
        <RouterLink
          to="profile"
          :class="{ 'text-white': !scrolled, 'text-primary': scrolled }"
        >
          <i class="fas fa-user text-xl"></i>
        </RouterLink>
        <RouterLink
          :class="{ 'text-white': !scrolled, 'text-primary': scrolled }"
        >
          <i class="fas fa-sign-out-alt text-xl"></i>
        </RouterLink>
      </div>

      <!-- Hamburger Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        :class="{ 'text-white': !scrolled, 'text-primary': scrolled }"
        class="md:hidden focus:outline-none transition-all duration-300"
      >
        <i
          :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"
          class="lg:text-2xl text-lg"
        ></i>
      </button>
    </div>

    <!-- Menu Responsif (Mobile) -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white text-primary shadow-md absolute top-full left-0 w-full py-4 transition-all"
    >
      <ul class="flex flex-col items-center space-y-4">
        <li>
          <router-link to="/" class="nav-link" @click="isMenuOpen = false"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="ListProduk"
            class="nav-link"
            @click="isMenuOpen = false"
            >Produk</router-link
          >
        </li>
        <li>
          <router-link to="chatbot" class="nav-link" @click="isMenuOpen = false"
            >Chat Bot</router-link
          >
        </li>
        <li>
          <router-link to="reBatik" class="nav-link" @click="isMenuOpen = false"
            >ReBatik</router-link
          >
        </li>
        <li>
          <router-link
            to="baThrift"
            class="nav-link"
            @click="isMenuOpen = false"
            >BaThrift</router-link
          >
        </li>
      </ul>

      <div class="flex justify-center space-x-6 mt-4">
        <router-link
          to="/keranjang"
          class="text-primary"
          @click="isMenuOpen = false"
        >
          <i class="fas fa-shopping-cart text-xl"></i>
        </router-link>
        <router-link
          to="profile"
          class="text-primary"
          @click="isMenuOpen = false"
        >
          <i class="fas fa-user text-xl"></i>
        </router-link>
        <button class="text-primary" @click="isMenuOpen = false">
          <i class="fas fa-sign-out-alt text-xl"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
import logo1 from "/image/logo/logo 1.png";
import logo2 from "/image/logo/logo 2.png";

export default {
  data() {
    return {
      scrolled: false,
      isMenuOpen: false,
      logo: logo1,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
      this.logo = this.scrolled ? logo2 : logo1;
    },
  },
};
</script>

<style scoped>
/* Efek garis bawah dari kiri ke kanan */
.nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}
</style>