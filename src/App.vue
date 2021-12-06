<template>
  <div id="app" class="">
  <transition name="slide">
  <router-view class=""/>
  </transition>
  
  </div>
</template>

<script>




export default {
    data() {
        return {
            
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
