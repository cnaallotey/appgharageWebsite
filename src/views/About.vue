<template>
  <div class="about space-y-10 md:space-y-28">
    <aboutcompVue/>
    <ctaVue/>
  </div>
</template>

<script>
import aboutcompVue from "../components/aboutcomp.vue";
import ctaVue from "../components/cta.vue";

export default {
  components:{aboutcompVue, ctaVue},

  created() {
    if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
// This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
window.scrollTo(0,0);
  },
}
</script>
