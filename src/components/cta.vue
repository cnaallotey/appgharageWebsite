<template>
  <div class="w-full mx-auto px-0 md:px-10 xl:px-0">
    <div
      class="max-w-screen-xl mx-auto px-5 md:px-10 xl:px-0 md:rounded-xl border"
      style="background-color: #e0e0e0"
    >
      <div class="rounded-2xl py-10 md:py-0">
        <div
          class="flex flex-col-reverse lg:flex-row items-start px-0 md:px-10 md:items-center"
        >
          <div
            class="w-full lg:w-2/3 space-y-7 md:py-14 h-full flex flex-col justify-center"
          >
            <h1
              class="font-semibold text-gray-900 text-center lg:text-left"
              style="font-size: 53px; line-height: 53px"
            >
              We are here to make your Business <span class="">Awesome</span>
            </h1>
            <router-link
              to="/contact"
              class="w-full md:w-56 mx-auto lg:mx-0 font-medium text-center rounded-md py-3 text-base text-white"
              style="background-color: #b00000"
              >Get in touch with us</router-link
            >
          </div>
          <div class="items-center w-full md:w-1/3 py-0 md:py-10 hidden lg:flex">
            <img src="../assets/ctaimage.svg" class="mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ctaimg: String,
  },
};
</script>

<style>
.main {
  font-size: 53px;
  line-height: 53px;
}
</style>
