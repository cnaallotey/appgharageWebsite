<template>
  <footer>
    <div class="w-full bg-black py-20 mt-32">
      <div class="max-w-screen-xl mx-auto px-5 md:px-10 xl:px-0">
        <div class="w-full flex flex-col lg:flex-row space-y-10 lg:space-y-0">
          <div class="w-full lg:w-1/4 space-y-3">
            <div class="flex items-end space-x-1">
              <img src="../assets/logoonly.png" class="h-24" alt="" />
              <p class="text-lg leading-6 font-medium text-white mb-4">AppGharage</p>
            </div>
            <!-- <div class="flex space-x-3">
              <div class="rounded-full bg-white">
                <img src="../assets/instagram.png" class="h-7 m-2" alt="" />
              </div>
              <div class="rounded-full bg-white flex items-center justify-center">
                <img src="../assets/facebook.png" class="h-7 m-2" alt="" />
              </div>
              <div class="rounded-full bg-white flex items-center">
                <img src="../assets/Vector.png" class="h-6 m-2" alt="" />
              </div>
            </div>-->
          </div>
          <div class="flex flex-1">
            <div class="w-full lg:w-2/4 space-y-6 pr-0 md:pr-20 pt-0 lg:pt-3">
              <h2 class="text-white text-base leading-6 font-medium uppercase">
                Useful Links
              </h2>
              <div class="flex flex-col overflow-hidden space-y-4 text-white">
                <div
                  class="flex items-center group transform hover:translate-x-2 delay-100 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <router-link to="/" class="text-sm font-light group-hover:text-red-500"
                    >Home</router-link
                  >
                </div>
                <div
                  class="flex items-center group transform hover:translate-x-2 delay-100 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <router-link
                    to="about"
                    class="text-sm font-light group-hover:text-red-500"
                    >About</router-link
                  >
                </div>
                <div
                  class="flex items-center group transform hover:translate-x-2 delay-100 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <router-link
                    to="products"
                    class="text-sm font-light group-hover:text-red-500"
                    >Projects</router-link
                  >
                </div>
                <div
                  class="flex items-center group transform hover:translate-x-2 delay-100 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <router-link
                    to="contact"
                    class="text-sm font-light group-hover:text-red-500"
                    >Contact</router-link
                  >
                </div>
              </div>
            </div>
            <div class="w-full lg:w-2/4 space-y-6 pr-0 md:pr-20 pt-0 lg:pt-3">
              <h2 class="text-white text-base uppercase leading-6 font-medium">
                Socials
              </h2>
              <div class="flex flex-col overflow-hidden space-y-4 text-white">
                <div class="flex items-center space-x-2">
                  <img src="../assets/facebooknew.svg" class="w-5 h-5" alt="facebook" />
                  <p class="text-sm font-light hover:text-red-500">Facebook</p>
                </div>
                <div class="flex items-center space-x-2">
                  <img src="../assets/twitter (3).svg" class="w-5 h-5" alt="twitter" />
                  <p class="text-sm font-light hover:text-red-500">Twitter</p>
                </div>
                <div class="flex items-center space-x-2">
                  <img src="../assets/linkedin.svg" class="w-5 h-5" alt="" />
                  <p class="text-sm font-light hover:text-red-500">LinkdIn</p>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-6 pt-0 lg:pt-3 w-full lg:w-1/4">
            <h2 class="text-white text-base uppercase leading-6 font-medium">
              Get in touch
            </h2>
            <div class="space-y-3 text-white">
              <div class="font-light text-sm flex items-center space-x-2">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    /></svg></span
                ><span>26 Bimpong Street, Agbogba, Accra</span>
              </div>
              <div class="font-light text-sm flex items-center space-x-2">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    /></svg
                ></span>
                <span>(+233) 054 - 879 - 7248</span>
              </div>
              <div class="font-light text-sm flex items-center space-x-2">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    /></svg
                ></span>
                <span>appgharage@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-10 border-b-0 border-gray-700 md:border-b pb-4">
          <div class="flex items-center justify-center">
            <p class="font-thin tracking-normal text-center text-gray-100 text-sm">
              Copyright © AppGharage. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
