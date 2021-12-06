<template>
  <div class="home">
  
  <contactVue class=" mt-10 mb-20"/>
  <ctaVue/>

    
  </div>
</template>

<script>
// @ is an alias to /src
import contactVue from "../components/contact.vue"

import ctaVue from "../components/cta.vue"



export default {
  name: 'Home',
  components: {
    contactVue,
    ctaVue,
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
