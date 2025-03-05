<template>
  <header class="relative w-full h-[80vh] bg-cover bg-center">
    <div class="relative h-screen w-full">
      <img
        src="/image/hero.png"
        alt="Background Image"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-45"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="md:text-6xl text-2xl text-sekunder font-semibold">
          Melestarikan Budaya
        </h1>
        <h1 class="md:text-6xl text-2xl text-sekunder font-semibold">
          Merawat Bumi
        </h1>
      </div>
    </div>
  </header>

  <main class="xl:px-20 md:px-10 px-5 pt-10">
    <!-- Tentang Kami -->
    <section
      class="grid xl:grid-cols-1 items-center xl:gap-20 gap-10 dark:text-gray-100 py-16"
    >
      <div
        class="grid grid-cols-1 md:mt-10 mt-6 md:grid-cols-2 gap-12 items-center"
      >
        <!-- Konten Teks -->
        <div>
          <h2 class="text-3xl text-primary font-semibold text-gold italic mb-6">
            Tentang Kami
          </h2>
          <p class="text-am text-gray-700 leading-relaxed">
            Sundara Batik memadukan tradisi dan keberlanjutan dengan
            menghadirkan batik baru, second, serta batik dari kain organik dan
            pewarna alami yang aman. Melalui fitur ReBatik juga kami mengubah
            batik rusak menjadi produk bermanfaat, menjaga warisan budaya dan
            lingkungan.
          </p>
          <RouterLink
            to="listProduk"
            class="mt-6 inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary transition duration-300 ease-in-out hover:text-white"
          >
            Belanja Sekarang <i class="fa-solid fa-arrow-right pl-2"></i>
          </RouterLink>
        </div>

        <!-- Gambar -->
        <div class="relative flex justify-end">
          <img
            src="/image/page/about.png"
            alt="Proses Membatik"
            class="w-5/6 pt-16"
          />
        </div>
      </div>
    </section>
    <!--Alasan-->
    <section class="xl:px-20 px-10 mb-20 container">
      <h2
        class="text-3xl text-primary font-semibold text-gold italic mb-6 text-center"
      >
        Alasan <br />Mengapa Harus Kami
      </h2>

      <div class="grid md:grid-cols-11 grid-cols-12">
        <div class="md:col-span-5 col-span-11 md:py-10 md:order-1 order-2">
          <div class="flex gap-5 justify-end items-center xl:mb-3 mb-7">
            <div class="xl:w-2/3 w-full md:text-right text-left md:pl-0 pl-4">
              <h3 class="font-semibold text-gray-900">
                Bahan Ramah Lingkungan
              </h3>
              <p class="text-gray-700">
                Kami menggunakan bahan organik dan pewarna alami, menciptakan
                batik berkualitas yang ramah lingkungan.
              </p>
            </div>
            <div class="w-1/3 xl:block hidden">
              <img
                src="/image/page/1.png"
                alt=""
                class="w-full h-[200px] object-cover rounded"
              />
            </div>
          </div>
          <div class="flex gap-5 justify-end items-center xl:mb-3 mb-7">
            <div class="xl:w-2/3 w-full md:text-right text-left md:pl-0 pl-4">
              <h5 class="font-semibold text-gray-900">Jual Batik Second</h5>
              <p class="text-gray-700">
                Kami menghadirkan batik second berkualitas, memberi kesempatan
                kedua pada kain, dan mengurangi limbah tekstil.
              </p>
            </div>
            <div class="w-1/3 xl:block hidden">
              <img
                src="/image/page/2.png"
                alt=""
                class="w-full h-[200px] object-cover rounded"
              />
            </div>
          </div>
        </div>

        <div class="col-span-1 text-center md:order-2 order-1">
          <span
            class="relative inline-block w-[2px] h-full bg-primary after:content-[''] after:w-[20px] after:h-[20px] after:absolute after:bg-primary after:rounded-full after:-translate-x-1/2 after:top-1/4 after:-translate-y-1/2 before:content-[''] before:w-[20px] before:h-[20px] before:absolute before:bg-primary before:rounded-full before:-translate-x-1/2 before:top-3/4 before:-translate-y-1/2"
          ></span>
        </div>
        <div class="md:hidden block col-span-1 text-center order-3">
          <span
            class="relative inline-block w-[2px] h-full bg-primary after:content-[''] after:w-[20px] after:h-[20px] after:absolute after:bg-primary after:rounded-full after:-translate-x-1/2 after:top-1/4 after:-translate-y-1/2 before:content-[''] before:w-[20px] before:h-[20px] before:absolute before:bg-primary before:rounded-full before:-translate-x-1/2 before:top-3/4 before:-translate-y-1/2"
          ></span>
        </div>
        <div class="md:col-span-5 col-span-11 md:py-10 md:order-3 order-4">
          <div class="flex gap-5 justify-end items-center xl:mb-3 mb-7">
            <div class="w-1/3 xl:block hidden">
              <img
                src="/image/page/3.png"
                alt=""
                class="w-full h-[200px] object-cover rounded"
              />
            </div>
            <div class="xl:w-2/3 w-full text-left md:pl-0 pl-4">
              <h5 class="font-semibold text-gray-900">
                Pemanfaatan Sisa Bahan
              </h5>
              <p class="text-gray-700">
                Kami memanfaatkan sisa bahan untuk aksesori, patchwork, dan
                produk kreatif, mengurangi limbah dan mendukung keberlanjutan.
              </p>
            </div>
          </div>
          <div class="flex gap-5 justify-end items-center xl:mb-3 mb-7">
            <div class="w-1/3 xl:block hidden">
              <img
                src="/image/page/4.png"
                alt=""
                class="w-full h-[200px] object-cover rounded"
              />
            </div>
            <div class="xl:w-2/3 w-full text-left md:pl-0 pl-4">
              <h5 class="font-semibold text-gray-900">
                Pemberdayaan Pengrajin Batik
              </h5>
              <p class="text-gray-700">
                Kami memberdayakan pengrajin lokal dengan mendukung
                kesejahteraan serta melestarikan warisan budaya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Fitur Andalan-->
    <section
      class="grid xl:grid-cols-3 items-center xl:gap-20 gap-10 dark:text-gray-100 mt-20 mb-20"
    >
      <div class="lg:col-span-1">
        <h2 class="text-3xl text-primary font-semibold text-gold italic mb-6">
          Fitur Andalan
        </h2>
        <p class="text-gray-700">
          Kami menghadirkan berbagai fitur unggulan yang dapat Anda nikmati,
          dengan komitmen kuat terhadap keberlanjutan dan kepedulian terhadap
          lingkungan.
        </p>
      </div>
      <div class="lg:col-span-2">
        <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:gap-5 gap-2">
          <div class="relative rounded overflow-hidden group cursor-pointer">
            <img
              src="/image/page/1.png"
              alt=""
              class="w-full h-[300px] object-cover"
            />
            <div
              class="absolute inset-0 bg-primary/90 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-sm text-center">
                ReBatik mengubah batik lama dan Kain menjadi produk baru yang
                bermanfaat.
              </p>
            </div>
            <div
              class="absolute bottom-5 left-0 bg-primary/80 text-white text-xs px-5 py-2 rounded-r opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            >
              <h3 class="text-lg">ReBatik</h3>
            </div>
          </div>
          <div
            class="hoverCard relative rounded overflow-hidden cursor-pointer xl:block hidden group"
          >
            <img
              src="/image/page/1.png"
              alt=""
              class="w-full h-[300px] object-cover"
            />
            <div
              class="absolute inset-0 bg-primary/90 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-sm text-center">
                Chatbot kami siap memberikan edukasi dan informasi yang
                bermanfaat seputar batik.
              </p>
            </div>
            <div
              class="absolute bottom-5 left-0 bg-primary/80 text-white text-xs px-5 py-2 rounded-r opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            >
              <h3 class="text-lg">ChatBot</h3>
            </div>
          </div>
          <div
            class="hoverCard relative rounded overflow-hidden cursor-pointer lg:block hidden group"
          >
            <img
              src="/image/page/1.png"
              alt=""
              class="w-full h-[300px] object-cover"
            />
            <div
              class="absolute inset-0 bg-primary/90 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-sm text-center">
                Jual batik lama Anda di sini dan dapatkan diskon khusus untuk
                pembelian berikutnya!
              </p>
            </div>
            <div
              class="absolute bottom-5 left-0 bg-primary/80 text-white text-xs px-5 py-2 rounded-r opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            >
              <h3 class="text-lg">Jual Second</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--CARD PRODUK-->
    <section class="py-5 px-5">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl text-primary font-semibold text-gold italic mb-3">
          Temukan Produk
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mb-3">
          Temukan beragam batik baru dan second berkualitas <br />
          di Sundara Batik, pilihan elegan yang ramah <br />
          lingkungan dan berkelanjutan.
        </p>

        <div class="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
          <a href="">
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700"
            >
              <img
                class="w-full h-64 object-cover rounded-b"
                src="/image/produk/kemeja 1.png"
                alt="Batik Motif Kawung"
              />
              <div class="p-4">
                <div class="flex justify-between items-center">
                  <h3 class="text-lg font-semibold">Batik Motif Kawung</h3>
                  <p class="text-gray-600 text-sm">S-3XL</p>
                </div>
                <p class="text-gray-800 font-bold">Rp. 350.000</p>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-500">★</span>
                  <span class="text-gray-600 ml-1">9.5 (100)</span>
                </div>
                <div class="flex items-center justify-between mt-2">
                  <span
                    class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                    >Baru</span
                  >
                  <img
                    src="/image/logo/logo 2.png"
                    alt="Logo"
                    class="w-20 h-8"
                  />
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700"
            >
              <img
                class="w-full h-64 object-cover rounded-b"
                src="/image/produk/kemeja 1.png"
                alt="Batik Parang"
              />
              <div class="p-4">
                <div class="flex justify-between items-center">
                  <h3 class="text-lg font-semibold">Batik Parang</h3>
                  <p class="text-gray-600 text-sm">M-XXL</p>
                </div>
                <p class="text-gray-800 font-bold">Rp. 280.000</p>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-500">★</span>
                  <span class="text-gray-600 ml-1">8.8 (75)</span>
                </div>
                <div class="flex items-center justify-between mt-2">
                  <span
                    class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                    >Second</span
                  >
                  <img
                    src="/image/logo/logo 2.png"
                    alt="Logo"
                    class="w-20 h-8"
                  />
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700"
            >
              <img
                class="w-full h-64 object-cover rounded-b"
                src="/image/produk/kemeja 1.png"
                alt="Batik Mega Mendung"
              />
              <div class="p-4">
                <div class="flex justify-between items-center">
                  <h3 class="text-lg font-semibold">Batik Mega Mendung</h3>
                  <p class="text-gray-600 text-sm">L-XL</p>
                </div>
                <p class="text-gray-800 font-bold">Rp. 400.000</p>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-500">★</span>
                  <span class="text-gray-600 ml-1">9.8 (120)</span>
                </div>
                <div class="flex items-center justify-between mt-2">
                  <span
                    class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                    >Baru</span
                  >
                  <img
                    src="/image/logo/logo 2.png"
                    alt="Logo"
                    class="w-20 h-8"
                  />
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700"
            >
              <img
                class="w-full h-64 object-cover rounded-b"
                src="/image/produk/kemeja 1.png"
                alt="Batik Limited Edition"
              />
              <div class="p-4">
                <div class="flex justify-between items-center">
                  <h3 class="text-lg font-semibold">Batik Limited Edition</h3>
                  <p class="text-gray-600 text-sm">S-L</p>
                </div>
                <p class="text-gray-800 font-bold">Rp. 500.000</p>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-500">★</span>
                  <span class="text-gray-600 ml-1">9.9 (50)</span>
                </div>
                <div class="flex items-center justify-between mt-2">
                  <span
                    class="inline-block px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full"
                    >Limited</span
                  >
                  <img
                    src="/image/logo/logo 2.png"
                    alt="Logo"
                    class="w-20 h-8"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="flex justify-end mt-6">
          <RouterLink
            to="listProduk"
            class="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
          >
            Lihat Lebih Banyak<i class="fa-solid fa-arrow-right pl-2"></i>
          </RouterLink>
        </div>
      </div>
    </section>

    <!--TESTIMONI-->
    <section class="text-center mb-20 sm:py-20 py-10 xl:px-20 md:px-10 px-5">
      <h2 class="text-3xl text-primary font-semibold text-gold italic mb-6">
        Apa Kata Mereka
      </h2>

      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mt-20 mt-10 xl:gap-20 gap-10"
      >
        <div
          class="bg-gray-100 dark:bg-slate-800 dark:text-gray-200 text-left p-10 border border-primary rounded relative shadow"
        >
          <p class="text-sm">
            "Luar biasa! Produk ini sangat membantu saya menjaga kelestarian
            lingkungan."
          </p>
          <h6 class="text-xl font-semibold mt-5">Ilham Hafidz</h6>
          <span class="text-xs">Pecinta Fashion</span>
          <img
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop"
            alt=""
            class="w-[100px] h-[100px] rounded-full object-cover border border-primary absolute right-10 bottom-0 translate-y-1/3 borde"
          />
        </div>
        <div
          class="bg-gray-100 dark:bg-slate-800 dark:text-gray-200 text-left p-10 border border-primary rounded relative shadow"
        >
          <p class="text-sm">
            "Luar biasa! Produk ini sangat membantu saya menjaga kelestarian
            lingkungan."
          </p>
          <h6 class="text-xl font-semibold mt-5">Ilham Hafidz</h6>
          <span class="text-xs">Pecinta Fashion</span>
          <img
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop"
            alt=""
            class="w-[100px] h-[100px] rounded-full object-cover border border-primary absolute right-10 bottom-0 translate-y-1/3 borde"
          />
        </div>
        <div
          class="bg-gray-100 dark:bg-slate-800 dark:text-gray-200 text-left p-10 border border-primary rounded relative shadow"
        >
          <p class="text-sm">
            "Luar biasa! Produk ini sangat membantu saya menjaga kelestarian
            lingkungan."
          </p>
          <h6 class="text-xl font-semibold mt-5">Ilham Hafidz</h6>
          <span class="text-xs">Pecinta Fashion</span>
          <img
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop"
            alt=""
            class="w-[100px] h-[100px] rounded-full object-cover border border-primary absolute right-10 bottom-0 translate-y-1/3 borde"
          />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  name: "home",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
