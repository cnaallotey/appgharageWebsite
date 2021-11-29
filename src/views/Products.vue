<template>
  <div class="home space-y-10 md:space-y-28">
  <productsVue/>
  <ctaVue/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import productsVue from "../components/products.vue"
import ctaVue from "../components/cta.vue"


export default {
  name: 'Home',
  components: {
    productsVue,
    ctaVue
  }
}
</script>