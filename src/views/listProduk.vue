<template>
  <section class="bg-primary text-center py-24 text-sekunder font-primary">
    <h1 class="font-sekunder text-4xl my-5">List Produk</h1>
    <p>
      Temukan beragam batik berkualitas, dari batik baru, second, <br />
      hingga koleksi ReBatik—mengusung tradisi, keberlanjutan, <br />
      dan gaya ramah lingkungan.
    </p>
  </section>
  <section class="grid grid-cols-4 container mx-auto gap-10 my-10">
    <div class="border-primary border-2 py-4 px-3 rounded">
      <div class="relative">
        <input
          type="text"
          id="search"
          placeholder="Cari Batik"
          class="w-full border border-primary rounded-lg p-2 focus:ring-red-500 focus:border-red-500"
        />
        <i class="fas fa-search absolute right-3 top-3 text-primary"></i>
      </div>
      <h2 class="py-4">Gender</h2>
      <div class="flex flex-wrap gap-3">
        <button
          class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Pria
        </button>
        <button
          class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Wanita
        </button>
      </div>
      <h2 class="py-4">Kategori</h2>
      <div class="flex gap-3 flex-wrap">
        <button
          class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Baru
        </button>
        <button
          class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Second
        </button>
        <button
          class="mx-2 px-6 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          ReBatik
        </button>
      </div>
      <h2 class="py-4">Ukuran</h2>
      <div class="flex gap-3 flex-wrap">
        <button
          class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          XS
        </button>
        <button
          class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          M
        </button>
        <button
          class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          L
        </button>
        <button
          class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          XL
        </button>
        <button
          class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          2XL
        </button>
        <button
          class="mx-2 px-5 py-3 text-sm font-medium rounded border border-primary hover:text-white hover:bg-primary hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          3XL
        </button>
      </div>
      <h2 class="py-4">Harga</h2>
      <div class="mx-2 flex gap-4 mb-3">
        <input type="checkbox" />
        <p class="text-sm">Tinggi Ke Rendah</p>
      </div>
      <div class="mx-2 flex gap-4">
        <input type="checkbox" />
        <p class="text-sm">Rendah Ke Tinggi</p>
      </div>
    </div>
    <div>
      <a href="">
        <div class="border-primary border-2 rounded-[15px]">
          <img class="object-cover" src="../assets/kemeja 1.png" alt="" />
          <div class="py-4 px-3">
            <h1>Batik Motif Kawung</h1>
          </div>
        </div>
      </a>
    </div>
    <div>1</div>
    <div>1</div>
  </section>
</template>
