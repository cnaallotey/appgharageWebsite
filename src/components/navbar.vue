<template>
  <div
    class="sticky top-0 z-20 w-full nav-fixed"
    :class="[open ? 'bg-white shadow' : 'bg-none shadow-none']"
  >
    <section class="relative max-w-screen-xl mx-auto px-5 md:px-10 xl:px-0">
      <div class="w-full py-1 flex items-center justify-between">
        <router-link to="/" class="flex items-center select-none cursor-pointer">
          <img src="../assets/logoonly.png" class="h-12 md:h-16" alt="logo" />
          <p class="font-bold text-gray-700 text-lg md:text-2xl">AppGharage</p>
        </router-link>

        <div class="hidden lg:flex space-x-7 items-center">
          <ul class="navlinks inline-flex font-medium space-x-7 cursor-pointer">
            <li
              class="border-b-2 border-transparent text-base text-gray-500 hover:border-red-800 transistion ease-linear delay-100 focus:text-red-700"
            >
              <router-link to="/" class="hover:border-b-2 border-red-700">
                Home
              </router-link>
            </li>
            <li
              class="border-b-2 font-medium border-transparent hover:border-red-800 focus:text-red-700 text-base text-gray-500"
            >
              <router-link to="/products"> Projects </router-link>
            </li>
            <li
              class="border-b-2 font-medium text-base text-gray-500 border-transparent hover:border-red-800 focus:text-red-700"
            >
              <router-link to="/about"> About </router-link>
            </li>
          </ul>
          <router-link
            to="/contact"
            class="px-6 py-3 font-semibold navlinks text-white rounded-md hover:shadow-md"
            style="background-color: #b00000"
            >Contact Us</router-link
          >
        </div>

        <div class="navbar-burger self-center lg:hidden" @click="open = !open">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            v-if="!open"
            class="h-6 w-6 hover:text-red-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            v-if="open"
            class="h-6 w-6 hover:text-red-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
    <div class="relative lg:hidden -mt-2 z-10">
      <button
        @click="open = !open"
        class="hidden md:hidden flex-row items-center w-full px-4 py-2 text-sm font-semibold text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        <span>Dropdown</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          :class="[open ? 'rotate-180' : ' rotate-0']"
          class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__slideInRight animate__faster"
        leave-active-class="animate__animated animate__slideOutRight animate__faster"
      >
        <div
          v-if="open"
          x-transition:enter="transition ease-out duration-100"
          x-transition:enter-start="transform opacity-0 scale-95"
          x-transition:enter-end="transform opacity-100 scale-100"
          x-transition:leave="transition ease-in duration-75"
          x-transition:leave-start="transform opacity-100 scale-100"
          x-transition:leave-end="transform opacity-0 scale-95"
          class="absolute right-0 w-full mt-2 origin-top-right rounded-md z-10 shadow-lg"
        >
          <div class="px-5 py-2 space-y-2 bg-white shadow dark-mode:bg-gray-800">
            <router-link
              to="/"
              class="flex px-4 py-3 mt-2 navlinks font-medium bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-red-700 focus:text-red-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              Home</router-link
            >
            <router-link
              to="/products"
              class="flex px-4 py-3 mt-2 navlinks font-medium bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-red-700 focus:text-red-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Projects</router-link
            >
            <router-link
              to="/about"
              class="flex px-4 py-3 mt-2 navlinks font-medium bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-red-700 focus:text-red-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About</router-link
            >
            <router-link to="/contact">
              <button
                class="text-white w-full mt-4 mb-2 rounded-md transition ease-linear delay-75 py-3 font-semibold text-center navlinks"
                style="background-color: #b00000"
              >
                Contact Us
              </button>
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      drop: false,
    };
  },
  created() {
    // window.onscroll = () => {
    //   console.log(window.scrollY)
    //     if (window.scrollY > 50) {
    //         this.isscroll=true;
    //     } else {
    //         this.isscroll=false;
    //     }
    // };
  },
};
</script>

<style>
.navlinks {
  font-size: 16px;
}
</style>
