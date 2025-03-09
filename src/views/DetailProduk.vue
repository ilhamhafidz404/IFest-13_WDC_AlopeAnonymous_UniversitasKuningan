<template>
  <section
    class="relative text-center py-24 text-sekunder font-primary bg-cover bg-center"
    style="background-image: url('/image/hero.png')"
  >
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    <div class="relative z-10">
      <h1 class="font-sekunder text-4xl my-5">Detail</h1>
      <p>
        Cek kembali produk pilihan Anda dan jadilah bagian <br class="hidden md:inline"/>
        dari perubahan! Dukung keberlanjutan dengan <br class="hidden md:inline"/>
        memilih batik ramah lingkungan
      </p>
    </div>
  </section>
  <section class="xl:px-20 md:px-10 px-5 pt-10">
    <div>
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="px-16">
            <div class="lg:h-[400px] lg:w-[400px] border-primary mb-4">
              <img
                class="w-full h-full rounded-[15px] border border-primary object-cover"
                src="/image/produk/kemeja 3.jpg"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
        <div class="px-4 rounded-lg border-2 border-primary">
          <div class="px-5 py-5">
            <h2 class="text-2xl font-bold text-gray-900 mb-5">
              Batik Motif Bunga
            </h2>
            <div class="flex mb-8">
              <div class="mr-4 text-2xl">
                <span class="text-gray-900 font-medium"> Rp. 100.000</span>
              </div>
            </div>

            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold text-gray-700 pr-4">Kondisi:</span>
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-sm font-semibold rounded-full"
                  >BaThrift</span
                >
              </div>
            </div>

            <div class="mb-4">
              <div class="flex items-center justify-between">
                <span class="font-bold text-gray-700">Ukuran:</span>
                <a href="" class="font-semibold text-blue-600 underline"
                  >Size Cart</a
                >
              </div>

              <div class="flex items-center mt-2 mb-8">
                <button
                  class="bg-white text-gray-700 py-2 px-4 rounded-md font-bold mr-2 border border-primary hover:bg-primary hover:text-gray-100"
                >
                  S
                </button>
                <button
                  class="bg-white text-gray-700 py-2 px-3 rounded-md font-bold mr-2 border border-primary hover:bg-primary hover:text-gray-100"
                >
                  M
                </button>
                <button
                  class="bg-white text-gray-700 py-2 px-4 rounded-md font-bold mr-2 border border-primary hover:bg-primary hover:text-gray-100"
                >
                  L
                </button>
                <button
                  class="bg-white text-gray-700 py-2 px-3 rounded-md font-bold mr-2 border border-primary hover:bg-primary hover:text-gray-100"
                >
                  XL
                </button>
                <button
                  class="bg-white text-gray-700 py-2 px-2 rounded-md font-bold mr-2 border border-primary hover:bg-primary hover:text-gray-100"
                >
                  XXL
                </button>
              </div>
            </div>

            <div class="flex mb-8">
              <div class="mr-4">
                <span class="font-bold text-gray-700">Jumlah:</span>
                <div
                  class="flex items-center border border-gray-300 rounded-md"
                >
                  <button
                    class="px-4 py-2 text-gray-700 hover:bg-primary hover:text-white"
                    @click="kurangiJumlah"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    v-model="jumlah"
                    class="w-12 text-center text-gray-700 font-semibold"
                    readonly
                  />
                  <button
                    class="px-4 py-2 text-gray-700 hover:bg-primary hover:text-white"
                    @click="tambahJumlah"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-center -mx-2 mb-4">
              <div class="px-2">
                <button
                  class="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-bold hover:bg-gray-300"
                >
                  Masukan Keranjang
                </button>
              </div>
              <div class="w-1/2 px-2">
                <router-link
                  to="Checkout"
                  class="w-full bg-primary text-white py-2 px-4 rounded-md font-bold hover:bg-primary/90"
                >
                  CheckOut Sekarang
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 mb-10">
      <div class="max-w-7xl mx-auto px-4">
        <div class="border border-primary rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">Deskripsi Produk</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            nemo nobis deleniti fugiat dolorem, eaque dicta placeat ex officiis
            omnis. Veritatis, sunt! Possimus totam expedita quod suscipit? Quae,
            commodi nulla. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempore esse unde maiores quae pariatur repellat beatae
            accusantium possimus voluptas maxime assumenda doloribus, natus
            labore corrupti error itaque neque sunt ab. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quia ex nisi, delectus ipsa, eum
            eaque illo possimus totam corporis dolorem consequatur ad eligendi
            numquam dolorum quos, dignissimos voluptatibus adipisci accusantium.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            dolorum porro voluptatem fugit placeat quibusdam, rem nobis alias
            beatae repudiandae, reiciendis sint et cupiditate molestiae modi,
            minima necessitatibus sapiente sed?
          </p>
        </div>
      </div>
    </div>
  </section>
  <!--CARD PRODUK-->
  <section class="py-5 px-5 mb-20">
    <div class="max-w-7xl mx-auto">
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
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
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
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
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
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
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
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="flex justify-center mt-6">
        <RouterLink
          to="listProduk"
          class="inline-flex items-center px-6 py-3 border bg-primary text-white hover:bg-primary/90 rounded-lg transition"
        >
          Lihat Lebih Banyak<i class="fa-solid fa-arrow-right pl-2"></i>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductPage",
  name: "detailProduk",
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      jumlah: 1,
    };
  },
  methods: {
    tambahJumlah() {
      this.jumlah++;
    },
    kurangiJumlah() {
      if (this.jumlah > 1) this.jumlah--;
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  outline: none;
}
</style>
