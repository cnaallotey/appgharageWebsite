<template>
  <div class="home space-y-10 md:space-y-28">
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
  }
}
</script>
