<template>
  <section
    class="relative text-center py-24 text-sekunder font-primary bg-cover bg-center"
    style="background-image: url('/image/hero.png')"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative z-10">
      <h1 class="font-sekunder text-4xl my-5">Chat Bot</h1>
      <p>
        Selamat datang! Ingin tahu lebih banyak tentang <br />batik ramah
        lingkungan dan cara mendukung <br />keberlanjutan? Tanyakan apa saja!
      </p>
    </div>
  </section>
  <div class="mt-20 h-screen w-full flex flex-col">
    <div
      class="room flex-1 overflow-auto p-4 border border-primary relative rounded mx-10 space-y-4"
    >
      <div class="chat space-y-4">
        <!-- Sender Messages -->
        <div v-for="(message, index) in messages" :key="index">
          <div
            v-if="message.sender == 'user'"
            class="sender flex w-[90%] md:w-1/2 ml-auto items-end space-x-3 justify-end"
          >
            <div
              class="message p-4 rounded-lg border bg-[#B89158] text-white"
            >
              <p>{{ message.text }}</p>
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
          <div
            class="receiver flex w-[90%] md:w-1/2 space-x-3 items-end"
            v-else
          >
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
                class="message p-4 rounded-lg border bg-primary text-white"
              >
                <p>{{ message.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sender Messages -->
        <!-- <div
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
        </div> -->

        <!-- Typing Indicator -->
        <div
          v-if="isLoading"
          class="receiver flex w-[90%] md:w-1/2 space-x-3 items-end"
        >
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
      <!-- Input Form -->
      <div class="type w-full border-primary py-2 px-10 absolute bottom-0 left-0 right-0">
        <div class="form w-full flex items-center space-x-2">
          <!-- <button class="paper-clip flex-none p-2">
            <img
              class="w-6"
              src="/image/icon/paper-clip-icon.png"
              alt="Paper Clip"
            />
          </button> -->
          <input
            class="flex-1 h-[40px]  px-3 border rounded-lg outline-none focus:ring focus:ring-primary text-sm md:text-base"
            v-model="userInput"
            @keyup.enter="sendMessage"
            placeholder="Tulis pesan..."
          />
          <!-- <button class="emoticon flex-none p-2">
            <img
              class="w-6"
              src="/image/icon/emoticon-icon.png"
              alt="Emoticon"
            />
          </button> -->
          <button class="send flex-none p-2" @click="sendMessage">
            <img class="w-6" src="/image/icon/send-icon.png" alt="Send" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div>
      <p v-if="isLoading">Loading...</p>
    </div>
  </div>
</template>

<script>
import { GoogleGenerativeAI } from "https://cdn.jsdelivr.net/npm/@google/generative-ai/+esm";

export default {
  data() {
    return {
      userInput: "",
      isLoading: false,
      messages: [
        {
          text: "Halo! Saya ALOPE chatbot, ada yang bisa saya bantu?",
          sender: "bot",
        },
      ],
      apiKey: import.meta.env.VITE_GEMINI_API_KEY, //ALOPEisAmazing
      allowedKeywords: [
        "pengertian dan informasi seputar batik hingga cara pembuatannya",
        "pengelolaan sampah dari pakaian",
        "cara membuat pakaian dari sampah",
        "cara agar sampah bisa didaur ulang jadi pakaian",
        "cara agar sampah bisa diminimalisir",
        "kalimat sapaan seperti halo dan hai",
      ],
    };
  },
  methods: {
    async sendMessage() {
      this.isLoading = true;
      if (!this.userInput.trim()) return;

      const userText = this.userInput.trim();
      this.messages.push({ text: userText, sender: "user" });

      this.userInput = "";

      try {
        const genAI = new GoogleGenerativeAI(this.apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
          Kamu hanya boleh menjawab jika pertanyaan mengandung salah satu dari keyword berikut: ${this.allowedKeywords.join(
            ", "
          )}.
          Jika pertanyaan tidak relevan dengan keyword tersebut, jawab: "Saya hanya dapat menjawab pertanyaan terkait dengan topik yang ditentukan."

          Pertanyaan: ${userText}
        `;

        const result = await model.generateContent(prompt);
        const botResponse = await result.response.text();

        this.messages.push({ text: botResponse, sender: "bot" });
      } catch (error) {
        this.messages.push({
          text: "Terjadi kesalahan, coba lagi nanti.",
          sender: "bot",
        });
        console.error("Error:", error);
      } finally {
        this.userInput = "";
        this.isLoading = false;
      }
    },
  },
};
</script>

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
