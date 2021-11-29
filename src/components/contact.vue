<template>
<div class=" max-w-screen-xl mx-auto px-10 xl:px-0">
<div class="w-full space-y-10">
<h1 class="font-bold text-gray-700 text-center " style="font-size: 40px; letter-spacing:0.2px;">Contact Us</h1>
<p class="font-normal text-center text-sm text-gray-700" style="line-height: 28px; letter-spacing:0.2px">Need Our Services? <br>Get in touch with us.</p>
<div class="flex space-x-3 justify-center">
    <div class="rounded-full bg-gray-100"><img src="../assets/instagram.png" class="h-7 m-2" alt=""></div>
    <div class="rounded-full bg-gray-100 flex items-center justify-center"><img src="../assets/facebook.png" class="h-7 m-2" alt=""></div>
    <div class="rounded-full bg-gray-100 flex items-center"><img src="../assets/Vector.png" class="h-6 m-2" alt=""></div>
    
    </div>
    <form action="https://getform.io/f/fbd05d3c-87b8-4954-a1b7-8e5158a5f530" method="POST" name=”EmailForm” class="max-w-screen-lg mx-auto py-10 px-5 md:px-10 space-y-10 rounded" style="background-color: #22343D;">
    <p class=" font-bold text-center text-white" style="letter-spacing:0.1px; font-size: 24px">Send a message</p>
    <input type="text" placeholder="Your name" v-model="fullName" name="name" class="px-3 py-3 bg-white w-full focus:outline-none">
    <input type="email" placeholder="Your Email Address" v-model="email" name="email" class="px-3 py-3 bg-white w-full focus:outline-none">
    <textarea type="text" placeholder="Enter your message" v-model="message" name="message" class="px-3 py-3 bg-white w-full focus:outline-none h-64"></textarea>
    <button type="submit" class="w-full md:w-32 py-3 font-semibold text-white rounded-md" style="background-color: #b00000;" @click="sendMail()">Send</button>
    
    </form>
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
        message:''
    }
},
methods: {
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