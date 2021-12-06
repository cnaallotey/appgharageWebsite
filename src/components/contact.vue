<template>
<div class=" max-w-screen-xl mx-auto px-5 xl:px-0">
<div class="w-full space-y-10">
<h1 class="font-bold text-gray-700 text-center " style="font-size: 40px; letter-spacing:0.2px;">Contact Us</h1>
<p class="font-normal text-center text-sm text-gray-700" style="line-height: 28px; letter-spacing:0.2px">Need Our Services? <br>Get in touch with us.</p>
<div class="flex space-x-3 justify-center">
    <div class="rounded-full bg-gray-100"><img src="../assets/instagram.png" class="h-7 m-2" alt=""></div>
    <div class="rounded-full bg-gray-100 flex items-center justify-center"><img src="../assets/facebook.png" class="h-7 m-2" alt=""></div>
    <div class="rounded-full bg-gray-100 flex items-center"><img src="../assets/Vector.png" class="h-6 m-2" alt=""></div>
    
    </div>
    <form class="max-w-screen-lg mx-auto py-10 px-5 md:px-10 space-y-10 rounded" style="background-color: #22343D;">
    <p class=" font-bold text-center text-white" style="letter-spacing:0.1px; font-size: 24px">Send a message</p>
    <input type="text" placeholder="Your name" v-model="fullName" class="px-3 py-3 bg-white w-full focus:outline-none">
    <input type="email" placeholder="Your Email Address" v-model="email" class="px-3 py-3 bg-white w-full focus:outline-none">
    <textarea type="text" placeholder="Enter your message" v-model="message" class="px-3 py-3 bg-white w-full focus:outline-none h-64"></textarea>
    <button class="w-full md:w-32 py-3 font-semibold text-white rounded-md" style="background-color: #b00000; " @click.prevent="contact()">Send</button>
    
    </form>
</div>
<div class="absolute bottom-0 w-full space-y-10 z-20 right-0">
<!--Alert Success-->
<div
         class="bg-green-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 md:w-1/4 xl:w-1/4"
         v-if="success"
         >
      <svg
           viewBox="0 0 24 24"
           class="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
           >
        <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
      </svg>
      <span class="text-green-800"> Your message has been sent successfully </span>
    </div>
    <!--Alert Error-->
     <div
         class="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto w-1/4 xl:w-1/4"
         v-if="error"
         >
      <svg
           viewBox="0 0 24 24"
           class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
           >
        <path
              fill="currentColor"
              d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
              ></path>
      </svg>
      <span class="text-red-800"> Message not Sent. Try again later. </span>
    </div>
</div>

</div>

</template>

<script>
import axios from 'axios'


export default {

data() {
    return {
        fullName:'',
        email:'',
        message:'',
        error: false,
        success: false

    }
},
methods: {
    contact: function(){
        axios.post("https://getform.io/f/fbd05d3c-87b8-4954-a1b7-8e5158a5f530", {
            name:this.fullName,
            email: this.email,
            message:this.message
        }).then(()=>{this.success=true;
        setTimeout(()=>{this.success=false}, 3000)})
        .catch(()=>{this.error=true;
        setTimeout(()=>{this.error=false}, 3000)})

    },
    sendMail: function(){
       axios.post('/sendmail', {
  from: this.email,
  name: this.fullName,
  to: 'decryme@gmail.com',
  subject: 'Node Contact Request',
  text: this.message
}) .then(res => console.log(res))
    }

},
}

</script>