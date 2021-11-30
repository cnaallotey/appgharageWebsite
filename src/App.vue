<template>
  <div id="app" class="">
  <navbarVue class="nav-fix filter" :class="[isscroll ? 'bg-white drop-shadow-md ' : 'bg-transparent drop-shadow-none']" :isscroll="isscroll"  />
  <router-view class="mt-10 mb-10 md:mb-20"/>
  <foooterVue />
  </div>
</template>

<script>
import navbarVue from "./components/navbar.vue";
import foooterVue from "./components/foooter.vue";

export default {
  components:{navbarVue, foooterVue},
data(){
        return{
            isscroll:false,
        }
    },


  methods: {
    
  },
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
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

</style>
