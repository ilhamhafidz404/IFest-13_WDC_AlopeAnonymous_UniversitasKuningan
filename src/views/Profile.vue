<template>
  <div class="bg-primary h-20 w-full bg-opacity-75 backdrop-blur-lg"></div>
  <div class="flex flex-col md:flex-row min-h-screen">
    <!-- Sidebar -->
    <div class="w-full md:w-[300px] bg-white border-r shadow-2xl">
      <div class="p-6">
        <h2 class="text-3xl font-bold mt-5 mb-12">Profile</h2>
        <ul>
          <li
            class="mb-4 flex items-center"
            :class="{ 'border-r-4 border-primary': activeTab === 'informasi' }"
          >
            <i class="fas fa-user mr-3"></i>
            <a
              href="#"
              class="text-gray-900 text-xl hover:text-primary w-full p-2"
              @click="activeTab = 'informasi'"
            >
              Informasi
            </a>
          </li>
          <li
            class="mb-4 flex items-center"
            :class="{ 'border-r-4 border-primary': activeTab === 'histori' }"
          >
            <i class="fas fa-history mr-3"></i>
            <a
              href="#"
              class="text-gray-900 text-xl hover:text-primary w-full p-2"
              @click="activeTab = 'histori'"
            >
              Histori
            </a>
          </li>
          <li
            class="mb-6 flex items-center"
            :class="{
              'border-r-4 border-primary': activeTab === 'pengembalian',
            }"
          >
            <i class="fa-solid fa-arrow-rotate-left mr-3"></i>
            <a
              href="#"
              class="text-gray-900 text-xl hover:text-primary w-full p-2"
              @click="activeTab = 'pengembalian'"
            >
              Pengembalian
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Content Area -->
    <div class="w-full p-4 md:w-3/4 md:p-10">
      <!-- Dynamic Content -->
      <div v-if="activeTab === 'informasi'">
        <h3 class="text-xl mb-4">Informasi Profil</h3>
        <div class="border-b border-gray-900 mb-4"></div>
        <div class="flex items-start space-x-6">
          <div class="relative">
            <div
              class="w-36 h-36 rounded-full border flex items-center justify-center bg-gray-200"
            >
              <i class="fas fa-user text-6xl text-gray-500"></i>
            </div>
            <button
              class="absolute bottom-2 right-2 bg-white border rounded-full flex items-center p-2 shadow"
            >
              <i class="fas fa-image"></i>
            </button>
          </div>
          <div class="flex flex-col space-y-4 w-2/3">
            <div>
              <label class="block text-md font-medium mb-1">Nama Lengkap</label>
              <input
                type="text"
                class="w-full border border-gray-900 p-2 rounded focus:outline-none focus:border-primary"
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div>
              <label class="block text-md font-medium mb-1">Email</label>
              <input
                type="email"
                class="w-full border border-gray-900 p-2 rounded focus:outline-none focus:border-primary"
                placeholder="Masukkan email"
              />
            </div>
            <div>
              <label class="block text-md font-medium">Password</label>
              <input
                type="password"
                class="w-full border border-gray-900 p-2 rounded focus:outline-none focus:border-primary"
                placeholder="Masukkan password"
              />
            </div>
            <div>
              <label class="block text-md font-medium"
                >Konfirmasi Password</label
              >
              <input
                type="password"
                class="w-full border border-gray-900 p-2 rounded focus:outline-none focus:border-primary"
                placeholder="Konfirmasi password"
              />
            </div>
            <button
              class="bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 w-fit"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'histori'">
        <h3 class="text-xl mb-4 text-center md:text-left">Histori</h3>
        <div class="border-b border-gray-900 mb-4"></div>
        <div class="border p-4 md:p-6 rounded-lg shadow-lg">
          <table class="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th class="text-left p-2">Produk</th>
                <th class="text-center p-2">Jumlah</th>
                <th class="text-center p-2">Total</th>
                <th class="p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t">
                <td class="py-4 flex flex-col md:flex-row items-center gap-4">
                  <div class="relative w-16 h-16">
                    <img
                      src="/image/produk/kemeja 1.png"
                      alt="Batik Kawung"
                      class="w-full h-full rounded-lg shadow"
                    />
                    <img
                      src="/image/page/wanita1.png"
                      alt="Batik Pekalongan"
                      class="absolute -bottom-4 -right-3 w-16 h-16 rounded-lg shadow"
                    />
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">PRIA</p>
                    <p class="font-semibold">Batik Motif Kawung</p>
                    <p class="text-sm text-gray-500">WANITA</p>
                    <p class="font-semibold">Batik Pekalongan</p>
                  </div>
                </td>
                <td class="text-center font-bold p-2">3</td>
                <td class="text-center text-primary font-bold text-lg p-2">
                  RP. 1.125.000
                </td>
                <td class="text-right p-2">
                  <button
                    @click="SetShowDetail"
                    class="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="showDetail" class="mt-6">
          <h4 class="text-lg mb-4">Perjalanan Produk</h4>
          <div class="border-b border-gray-900 mb-4"></div>
          <div class="border-t-8 border-primary p-6 rounded-lg shadow-lg">
            <div class="mb-4">
              <h5 class="font-bold">Alamat Pengiriman</h5>
              <p>Taufan Hidayat Akbar</p>
              <p>+62-123-222-124</p>
              <p>
                Lingk. Pasapen Jl. Mangku Bumi No. 123 RT. 01 RW. 05 Kel.
                Kuningan Kab. Kuningan Prov. Jawab Barat (45511)
              </p>
            </div>
            <div>
              <ul class="relative pl-8 text-md mt-20">
                <li class="mb-4 flex items-start">
                  <i class="fas fa-check-circle text-primary mr-4 mt-1"></i>
                  <div class="font-bold">
                    <span class="font-bold">02-02-2025 00:24</span> - Pesanan
                    Telah Sampai
                  </div>
                </li>
                <li class="mb-4 flex items-start">
                  <i class="fas fa-circle text-primary mr-4 mt-1"></i>
                  <div>
                    <span class="font-bold">02-02-2025 00:24</span> - Pesanan
                    diproses di lokasi transit Jawa Barat, Kab Kuningan,
                    Jalaksana.
                  </div>
                </li>
                <li class="mb-4 flex items-start">
                  <i class="fas fa-circle text-primary mr-4 mt-1"></i>
                  <div>
                    <span class="font-bold">02-02-2025 00:24</span> - Pesanan
                    dikirim dari lokasi sortir Banten, Kab Tangerang,.
                  </div>
                </li>
                <li class="mb-4 flex items-start">
                  <i class="fas fa-circle text-primary mr-4 mt-1"></i>
                  <div>
                    <span class="font-bold">02-02-2025 00:24</span> - Pesanan
                    dikirim dari lokasi sortir DKI Jakarta, Jakarta Timur,
                    Cakung Banten.
                  </div>
                </li>
                <li class="mb-4 flex items-start">
                  <i class="fas fa-circle text-primary mr-4 mt-1"></i>
                  <div>
                    <span class="font-bold">02-02-2025 00:24</span> - Pesanan
                    telah diserahkan ke jasa kirim untuk diproses.
                  </div>
                </li>
                <li class="mb-4 flex items-start">
                  <i class="fas fa-circle text-primary mr-4 mt-1"></i>
                  <div>
                    <span class="font-bold">02-02-2025 00:24</span> - Sedang
                    Dikemas
                  </div>
                </li>
                <li class="mb-4 flex items-start">
                  <i class="fa-solid fa-box-open text-primary mr-3 mt-1"></i>
                  <div>
                    <span class="font-bold">02-02-2025 00:24</span> - Pesanan
                    Dibuat
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-6 gap-4 flex justify-end">
            <a
              href="#"
              class="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500"
              @click="activeTab = 'pengembalian'"
            >
              Ajukan Pengembalian
            </a>
            <button
              class="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90"
            >
              Pesanan Diterima
            </button>
          </div>
        </div>
      </div>
      <!--Pengembalian-->
      <div v-if="activeTab === 'pengembalian'" class="p-6">
        <h1 class="text-2xl mb-4">Form Pengembalian</h1>
        <div class="border-b border-gray-900 mb-4"></div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Alasan Pengembalian</h2>
          <label class="block mb-2 accent-primary"
            ><input type="radio" name="alasan" value="ukuran" class="mr-2" />
            Ukuran tidak sesuai</label
          >
          <label class="block mb-2 accent-primary"
            ><input type="radio" name="alasan" value="rusak" class="mr-2" />
            Barang cacat/rusak</label
          >
          <label class="block mb-2 accent-primary"
            ><input type="radio" name="alasan" value="salah" class="mr-2" />
            Produk tidak sesuai dengan pesanan</label
          >
          <label class="block mb-2 accent-primary">
            <input type="radio" name="alasan" value="lainnya" class="mr-2" />
            Lainnya
            <input
              placeholder="Jelaskan alasan..."
              class="border p-2 mt-2 w-full rounded-md focus:outline-none focus:border-primary"
            />
          </label>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Permintaan Pengembalian</h2>
          <label class="block mb-2 accent-primary"
            ><input
              type="radio"
              name="permintaan"
              value="tukar-ukuran"
              class="mr-2"
            />
            Tukar dengan ukuran yang benar</label
          >
          <label class="block mb-2 accent-primary"
            ><input
              type="radio"
              name="permintaan"
              value="tukar-produk"
              class="mr-2"
            />
            Tukar dengan produk lain</label
          >
          <label class="block mb-2 accent-primary"
            ><input
              type="radio"
              name="permintaan"
              value="refund"
              class="mr-2"
            />
            Pengembalian dana (refund)</label
          >
        </div>

        <div class="w-full md:w-1/2">
          <label class="block text-lg font-medium text-gray-900"
            >Upload Gambar dan Video</label
          >
          <div
            class="relative w-full h-64 border-2 border-dashed border-primary rounded-lg flex items-center justify-center cursor-pointer overflow-hidden mt-2"
            onclick="document.getElementById('file-upload').click()"
          >
            <img
              id="preview"
              class="absolute w-full h-full object-cover hidden"
            />
            <div
              id="placeholder"
              class="flex flex-col items-center text-gray-400"
            >
              <svg
                class="w-16 h-16 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h16M15 12h5"
                ></path>
              </svg>
              <span>Klik untuk unggah gambar</span>
            </div>
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            class="hidden"
            onchange="previewImage(event)"
          />
          <p class="pt-3 text-sm text-red-600">
            *Foto barang yang ingin dikembalikan (jika cacat atau salah kirim)
          </p>
        </div>
        <div class="border p-4 md:p-6 rounded-lg shadow-lg">
          <table class="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th class="text-left p-2">Produk</th>
                <th class="text-center p-2">Jumlah</th>
                <th class="text-center p-2">Total</th>
                <th class="p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t">
                <td class="py-4 flex flex-col md:flex-row items-center gap-4">
                  <div class="relative w-16 h-16">
                    <img
                      src="/image/produk/kemeja 1.png"
                      alt="Batik Kawung"
                      class="w-full h-full rounded-lg shadow"
                    />
                    <img
                      src="/image/page/wanita1.png"
                      alt="Batik Pekalongan"
                      class="absolute -bottom-4 -right-3 w-16 h-16 rounded-lg shadow"
                    />
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">PRIA</p>
                    <p class="font-semibold">Batik Motif Kawung</p>
                    <p class="text-sm text-gray-500">WANITA</p>
                    <p class="font-semibold">Batik Pekalongan</p>
                  </div>
                </td>
                <td class="text-center font-bold p-2">3</td>
                <td class="text-center text-primary font-bold text-lg p-2">
                  RP. 1.125.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex flex-col items-end mb-4 mt-5">
          <div>
            <input
              id="konfirmasi"
              type="checkbox"
              class="w-4 h-4 border-gray-300 rounded accent-primary"
            />
            <label for="konfirmasi" class="ml-3 text-md font-medium">
              Pernyataan bahwa informasi yang diberikan benar
            </label>
          </div>
          <button
            type="button"
            class="bg-primary text-white py-3 px-6 rounded-lg mt-2"
          >
            Ajukan Pengembalian
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      activeTab: "informasi",
      showDetail: false,
    };
  },
  methods: {
    SetShowDetail() {
      this.showDetail = !this.showDetail;
    },
  },
  name: "profile",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
