<template>
  <div class="w-full mx-auto px-5 md:px-10 xl:px-0">
    <div class="max-w-screen-lg mx-auto px-5 md:px-10 xl:px-0 rounded-md shadow-xl border">
      <div
        class="rounded-2xl px-5 md:px-14 py-10 md:py-0"
        style="background-color: #fff;"
        
      >
        <div
          class="flex flex-col-reverse md:flex-row items-start md:items-center space-y-10 md:space-y-0"
        >
          <div
            class="w-full md:w-2/3 space-y-7 md:py-14 h-full flex flex-col justify-center"
          >
            <h1
              class="fmt-2 md:text-4xl leading-normal text-center md:text-left font-bold tracking-tight text-gray-800 text-4xl"
            >
              We're here to make your Business <span class="text-red-700">Awesome</span> 
            </h1>
            <router-link
              to="/contact"
              class="w-56 mx-auto md:mx-0 font-medium text-center py-3 rounded-none text-base bg-white text-red-600 border-2 border-red-700"
              >Get in touch with us</router-link
            >
          </div>
          <div class="flex items-center w-full md:w-1/3 py-5">
            <img :src="require(`../assets/${ctaimg}`)" class="" alt="" style="height:338px;" />
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
