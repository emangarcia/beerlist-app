<template>
  <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4 bg-transparent">
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <div>
        <NuxtLink to="/">
          <SvgsLogo class="text-white" />
        </NuxtLink>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-sm font-sans items-center text-white">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/beers">Beers</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/">About</NuxtLink>
          </li> -->

          <li>
            <NuxtLink
              to="/beers/add"
              class="cta bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold flex items-center"
              ><UIcon name="i-heroicons-plus-circle mr-2" />Add Beer</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-[50%] bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center py-4 border-b"
        >
          <SvgsLogo  class="text-black"/>
        </span>

        <ul class="divide-y font-sans text-black">
          <li>
            <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/beers" @click="isOpen = false" class="my-4 inline-block">Beers</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block">About</NuxtLink>
          </li> -->
          <li>
            <NuxtLink
              to="/beers/add"
              @click="isOpen = false"
              class="cta my-8 w-full text-center bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold flex items-center"
              ><UIcon name="i-heroicons-plus-circle mr-2" />Add Beer</NuxtLink
            >
          </li>
        </ul>

        <div class="follow">
          <p class="font-sans text-black text-sm font-semibold">Follow us:</p>
          <div class="social flex space-x-5 mt-2">
            <a href="#" class="text-primary text-xl">
              <UIcon name="i-formkit:facebook" dynamic />
            </a>
            <a href="#" class="text-primary text-xl">
              <UIcon name="i-formkit:instagram" dynamic />
            </a>
            <a href="#" class="text-primary text-xl">
              <UIcon name="i-formkit:github" dynamic/>
            </a>
            <a href="#" class="text-primary text-xl">
              <UIcon name="i-formkit:email" dynamic />
            </a>
          </div>
        </div>
      </aside>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
