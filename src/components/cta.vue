<template>
  <div class="w-full mx-auto px-10 md:px-10 xl:px-0">
    <div
      class="max-w-screen-lg mx-auto px-5 md:px-10 xl:px-0 rounded-md shadow-xl border"
    >
      <div class="rounded-2xl py-10 md:py-0 bg-gray-50">
        <div
          class="flex flex-col-reverse md:flex-row items-start px-0 md:px-10 md:items-center space-y-10 md:space-y-0"
        >
          <div
            class="w-full md:w-2/3 space-y-7 md:py-14 h-full flex flex-col justify-center"
          >
            <h1
              class="mt-2 text-center md:text-left text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              We are here to make your Business <span class="text-red-700">Awesome</span>
            </h1>
            <router-link
              to="/contact"
              class="w-full md:w-56 mx-auto md:mx-0 font-medium text-center py-3 rounded-none text-base bg-transparent text-red-600 border-2 border-red-700"
              >Get in touch with us</router-link
            >
          </div>
          <div class="flex items-center w-full md:w-1/3 py-5">
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
