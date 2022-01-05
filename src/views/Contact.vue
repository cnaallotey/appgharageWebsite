<template>
  <div class="home">
    <Navbar
      class="nav-fix filter"
      :class="[isscroll ? 'bg-white drop-shadow ' : 'bg-transparent drop-shadow-none']"
    />
    <contactVue class="mt-10 mb-20" />
    <ctaVue />
    <Foooter />
  </div>
</template>

<script>
// @ is an alias to /src
import contactVue from "../components/contact.vue";
import ctaVue from "../components/cta.vue";
import Navbar from "../components/navbar.vue";
import Foooter from "../components/foooter.vue";

export default {
  name: "Home",
  components: {
    contactVue,
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
    //navbar scrolling
    window.onscroll = () => {
      //console.log(window.scrollY)
      if (window.scrollY > 50) {
        this.isscroll = true;
      } else {
        this.isscroll = false;
      }
    };
  },
};
</script>
