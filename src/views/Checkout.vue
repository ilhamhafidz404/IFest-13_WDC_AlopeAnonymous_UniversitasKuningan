<template>
  <section
    class="relative text-center py-24 text-sekunder font-primary bg-cover bg-center"
    style="background-image: url('/image/hero.png')"
  >
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    <div class="relative z-10">
      <h1 class="font-sekunder text-4xl my-5">CheckOut</h1>
      <p>
        Cek kembali produk pilihan Anda dan jadilah bagian <br class="hidden md:inline"/>
        dari perubahan! Dukung keberlanjutan dengan <br class="hidden md:inline"/>
        memilih batik ramah lingkungan
      </p>
    </div>
  </section>
  <section class="xl:px-20 md:px-10 px-5 pt-10">
    <h1 class="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">
      CheckOut
    </h1>
    <p class="text-gray-700 font-semibold mb-6 text-sm sm:text-base">
      2 produk Akan segera di Beli
    </p>
    <div
      class="px-4 sm:px-10 lg:px-20 mt-5 container mx-auto p-6 border-2 border-primary bg-white shadow-xl rounded-lg"
    >
      <h2 class="text-xl sm:text-2xl font-medium mb-6 text-gray-900">Produk Dipesan</h2>

      <div class="hidden sm:grid grid-cols-4 font-bold text-gray-900 mb-4">
        <div class="text-left">Produk</div>
        <div class="text-center">Harga</div>
        <div class="text-center">Jumlah</div>
        <div class="text-center">Total</div>
      </div>

      <div class="border-t py-4" v-for="item in products" :key="item.id">
        <div
          class="grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-4"
        >
          <div class="flex items-start gap-4">
            <img :src="item.image" alt="Produk" class="w-16 h-16 rounded" />
            <div>
              <p class="text-sm">{{ item.category }}</p>
              <p class="text-base sm:text-lg font-semibold">{{ item.name }}</p>
              <p class="text-sm sm:text-md text-gray-700">Kondisi  {{ item.condition }}</p>
              <p class="text-sm sm:text-md text-gray-700">Ukuran  {{ item.size }}</p>
            </div>
          </div>
          <div class="font-bold text-center text-sm sm:text-base">
            Rp. {{ item.price.toLocaleString() }}
          </div>
          <div class="font-bold text-center text-sm sm:text-base">
            {{ item.quantity }}
          </div>
          <div class="font-bold text-center text-sm sm:text-base">
            Rp. {{ (item.price * item.quantity).toLocaleString() }}
          </div>
        </div>
      </div>

      <div
        class="border-t pt-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <h5 class="text-base sm:text-sm">Pesan Untuk Penjual</h5>
        <input
          type="text"
          placeholder="Kasih Catatan! (Opsional)"
          class="w-full sm:w-1/2 p-2 border rounded-lg text-sm font-medium border-primary"
        />
        <div class="text-base sm:text-lg">
          Total Pesanan ({{ totalQuantity }} Produk):
          <span class="text-primary font-bold">
            Rp. {{ totalPrice.toLocaleString() }}
          </span>
        </div>
      </div>
    </div>

    <!-- Alamat Pengiriman -->
    <div
      class="px-20 mt-5 container mx-auto p-6 bg-white shadow-xl rounded-lg border-t-8 border-primary"
    >
      <h2 class="text-2xl font-bold mb-6">Alamat Pengiriman</h2>
      <div class="flex justify-between items-start border-b pb-4">
        <div>
          <p class="font-semibold">Taufan Hidayatul Akbar</p>
          <p>+62-123-321-1234</p>
          <p>
            Lingk. Pasapen Jl. Mangku Bumi No. 123 RT. 01 RW. 05 Kel. Kuningan
            Kab. Kuningan Prov. Jawa Barat (4551)
          </p>
        </div>
        <button class="text-blue-500">Ubah</button>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <div>
          <p class="font-semibold">Hemat</p>
          <p class="mt-2">Garansi tiba: 3 - 4 Mar</p>
        </div>
        <button class="text-blue-500">Ubah</button>
      </div>
    </div>

    <!-- Diskon / Promo -->
    <div
      class="px-20 mt-10 mb-20 container border-2 border-primary mx-auto p-6 bg-wwhite shadow-xl rounded-lg"
    >
      <h2 class="text-2xl font-bold mb-6">Diskon / Promo</h2>
      <select class="w-full p-2 border rounded-lg">
        <option>ReBatik Discount 10%</option>
      </select>
    </div>

    <div
      class="mt-10 mb-20 container mx-auto p-6 border-2 border-primary bg-white shadow-xl rounded-lg"
    >
      <h2 class="text-2xl font-bold mb-6">Pembayaran</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Bagian Pilihan Bank -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Pilih Bank</h3>
          <div class="space-y-4">
            <label class="flex items-center space-x-4">
              <input type="radio" name="bank" checked class="accent-primary" />
              <img src="/image/icon/bca.png" alt="Bank BCA" class="w-10 h-10" />
              <span class="text-lg">Bank BCA</span>
            </label>
            <label class="flex items-center space-x-4">
              <input type="radio" name="bank" class="accent-primary" />
              <img src="/image/icon/bni.png" alt="Bank BNI" class="w-10 h-10" />
              <span class="text-lg">Bank BNI</span>
            </label>
            <label class="flex items-center space-x-4">
              <input type="radio" name="bank" class="accent-primary" />
              <img
                src="/image/icon/mandiri.png"
                alt="Bank Mandiri"
                class="w-10 h-10"
              />
              <span class="text-lg">Bank Mandiri</span>
            </label>
            <label class="flex items-center space-x-4">
              <input type="radio" name="bank" class="accent-primary" />
              <img src="/image/icon/bri.png" alt="Bank BRI" class="w-10 h-10" />
              <span class="text-lg">Bank BRI</span>
            </label>
            <label class="flex items-center space-x-4">
              <input type="radio" name="bank" class="accent-primary" />
              <img
                src="/image/icon/permata.png"
                alt="Bank Permata"
                class="w-10 h-10"
              />
              <span class="text-lg">Bank Permata</span>
            </label>
            <label class="flex items-center space-x-4">
              <input type="radio" name="bank" class="accent-primary" />
              <img
                src="/image/icon/lainya.png"
                alt="Bank Lainnya"
                class="w-10 h-10"
              />
              <span class="text-lg">Bank Lainnya</span>
            </label>
          </div>
        </div>

        <!-- Bagian Rincian Pembayaran -->
        <div class="border-2 border-primary rounded">
          <div class="px-5 py-5">

            <h3 class="text-xl font-semibold mb-4">Rincian Pembayaran</h3>
            <div class="space-y-3">
              <div class="flex justify-between gap-4">
                <span>Subtotal keranjang</span>
                <span>Rp. 215.000</span>
              </div>
              <div class="flex justify-between text-red-500">
                <span>Voucher Diskon</span>
                <span>- Rp. 112.500</span>
              </div>
              <div class="flex justify-between">
                <span>Subtotal Pengiriman</span>
                <span>Rp. 21.500</span>
              </div>
              <div class="flex justify-between">
                <span>Biaya Layanan</span>
                <span>Rp. 2.000</span>
              </div>
              <div class="border-t pt-20 flex justify-between font-bold">
                <span>TOTAL</span>
                <span class="text-primary">Rp. 217.000</span>
              </div>
            </div>
  
            <div class="mt-4 flex justify-end">
              <button
                class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90"
              >
                Buat Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          category: "PRIA",
          name: "Batik Motif Bunga",
          condition: "BaThrif",
          size: "XL",
          price: 100000,
          quantity: 2,
          image: "/image/produk/kemeja 3.jpg",
        },
        {
          id: 2,
          category: "Unisex",
          name: "Topi Fashion",
          condition: "ReBatik",
          size: "L",
          price: 15000,
          quantity: 1,
          image: "/image/produk/rebatik 3.png",
        },
      ],
    };
  },
  computed: {
    totalQuantity() {
      return this.products.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice() {
      return this.products.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
};
</script>
