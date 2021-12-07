<template>
  <div>
    <div class="w-full bg-black py-20 mt-20">
      <div class="max-w-screen-xl mx-auto px-5 md:px-10 xl:px-0">
        <div class="w-full flex flex-col lg:flex-row space-y-10 lg:space-y-0">
          <div class="w-full lg:w-1/4 space-y-3">
            <div class="flex items-center space-x-1">
              <img src="../assets/logoonly.png" class="h-12" alt="" />
              <p class="font-semibold tracking-normal text-white" style="font-size: 16px">
                AppGharage
              </p>
            </div>
            <div class="flex space-x-3">
              <div class="rounded-full bg-white">
                <img src="../assets/instagram.png" class="h-7 m-2" alt="" />
              </div>
              <div class="rounded-full bg-white flex items-center justify-center">
                <img src="../assets/facebook.png" class="h-7 m-2" alt="" />
              </div>
              <div class="rounded-full bg-white flex items-center">
                <img src="../assets/Vector.png" class="h-6 m-2" alt="" />
              </div>
            </div>
          </div>
          <div class="w-full lg:w-2/4 space-y-2 pr-20 pt-0 lg:pt-3">
            <h2 class="text-white font-medium tracking-normal" style="font-size: 20px">
              Resources
            </h2>
            <div class="flex flex-wrap -mx-3 overflow-hidden">
              <div class="my-3 px-3 w-1/2 overflow-hidden cursor-pointer">
                <!-- Column Content -->
                <router-link
                  to="/about"
                  class="text-white tracking-normal font-normal hover:text-red-500 hover:underline cursor-pointer"
                  style="font-size: 16px"
                  >About Us</router-link
                >
              </div>

              <div class="my-3 px-3 w-1/2 overflow-hidden">
                <!-- Column Content -->
                <router-link
                  to="/products"
                  class="text-white tracking-normal font-normal hover:text-red-500 hover:underline cursor-pointer"
                  style="font-size: 16px"
                  >Product</router-link
                >
              </div>

              <div class="my-3 px-3 w-1/2 overflow-hidden">
                <!-- Column Content -->
                <router-link
                  to="/contact"
                  class="text-white tracking-normal font-normal hover:text-red-500 hover:underline cursor-pointer"
                  style="font-size: 16px"
                  >Contact</router-link
                >
              </div>

              <div class="my-3 px-3 w-1/2 overflow-hidden">
                <!-- Column Content -->
                <router-link
                  to="/jobs"
                  class="text-white tracking-normal font-normal hover:text-red-500 hover:underline cursor-pointer"
                  style="font-size: 16px"
                  >Careers</router-link
                >
              </div>
            </div>
          </div>
          <div class="space-y-5 pt-0 lg:pt-3 w-full lg:w-1/4">
            <h2 class="text-white font-medium tracking-normal" style="font-size: 20px">
              Signup to our Newsletter
            </h2>
            <form action="" class="space-y-5">
              <input
                type="email"
                placeholder="Enter your email address"
                class="w-full bg-white py-3 px-2 rounded-sm font-gray-900 font-normal"
                style="font-size: 16px"
              />
              <button
                class="px-6 py-3 font-semibold navlinks text-white rounded-md"
                style="background-color: #b00000"
              >
                Sign Up Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-black font-normal tracking-normal text-center text-white py-7"
      style="font-size: 16px"
    >
      Copyright AppGharage ©2021
    </div>
  </div>
</template>
