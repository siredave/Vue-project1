<template>
  <div class="flex w-screen h-screen">
    <div class="w-2/5 relative">
      <img
        :src="currentImage"
        class="h-full w-full object-cover absolute inset-0 z-0"
      />
      <div class="z-20 inset-0 absolute">
        <div
          class="w-full h-full flex justify-center items-end pb-14 text-white"
        >
          <div
            class="text-4xl font-bold text-center leading-tight drop-shadow-lg"
          >
            Discover a World of
            <span class="text-green-400">Endless Possibilities</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-3/5 flex flex-col h-full p-6">
      <div class="flex-1 flex flex-col justify-center items-center">
        <slot v-if="isLogin" name="login" />
        <slot v-else name="signup" />

        <button @click="toggleForm" class="mt-4 text-blue-500 hover:underline">
          {{ isLogin ? "Go to Signup" : "Go to Login" }}
        </button>
      </div>

      <div
        class="flex items-center justify-between text-gray-700 text-sm font-light"
      >
        <div>
          By signing up, you agree to our
          <a class="text-green-500 font-semibold" href="#">Terms</a> and
          <a class="text-green-500 font-semibold" href="#">Privacy Policy</a>
        </div>
        <div>© 2019 Tinylabs. All rights reserved.</div>
      </div>
    </div>
  </div>
</template>
<script>
import movie2 from "@/assets/vuemovie2.jpg";
import movie3 from "@/assets/vuemovie3.jpg";

export default {
  data() {
    return {
      isLogin: true,
      currentImageIndex: 0,
      images: [movie2, movie3],
    };
  },
  methods: {
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },

    toggleForm() {
      this.isLogin = !this.isLogin;
      this.nextImage();
    },
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },
};
</script>