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
    <input type="email" placeholder="Your Email Address" v-model="email" @keyup="validate()" class="px-3 py-3 bg-white w-full focus:ring-2 focus:outline-none  " :class="[!emailValidation ? 'focus:ring-2 focus:ring-red-600' : 'focus:ring-2 focus:ring-green-600']">
    <textarea type="text" placeholder="Enter your message" v-model="message" class="px-3 py-3 bg-white w-full focus:outline-none h-64"></textarea>
    <button class="w-full md:w-32 py-3 font-semibold text-white rounded-md" style="background-color: #b00000; " @click.prevent="contact()">Send</button>
    
    </form>
</div>
    <transition 
            enter-active-class="animate__animated animate__backInUp animate__faster"
            leave-active-class="animate__animated animate__fadeOutDown">
        <Success v-if="success"/>
    </transition>
    <transition
            enter-active-class="animate__animated animate__backInUp animate__faster"
            leave-active-class="animate__animated animate__fadeOutDown">
        <Error v-if="error"/> 
    </transition>
    
</div>

</template>

<script>
import axios from 'axios'
import Success from './success.vue';
import Error from './error.vue';


export default {
    data() {
        return {
            fullName: "",
            email: "",
            message: "",
            error: false,
            success: false,
            emailValidation:true
        };
    },
    methods: {
        validate: function(){
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (this.email.match(validRegex))
           {this.emailValidation=true}
            else{this.emailValidation=false}
        },
        contact: function () {
            if(this.fullName!="" && this.emailValidation===true && this.email!='' && this.message!= ''){
            axios.post("https://getform.io/f/fbd05d3c-87b8-4954-a1b7-8e5158a5f530", {
                name: this.fullName,
                email: this.email,
                message: this.message
            }).then(() => {
                this.success = true;
                this.fullName = this.email = this.message = "";
                setTimeout(() => { this.success = false; }, 3000);
            })
                .catch(() => {
                this.error = true;
                setTimeout(() => { this.error = false; }, 3000);
            });
            }
            else{alert('fill all spaces and enter a valid Email Address ')}
        },
        sendMail: function () {
            axios.post("/sendmail", {
                from: this.email,
                name: this.fullName,
                to: "decryme@gmail.com",
                subject: "Node Contact Request",
                text: this.message
            }).then(res => console.log(res));
        }
    },
    components: { Success, Error }
}

</script>