<template>
  <div id="app" class="space-y-10 md:space-y-28 ">
  <navbarVue class="nav-fix" :class="[isscroll ? 'bg-white shadow-md' : 'bg-none shadow-none']" />
  <router-view/>
  <foooterVue/>
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
    if (window.scrollY > 80) {
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
}
</style>
