<template>
  <div class="relative z-10 overflow-visible">
    <div class="absolute z-0 top-0 right-0 w-1/3 -mt-96 overflow-hidden lg:-mt-56">
      <!--<img src="../assets/Rectangle.png" class="w-full" alt="" />-->
      <div
        class="bg-red-100 rounded-bl-full"
        style="min-height: 900px; min-width: 800px"
      ></div>
    </div>

    <div
      class="relative max-w-screen-xl mx-auto px-5 md:px-10 xl:px-0 space-y-16 md:space-y-24 z-10 overflow-hidden"
    >
      <div class="w-full overflow-hidden">
        <div class="flex flex-col-reverse lg:flex-row lg:space-y-0 items-center">
          <div class="w-full lg:w-3/5 space-y-5">
            <h1
              class="text-6xl tracking-tight font-black text-gray-900 sm:text-6xl md:text-6xl"
            >
              Premium Software Solutions for Your Business
            </h1>
            <div class="pr-0 lg:pr-40">
              <p
                class="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0"
              >
                AppGharage is your technology partner for innovative and impactful digital
                solutions.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-2/5 mb-10 lg:mb-0">
            <img
              src="../assets/heroimg.svg"
              class="w-full px-5 lg:px-0 hidden md:block"
              alt=""
            />
          </div>
        </div>
      </div>

      <ourservicesVue />
      <whowearecompVue />

      <div class="w-full space-y-10 md:space-y-10">
        <div class="bg-transparent">
          <div class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h1
                class="font-semibold tracking-normal font-gray-900 text-left md:text-center text-3xl md:text-4xl"
              >
                Projects
              </h1>
              <h2
                class="text-lg md:text-xl text-gray-500 text-left md:text-center mt-0 md:mt-2"
              >
                Here are some of our latest projects
              </h2>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row space-x-0 lg:space-x-20 space-y-10 md:space-y-0"
        >
          <div class="w-full md:w-1/2 px-16 md:px-5 rounded-3xl">
            <img src="../assets/@ Macbook Pro.png" class="w-full px-0 lg:px-10" alt="" />
          </div>
          <div class="w-full md:w-1/2 pl-0 flex flex-col justify-center">
            <h2
              class="font-semibold tracking-tight leading-normal text-gray-900"
              style="font-size: 24px"
            >
              Ghana Vehicle Import Duty Estimater
            </h2>
            <p
              class="font-normal tracking-normal text-gray-500 text-left leading-normal text-base pb-1 mb-4 mt-5"
            >
              Our Web App makes it possible to check the import duty and vehicle
              information about any vehicle you would like to import into Ghana stress
              free and all in one space.
            </p>

            <a
              href="https://ghanadutycalculator.com/estimates"
              target="_blank"
              class="w-1/2 md:w-48 text-center py-3 mt-1 font-medium text-base cursor-pointer text-white rounded-md flex items-center justify-center"
              style="background-color: #b00000"
              ><span>Visit Website</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ourservicesVue from "./ourservices.vue";
import whowearecompVue from "./whowearecomp.vue";
export default {
  components: {
    ourservicesVue,
    whowearecompVue,
  },
};
</script>

<style>
.heading {
  font-size: 64px;
  line-height: 77px;
}

.herocaption {
  font-size: 20px;
  letter-spacing: 5%;
  line-height: 28px;
}
</style>
