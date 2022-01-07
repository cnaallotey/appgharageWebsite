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
                <div class="flex items-center">
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
                  <router-link to="/" class="text-sm font-light hover:text-red-500"
                    >Home</router-link
                  >
                </div>
                <div class="flex items-center">
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
                  <router-link to="about" class="text-sm font-light hover:text-red-500"
                    >About</router-link
                  >
                </div>
                <div class="flex items-center">
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
                  <router-link to="products" class="text-sm font-light hover:text-red-500"
                    >Projects</router-link
                  >
                </div>
                <div class="flex items-center">
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
                  <router-link to="contact" class="text-sm font-light hover:text-red-500"
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
                <div class="flex items-center">
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                  <p class="text-sm font-light hover:text-red-500">Facebook</p>
                </div>
                <div class="flex items-center">
                  <p class="text-sm font-light hover:text-red-500">Twitter</p>
                </div>
                <div class="flex items-center">
                  <p class="text-sm font-light hover:text-red-500">LinkdIn</p>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-6 pt-0 lg:pt-3 w-full lg:w-1/4">
            <h2 class="text-white text-base uppercase leading-6 font-medium">
              Office location
            </h2>
            <div class="space-y-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.195323841637!2d-0.19806997347822614!3d5.68488772800608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6343057ac424b31!2zNcKwNDEnMDYuNyJOIDDCsDExJzQ0LjgiVw!5e0!3m2!1sen!2sgh!4v1641394351477!5m2!1sen!2sgh"
                width="600"
                height="450"
                class="w-full h-32 rounded-lg"
                style="border: 0"
                loading="lazy"
              ></iframe>
              <p class="text-white text-sm font-light italic text-left">
                26 Bimpong st, Agbogba
              </p>
            </div>
          </div>
        </div>
        <div class="w-full mt-10 border-b-0 border-gray-700 md:border-b">
          <div class="flex flex-wrap -mx-4 overflow-hidden text-white">
            <div class="my-4 px-4 w-1/2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
              <!-- Column Content -->
              <div class="flex items-center justify-center space-x-3">
                <svg
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
                  />
                </svg>
                <p class="font-thin tracking-normal text-center text-gray-100 text-sm">
                  appgharage@gmail.com
                </p>
              </div>
            </div>

            <div class="my-4 px-4 w-1/2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
              <!-- Column Content -->
              <div class="flex items-center justify-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                <p class="font-thin tracking-normal text-center text-gray-100 text-sm">
                  (+233) 054 - 879 - 7248
                </p>
              </div>
            </div>

            <div class="my-4 px-4 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
              <!-- Column Content -->
              <div class="flex items-center justify-center">
                <p class="font-thin tracking-normal text-center text-gray-100 text-sm">
                  Copyright © 2021 AppGharage. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
