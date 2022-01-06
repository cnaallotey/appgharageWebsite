<template>
  <div class="relative z-10 overflow-visible">
    <div class="absolute z-0 top-0 right-0 w-1/3 -mt-96 overflow-hidden lg:-mt-56">
      <!--<img src="../assets/Rectangle.png" class="w-full" alt="" />-->
      <div class=" bg-red-100 rounded-bl-full" style="min-height:900px; min-width:800px" ></div>
    </div>

    <div
      class="relative max-w-screen-xl mx-auto px-10 md:px-10 xl:px-0 space-y-8 md:space-y-32 z-10 overflow-hidden"
    >
      <div class="w-full overflow-hidden">
        <div class="flex flex-col-reverse lg:flex-row lg:space-y-0 items-center">
          <div class="w-full lg:w-3/5 space-y-5">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              Premium Software Solutions for Your Business
            </h1>
            <div class="pr-0 lg:pr-40">
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                AppGharage is your technology partner for innovative and impactful digital
                solutions.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-2/5 mb-10 lg:mb-0">
            <img src="../assets/heroimg.svg" class="w-full px-5 lg:px-0" alt="" />
          </div>
        </div>
      </div>
      
      <ourservicesVue/>
      <whowearecompVue/>
   

      <div class="w-full space-y-10 md:space-y-10">
        <div class=" bg-white">
      <div class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-red-700 font-semibold tracking-wide uppercase">
            Latest Projects
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Here are some of our projects
          </p>
        </div>
      </div>
    </div>
        <div
          class="flex flex-col md:flex-row space-x-0 md:space-x-20 space-y-10 md:space-y-0"
        >
          <div class="w-full md:w-1/2 px-5">
            <img src="../assets/Macbook Pro.png" class="w-full" alt="" />
          </div>
          <div
            class="w-full md:w-1/2 pl-0 space-y-2 flex flex-col justify-center"
          >
            <h2
              class="font-semibold tracking-normal leading-normal text-left text-gray-900"
              style="font-size: 24px"
            >
              Ghana Vehicle Import Duty Estimater
            </h2>
            <p
              class="font-normal tracking-normal text-gray-500 text-left leading-normal text-base pb-1"
            
            >
              Our Web App makes it possible to check the import duty and vehicle
              information about any vehicle you would like to import into Ghana stress
              free and all in one space.
            </p>

            <a
              href="https://ghanadutycalculator.com/estimates" target="_blank"
              class="w-full md:w-48 text-center py-3 font-normal cursor-pointer  text-white rounded-md"
              style="background-color: #b00000; font-size: 14px"
              >Visit Website</a
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
  components:{
    ourservicesVue, whowearecompVue
  }
}



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
