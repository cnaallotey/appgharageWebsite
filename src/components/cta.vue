<template>
  <div class="w-full">
    <div class="max-w-screen-xl mx-auto px-5 md:px-10 xl:px-0">
      <div
        class="rounded-2xl px-5 md:px-14 py-10 md:py-0"
        style="background-color: #e0e0e0"
      >
        <div
          class="flex flex-col md:flex-row items-start md:items-center space-y-10 md:space-y-0"
        >
          <div
            class="w-full md:w-2/3 space-y-7 md:py-14 h-full flex flex-col justify-center"
          >
            <h1
              class="font-semibold text-gray-900 text-center md:text-left text-4xl md:text-5xl leading-tight"
            >
              We're here to make your business awesome
            </h1>
            <router-link
              to="/contact"
              class="w-56 mx-auto md:mx-0 text-white text-center py-3 font-normal rounded-md text-sm"
              style="background-color: #b00000"
              >Get in touch with us</router-link
            >
          </div>
          <div class="flex items-center w-full md:w-1/3 py-5">
            <img :src="require(`../assets/${ctaimg}`)" class="w-full" alt="" />
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
