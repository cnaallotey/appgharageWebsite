<template>
  <div class="about">
    <Navbar
      class="nav-fix filter"
      :class="[isscroll ? 'bg-white drop-shadow ' : 'bg-transparent drop-shadow-none']"
    />
    <aboutcompVue class="mt-10 mb-24" />
    <ctaVue ctaimg="aboutsv.svg" />
    <Foooter />
  </div>
</template>

<script>
import aboutcompVue from "../components/aboutcomp.vue";
import ctaVue from "../components/cta.vue";
import Navbar from "../components/navbar.vue";
import Foooter from "../components/foooter.vue";

export default {
  components: { aboutcompVue, ctaVue, Navbar, Foooter },
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
    //navbar scrolling
    window.onscroll = () => {
      if (window.scrollY > 50) {
        this.isscroll = true;
      } else {
        this.isscroll = false;
      }
    };
  },
};
</script>
