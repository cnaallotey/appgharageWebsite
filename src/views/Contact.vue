<template>
  <div class="home space-y-10 md:space-y-28">
  <contactVue/>
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
    ctaVue
  }
}
</script>
