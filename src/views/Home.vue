<template>
  <div class="home space-y-20 md:space-y-20">
  <homepageVue/>
  <ctaVue class="animate__fadeInUp"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import homepageVue from "../components/homepage.vue"
import ctaVue from "../components/cta.vue"


export default {
  name: 'Home',
  components: {
    homepageVue,
    ctaVue
  },
   created() {
    if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
// This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
window.scrollTo(0,0);
  },
}
</script>
