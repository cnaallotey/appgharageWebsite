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
  components:{aboutcompVue, ctaVue}
}
</script>
