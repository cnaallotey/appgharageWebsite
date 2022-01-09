<template>
  <div class="max-w-screen-xl mx-auto space-y-5 md:space-y-10 px-5 md:px-10 lg:px-0">
    <h1
      class="font-bold text-gray-900 text-left"
      style="font-size: 40px; letter-spacing: 0.2px"
    >
      Latest Projects
    </h1>
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 p-5">
        <img src="../assets/Macbook Pro.png" class="w-full" alt="" />
      </div>
      <div
        class="w-full md:w-1/2 pr-5 pl-0 lg:pl-20 space-y-5 flex flex-col justify-center"
      >
        <h2 class="font-semibold tracking-normal text-gray-700" style="font-size: 24px">
          Ghana Vehicle Import Duty Estimater
        </h2>
        <p
          class="font-normal tracking-normal text-gray-500 leading-normal"
          style="font-size: 16px"
        >
          Our Web App makes it possible to check the import duty and vehicle information
          about any vehicle you would like to import into Ghana stress free and all in one
          space.
        </p>
        <div>
          <router-link
            to="Products"
            class="px-10 py-3 font-normal text-base text-white rounded-md"
            style="background-color: #b00000"
          >
            Visit Website
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
