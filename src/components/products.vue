<template>
  <div class="max-w-screen-xl mx-auto space-y-5 md:space-y-10 px-5 md:px-10 lg:px-0">
    <div>
      <h1
        class="font-bold text-gray-900 text-left md:text-center"
        style="font-size: 40px; letter-spacing: 0.2px"
      >
        Latest Projects
      </h1>
      <p
        class="font-normal text-lg text-gray-500 tracking-normal text-left md:text-center"
        style="letter-spacing: 0.2px; font-size: 18px"
      >
        Here are the products we have successfully built
      </p>
    </div>

    <div class="flex flex-col md:flex-row w-full lg:w-4/6 mx-auto hidden">
      <div class="w-full md:w-1/2 lg:1/4 flex justify-center">
        <img src="../assets/Macbook Pro.png" class="w-auto h-auto" alt="" />
      </div>
      <div class="w-full lg:w-1/2 pl-0 flex flex-col justify-between ml-0 md:ml-10">
        <h2
          class="font-semibold tracking-normal leading-none text-gray-900 mt-10 md:mt-0"
          style="font-size: 24px"
        >
          Ghana Vehicle Import Duty Estimater
        </h2>
        <p class="font-normal tracking-normal text-gray-500 mt-2" style="font-size: 16px">
          Our Web App makes it possible to check the import duty and vehicle information
          about any vehicle you would like to import into Ghana stress free and all in one
          space.
        </p>
        <a
          href="https://ghanadutycalculator.com/estimates"
          target="_blank"
          class="w-full md:w-40 text-center py-3 font-normal text-base mt-2 text-white rounded-md"
          style="background-color: #b00000"
        >
          Visit Website
        </a>
        <div></div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-5 overflow-hidden">
      <div class="my-5 px-5 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/3">
        <!-- Column Content -->
        <div class="bg-white pb-8">
          <div
            class="h-full border-2 border-gray-300 rounded-none overflow-hidden"
            style="background-image: url('../assets/screen.jpg')"
          >
            <img src="../assets/screen.jpg" class="transform blur-lg" alt="" />
          </div>
          <div class="w-full px-5">
            <h4
              class="font-semibold tracking-normal leading-normal text-gray-900 mt-8 cursor-default"
              style="font-size: 24px"
              title="Ghana Vehicle Import Duty Estimater"
            >
              Ghana Vehicle Import Duty Estimater
            </h4>
            <p
              class="font-normal tracking-normal text-gray-500 mt-3"
              style="font-size: 16px"
            >
              <span class="font-bold text-gray-900">The Challenge: </span>
              <span
                >Getting information on a vehicle being imported into ghana requires
                cumbersome research from multiple sites. Also the ICUMS website usually
                used to check the import duty of a vehicle being imported to Ghana felt
                cumbersome and challenging.</span
              >
            </p>
            <p
              class="font-normal tracking-normal text-gray-500 mt-3"
              style="font-size: 16px"
            >
              <span class="font-bold text-gray-900">The Solution: </span>
              <span
                >Our Web App makes it possible to check the import duty and vehicle
                information about any vehicle you would like to import into Ghana stress
                free and all in one space.</span
              >
            </p>
            <button
              class="text-white py-3 w-full md:w-1/2 mt-5 text-base font-normal rounded-md"
              style="background-color: #b00000"
              @click="dutyCalc()"
              title="ghanadutyestimater.com"
            >
              Visit Site
            </button>
          </div>
        </div>
      </div>

      <div class="my-5 px-5 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/3">
        <!-- Column Content -->
      </div>

      <div class="my-5 px-5 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/3">
        <!-- Column Content -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    dutyCalc: function () {
      window.open("https://ghanadutycalculator.com", "_blank");
    },
  },
};
</script>
