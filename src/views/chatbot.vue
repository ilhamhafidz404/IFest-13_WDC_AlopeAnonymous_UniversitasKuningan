<template>
  <section
    class="relative text-center py-24 text-sekunder font-primary bg-cover bg-center"
    style="background-image: url('/image/hero.png')"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative z-10">
      <h1 class="font-sekunder text-4xl my-5">Selamat Datang di Chat Bot!</h1>
      <p>
        Asisten virtual yang siap membantu Anda menjelajahi koleksi batik kami.
      </p>
    </div>
  </section>
  <div class="h-screen w-full flex flex-col">
    <div class="room flex-1 overflow-auto p-4 bg-gray-100 space-y-4">
      <div class="chat space-y-4">
        <!-- Sender Messages -->
        <div
          class="sender flex w-[90%] md:w-1/2 ml-auto items-end space-x-3 justify-end"
        >
          <div
            class="message p-4 rounded-l-full rounded-tr-full border bg-[#B89158] text-white"
          >
            <p>Hallo!</p>
          </div>
          <div
            class="icon-user w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border bg-[#D9D9D9]"
          >
            <img
              class="w-10 h-10"
              src="/image/icon/person-icon.png"
              alt="User Icon"
            />
          </div>
        </div>

        <!-- Receiver Messages -->
        <div class="receiver flex w-[90%] md:w-1/2 space-x-3 items-end">
          <div
            class="icon-user w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border bg-[#D9D9D9]"
          >
            <img
              class="w-10 h-10"
              src="/image/logo/logo 4.png"
              alt="Sundara Logo"
            />
          </div>
          <div class="space-y-2">
            <div
              class="message p-4 rounded-r-full rounded-tl-full border bg-primary text-white"
            >
              <p>Hallo Juga!</p>
            </div>
            <div
              class="message p-4 rounded-r-full rounded-tl-full border bg-primary text-white"
            >
              <p>Ada yang bisa dibantu?</p>
            </div>
          </div>
        </div>

        <!-- Sender Messages -->
        <div
          class="sender flex w-[90%] md:w-1/2 ml-auto items-end space-x-3 justify-end"
        >
          <div
            class="message p-4 rounded-l-full rounded-tr-full border bg-[#B89158] text-white"
          >
            <p>Bagaimana cara menukar batik?</p>
          </div>
          <div
            class="icon-user w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border bg-[#D9D9D9]"
          >
            <img
              class="w-10 h-10"
              src="/image/icon/person-icon.png"
              alt="User Icon"
            />
          </div>
        </div>

        <!-- Typing Indicator -->
        <div class="receiver flex w-[90%] md:w-1/2 space-x-3 items-end">
          <div
            class="icon-user w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border bg-[#D9D9D9]"
          >
            <img
              class="w-10 h-10"
              src="/image/logo/logo 4.png"
              alt="Sundara Logo"
            />
          </div>
          <div class="typing p-3 rounded-full border bg-primary flex space-x-1">
            <span
              class="dot w-2 h-2 bg-white rounded-full animate-bounce"
            ></span>
            <span
              class="dot w-2 h-2 bg-white rounded-full animate-bounce delay-150"
            ></span>
            <span
              class="dot w-2 h-2 bg-white rounded-full animate-bounce delay-300"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Form -->
    <div class="type w-full border-t border-primary px-3 py-2 bg-white">
      <div class="form w-full flex items-center space-x-2">
        <button class="paper-clip flex-none p-2">
          <img
            class="w-6"
            src="/image/icon/paper-clip-icon.png"
            alt="Paper Clip"
          />
        </button>
        <input
          class="flex-1 h-[40px] px-3 border rounded-lg outline-none focus:ring focus:ring-primary text-sm md:text-base"
          type="text"
          placeholder="Tulis Pesan ..."
        />
        <button class="emoticon flex-none p-2">
          <img class="w-6" src="/image/icon/emoticon-icon.png" alt="Emoticon" />
        </button>
        <button class="send flex-none p-2">
          <img class="w-6" src="/image/icon/send-icon.png" alt="Send" />
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
}
.animate-bounce {
  animation: bounce 1.5s infinite ease-in-out;
}
.delay-150 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.4s;
}
</style>
