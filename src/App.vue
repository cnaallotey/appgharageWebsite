<template>
  <div id="app" class="">
  <navbarVue class="nav-fix filter" :class="[isscroll ? 'bg-white drop-shadow-md ' : 'bg-transparent drop-shadow-none']" :isscroll="isscroll" />
  <transition name="slide">
  <router-view class=""/>
  </transition>
  <Foooter/>
  </div>
</template>

<script>

import Foooter from "./components/foooter.vue"
import navbarVue from "./components/navbar.vue";

export default {
    data() {
        return {
            isscroll: false,
        };
    },
    methods: {},
    created() {
        window.onscroll = () => {
          console.log(window.scrollY)
            if (window.scrollY > 50) {
                this.isscroll=true;
            } else {
                this.isscroll=false;
            }
        };
    },
    components: { Foooter, navbarVue }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

</style>
