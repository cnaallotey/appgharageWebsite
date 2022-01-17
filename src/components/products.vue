<template>
  <div
    class="max-w-screen-xl mx-auto space-y-5 md:space-y-10 px-5 md:px-10 lg:px-0 mb-24"
  >
    <div>
      <h1
        class="font-bold text-gray-900 text-left md:text-center"
        style="font-size: 40px; letter-spacing: 0.2px"
      >
        Latest Projects
      </h1>
      <p
        class="font-normal text-lg text-gray-500 tracking-normal text-left md:text-center"
        style="letter-spacing: 0.2px"
      >
        Here are the products we have successfully built
      </p>
    </div>

    <div class="space-y-10 md:space-y-0 md:grid lg:grid-cols-2 md:gap-x-8 md:gap-y-10">
      <div
        class="flex flex-col md:flex-row shadow-md hover:shadow-lg transition-shadow ease-out delay-100 cursor-pointer"
      >
        <div class="w-full md:w-1/2 h-full back bg-contain relative overflow-hidden">
          <img
            src="../assets/dutyestimater.jpg"
            class="h-full w-full z-10 top-1"
            alt=""
          />
        </div>
        <div class="w-full md:w-2/3 p-5 bg-gray-50">
          <h4
            class="font-semibold tracking-normal leading-normal text-gray-900 md:mt-0 cursor-default"
            style="font-size: 24px"
            title="Ghana Vehicle Import Duty Estimater"
          >
            Ghana Vehicle Import Duty Estimater
          </h4>

          <p
            class="font-normal tracking-normal text-gray-500 mt-3"
            style="font-size: 16px"
          >
            <span
              >Our Web App makes it possible to check the import duty and vehicle
              information about any vehicle you would like to import into Ghana stress
              free and all in one space.</span
            >
          </p>
          <button
            class="text-white py-3 w-1/2 md:w-1/2 mt-5 text-base font-normal rounded-md"
            style="background-color: #b00000"
            @click="dutyCalc()"
            title="ghanadutycalculater.com"
          >
            Visit Site
          </button>
        </div>
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

<style>
.back {
  background-image: url("../assets/dutyestimater.jpg");
  background-position: bottom 50px left 100px;
  background-size: 32%;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
