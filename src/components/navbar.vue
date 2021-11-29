<template>
        <div class="sticky top-0 z-20 w-full nav-fixed " :class="[open ? 'bg-white shadow-md' : 'bg-none shadow-none']" >
        <section class="relative max-w-screen-xl mx-auto px-5 md:px-10 xl:px-0">
        <div class="w-full py-1 flex items-center justify-between">
        <img src="../assets/finallogoappGharage.png" class=" h-16" alt="logo"> 
        <div class="hidden lg:flex space-x-7 items-center "><ul class="navlinks inline-flex font-medium space-x-7 cursor-pointer">
        <router-link to="/" class=" hover:border-b-2 border-red-700" > <li class="border-b-2 border-transparent font-medium hover:border-red-800 transistion ease-linear delay-100">Home</li></router-link>
        <router-link to="/products"> <li class="border-b-2 font-medium border-transparent hover:border-red-800">Products</li> </router-link>
        <router-link to="/about"> <li class="border-b-2 font-medium border-transparent hover:border-red-800">About</li> </router-link>
        </ul>
        <router-link to="/contact" class="px-6 py-3 font-semibold navlinks text-white rounded-md hover:shadow-md " style="background-color: #b00000;">Contact Us</router-link>
        </div>
        
      <a class="navbar-burger self-center lg:hidden" @click="open = !open">
          <svg xmlns="http://www.w3.org/2000/svg" v-if="!open" class="h-6 w-6 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" v-if="open" class="h-6 w-6 hover:text-red-700" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
      </a>
        </div>
        
  </section>
  <div  class="relative lg:hidden -mt-2 z-10">
        <button @click="open = !open"  class="hidden md:hidden flex-row items-center w-full px-4 py-2 text-sm font-semibold text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          <span>Dropdown</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :class="[open ? 'rotate-180' : ' rotate-0']" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div v-if="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg">
          <div class="px-5 py-2 bg-white shadow dark-mode:bg-gray-800">
          <router-link to="/" class="block px-4 py-2 mt-2 navlinks font-medium bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Home</router-link>
            <router-link to="/products" class="block px-4 py-2 mt-2 navlinks font-medium bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Products</router-link>
            <router-link to="/about" class="block px-4 py-2 mt-2 navlinks font-medium bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">About</router-link>
             <router-link to="/contact"> <button class=" text-white w-full mt-2 transition ease-linear delay-75 py-3 font-semibold text-center navlinks" style="background-color: #b00000;">Contact Us</button>
         </router-link> 
         </div>
        </div>
      </div>

        
    </div>
</template>

<script>
export default {
    data(){
        return{
            open:false,
            drop:false,
            isscroll:false,
        }
    },
    
    
}

</script>

<style>
.navlinks{
font-size: 16px;
}

</style>