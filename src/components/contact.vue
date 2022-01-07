<template>
  <div class="max-w-screen-xl mx-auto px-5 xl:px-0">
    <div class="w-full space-y-10">
      <div class="bg-transparent">
        <div class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-red-700 font-semibold tracking-wide uppercase">
              contact us
            </h2>
            <p
              class="font-bold text-gray-900 text-center"
              style="font-size: 40px; letter-spacing: 0.2px"
            >
              Need our Services?
            </p>
          </div>
        </div>
      </div>
      <!--<div class="flex space-x-3 justify-center">
        <div class="rounded-full bg-gray-100">
          <img src="../assets/instagram.png" class="h-7 m-2" alt="" />
        </div>
        <div class="rounded-full bg-gray-100 flex items-center justify-center">
          <img src="../assets/facebook.png" class="h-7 m-2" alt="" />
        </div>
        <div class="rounded-full bg-gray-100 flex items-center">
          <img src="../assets/Vector.png" class="h-6 m-2" alt="" />
        </div>
      </div>-->
      <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row py-10 px-5 md:px-0">
        <div class="w-full md:w-1/2 py-10 px-10 space-y-5 bg-white text-gray-500">
          <div class="flex items-start space-x-5 text-base font-medium">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                /></svg></span
            ><span
              >26 Bimpong Street,<br />
              Agbogba, Accra</span
            >
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.195323841637!2d-0.19806997347822614!3d5.68488772800608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6343057ac424b31!2zNcKwNDEnMDYuNyJOIDDCsDExJzQ0LjgiVw!5e0!3m2!1sen!2sgh!4v1641394351477!5m2!1sen!2sgh"
            width="600"
            height="450"
            class="w-full h-32 rounded-lg"
            style="border: 0"
            loading="lazy"
          ></iframe>
          <div class="flex items-start space-x-5 text-base font-medium">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                /></svg></span
            ><span>(+233) 054 - 879 - 7248</span>
          </div>
          <div class="flex items-start space-x-5 text-base font-medium">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                /></svg></span
            ><span>appgharage@gmail.com</span>
          </div>
          <div class="pt-5">
            <p class="uppercase text-lg leading-6 font-semibold text-gray-900">Socials</p>
            <div class="flex items-center space-x-5 text-base font-medium mt-4">
              <span><img src="../assets/facebook1.png" class="w-6" alt="" /></span
              ><span>faceboook</span>
            </div>
            <div class="flex items-center space-x-5 text-base font-medium mt-2">
              <span><img src="../assets/linkedin.png" class="w-6" alt="" /></span
              ><span>LinkedIn</span>
            </div>
            <div class="flex items-center space-x-5 text-base font-medium mt-2">
              <span><img src="../assets/twitter2.png" class="w-6" alt="" /></span
              ><span>Twitter</span>
            </div>
          </div>
        </div>
        <form class="w-fll md:w-1/2 py-10 px-0 md:px-10 space-y-5 bg-white">
          <p class="text-xl leading-6 font-medium text-gray-900 text-center md:text-left">
            Send a message
          </p>
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700 mb-2"
              >Full name</label
            >
            <div
              class="w-full bg-white flex items-center rounded-md border-2 border-gray-200"
            >
              <input
                type="text"
                placeholder="John Doe"
                v-model="fullName"
                class="px-3 py-3 bg-white w-full focus:outline-none"
                @keyup="validatename()"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                v-if="fullnameValidation"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700 mb-2"
              >Email Address</label
            >
            <div
              class="w-full bg-white flex items-center rounded-md border-2 border-gray-200"
            >
              <input
                type="email"
                placeholder="john@example.com"
                v-model="email"
                @keyup="validateEmail()"
                class="px-3 py-3 bg-white w-full focus:ring-2 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                v-if="emailValidation"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700 mb-2"
              >Enter your message</label
            >
            <textarea
              type="text"
              placeholder=""
              v-model="message"
              class="px-3 py-3 bg-white w-full focus:outline-none h-64 rounded-md border-2 border-gray-200"
            ></textarea>
          </div>
          <button
            class="w-full md:w-48 py-3 font-medium text-white rounded-md text-base flex items-center justify-center space-x-2"
            style="background-color: #b00000"
            @click.prevent="contact()"
          >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform rotate-45 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                /></svg
            ></span>
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__backInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <Success v-if="success" />
    </transition>
    <transition
      enter-active-class="animate__animated animate__backInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <Error v-if="error" />
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import Success from "./success.vue";
import Error from "./error.vue";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
      error: false,
      success: false,
      emailValidation: false,
      fullnameValidation: false,
      fullnameValidationError: false,
    };
  },
  methods: {
    validatename: function () {
      var validName = /^[a-zA-Z]+ [a-zA-Z]+$/;
      if (this.fullName.match(validName)) {
        this.fullnameValidation = true;
      } else {
        this.fullnameValidation = false;
      }
    },

    validateEmail: function () {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.email.match(validRegex)) {
        this.emailValidation = true;
      } else {
        this.emailValidation = false;
      }
    },
    contact: function () {
      if (
        this.fullnameValidation === true &&
        this.emailValidation === true &&
        this.message != ""
      ) {
        axios
          .post("https://getform.io/f/fbd05d3c-87b8-4954-a1b7-8e5158a5f530", {
            name: this.fullName,
            email: this.email,
            message: this.message,
          })
          .then(() => {
            this.success = true;
            this.fullName = this.email = this.message = "";
            this.fullnameValidation = this.emailValidation = false;
            setTimeout(() => {
              this.success = false;
            }, 3000);
          })
          .catch(() => {
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 3000);
          });
      } else {
        alert("fill all spaces and enter a valid Email Address ");
      }
    },
    sendMail: function () {
      axios
        .post("/sendmail", {
          from: this.email,
          name: this.fullName,
          to: "decryme@gmail.com",
          subject: "Node Contact Request",
          text: this.message,
        })
        .then((res) => console.log(res));
    },
  },
  components: { Success, Error },
};
</script>
