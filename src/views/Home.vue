<template>
  <div class="home">
    <Navbar
      class="nav-fix filter"
      :class="[isscroll ? 'bg-white drop-shadow ' : 'bg-transparent drop-shadow-none']"
    />
    <homepageVue class="mt-10 mb-16 md:mb-24" />
    <ctaVue class="animate__fadeInUp" ctaimg="ctaimage.svg" />
    <Foooter />
  </div>
</template>

<script>
// @ is an alias to /src

import homepageVue from "../components/homepage.vue";
import ctaVue from "../components/cta.vue";
import Navbar from "../components/navbar.vue";
import Foooter from "../components/foooter.vue";

export default {
  name: "Home",
  components: {
    homepageVue,
    ctaVue,
    Navbar,
    Foooter,
  },
  data() {
    return {
      isscroll: false,
    };
  },
  created() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0, 0);
    //navbar scroll
    window.onscroll = () => {
      // console.log(window.scrollY)
      if (window.scrollY > 50) {
        this.isscroll = true;
      } else {
        this.isscroll = false;
      }
    };
  },
};
</script>
