<template>
  <div class="max-w-screen-xl mx-auto space-y-5 md:space-y-10 px-5 md:px-10 xl:px-0">
    <div class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-red-700 font-semibold tracking-wide uppercase">
          projects
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Here are our Latest Projects
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-5 overflow-hidden">
      <div class="my-5 px-5 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
        <!-- Column Content -->
        <div class="flex flex-col space-y-5 md:space-y-0">
          <div class="w-full px-5 pt-10 bg-gray-100 rounded-2xl">
            <img
              src="../assets/Macbook Pro.png"
              class="w-full md:transform hover:scale-110 transform-none ease-in-out delay-75 transition-transform"
              alt=""
            />
          </div>
          <div class="w-full flex flex-col justify-center pt-10">
            <h2 class="text-xl leading-6 font-medium text-gray-900 mb-2">
              Ghana Vehicle Import Duty Estimater
            </h2>
            <p
              class="font-normal tracking-normal text-gray-500 text-left leading-normal text-base pb-1 mb-2"
            >
              Our Web App makes it possible to check the import duty and vehicle
              information about any vehicle you would like to import into Ghana stress
              free and all in one space.
            </p>

            <a
              href="https://ghanadutycalculator.com/estimates"
              class="w-full md:w-32 text-center mx-auto md:mx-0 py-2 font-normal text-white rounded-sm flex items-center justify-center space-x-2"
              style="background-color: #b00000; font-size: 14px"
              ><span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  /></svg
              ></span>
              <span>Preview</span></a
            >
          </div>
        </div>
      </div>

      <div class="my-5 px-5 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
        <!-- Column Content -->
      </div>

      <div class="my-5 px-5 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
        <!-- Column Content -->
      </div>
    </div>
  </div>
</template>
