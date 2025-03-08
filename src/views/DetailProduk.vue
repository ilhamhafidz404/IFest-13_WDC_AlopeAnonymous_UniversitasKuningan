<template>
  <div class="bg-primary h-20 w-full bg-opacity-75 backdrop-blur-lg"></div>

  <div class="mt-14 py-8 px-5">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="px-4">
          <div
            class="h-[460px] rounded-lg border border-primary bg-gray-300 mb-4"
          >
            <img
              class="w-full h-full rounded-lg border border-primary object-cover"
              src="/image/produk/kemeja 1.png"
              alt="Product Image"
            />
          </div>
        </div>

        <div class="px-4 rounded-lg border border-primary">
          <h2 class="text-3xl font-bold text-gray-800 mt-10 mb-5">
            Batik Motif Kawung
          </h2>

          <div class="flex mb-8">
            <div class="mr-4 text-2xl">
              <span class="text-gray-900"> Rp. 350.000</span>
            </div>
          </div>

          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Kondisi:</span>
              <span class="text-gray-600"> Second</span>
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
              <div class="flex items-center border border-gray-300 rounded-md">
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
                class="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-gray-300"
              >
                Masukan Keranjang
              </button>
            </div>
            <div class="w-1/2 px-2">
              <router-link
                to="Checkout"
                class="w-full bg-primary text-white py-2 px-4 rounded-md font-semibold hover:bg-primary/90"
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
          Deskripsi Produk: <br />
          Nikmati keanggunan budaya Indonesia dengan Batik motif Kawung, simbol
          kemurnian dan kebijaksanaan yang melegenda. Motif geometris yang
          menyerupai buah kolang-kaling ini menciptakan kesan mewah namun tetap
          sederhana, cocok untuk berbagai acara formal maupun kasual. <br />
          Detail Produk: <br />
          Bahan: Katun Premium / Rayon hasil daur ulang <br />
          Teknik: Tulis / Cap / Kombinasi <br />
          Warna: Beragam pilihan warna klasik & modern br Ukuran: Panjang 2m x
          Lebar 1,15m (kain) atau sesuai ukuran pakaian <br />
          Perawatan: Cuci tangan dengan deterjen lembut, hindari sinar matahari
          langsung untuk menjaga warna awet <br />
          Keunggulan: <br />
          - Nyaman dipakai sehari-hari <br />
          - Motif autentik penuh makna <br />
          - Jahitan rapi & finishing berkualitas tinggi <br />
          - Berkontribusi pada pengurangan limbah tekstil<br />
          Batik Kawung ini bukan sekadar kain, melainkan simbol pelestarian
          budaya dan kepedulian lingkungan. Cocok untuk hadiah spesial, koleksi
          pribadi, hingga fashion statement yang berkelas dan bermakna.
          <br />
          <br />
          Kami siap mengirimkan ke seluruh Indonesia dengan pengemasan rapi dan
          ramah lingkungan. Yuk, tampil memukau sambil menjaga bumi dengan Batik
          Kawung berkelanjutan ini!
        </p>
      </div>
    </div>
  </div>
  <!--CARD PRODUK-->
  <section class="py-5 px-5 mb-20">
    <div class="max-w-7xl mx-auto">
      <div class="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10 dark:bg-gray-700"
          >
            <img
              class="w-full h-64 object-cover rounded-b"
              src="/image/produk/kemeja 3.jpg"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold">Batik Motif Bunga</h3>
                <p class="text-gray-600 text-sm">M-XL</p>
              </div>
              <p class="text-gray-800 font-bold">Rp. 100.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">9.5 (1)</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >BaThrift</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10 dark:bg-gray-700"
          >
            <img
              class="w-full h-64 object-cover rounded-b"
              src="/image/produk/kemeja 4.jpg"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold">Batik Motif Angsa</h3>
                <p class="text-gray-600 text-sm">XL</p>
              </div>
              <p class="text-gray-800 font-bold">Rp. 125.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">-</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >BaThrift</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10 dark:bg-gray-700"
          >
            <img
              class="w-full h-64 object-cover rounded-b"
              src="/image/produk/kemeja 2.jpg"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold">Batik Motif Garuda</h3>
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
        </RouterLink>
        <RouterLink to="detailProduk">
          <div
            class="bg-white border border-primary rounded-lg shadow-lg overflow-hidden mb-10 dark:bg-gray-700"
          >
            <img
              class="w-full h-64 object-cover rounded-b"
              src="/image/produk/rebatik 1.png"
              alt="Batik Motif Kawung"
            />
            <div class="p-4">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold">Tas Kain</h3>
                <p class="text-gray-600 text-sm">-</p>
              </div>
              <p class="text-gray-800 font-bold">Rp. 25.000</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★</span>
                <span class="text-gray-600 ml-1">9.5 (100)</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span
                  class="inline-block px-3 py-1 bg-primary/30 text-primary text-xs font-semibold rounded-full"
                  >ReBatik</span
                >
                <img src="/image/logo/logo 2.png" alt="Logo" class="w-20 h-8" />
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="flex justify-center mt-2">
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
