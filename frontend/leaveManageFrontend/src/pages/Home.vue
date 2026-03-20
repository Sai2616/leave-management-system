<template>
  <div 
    class="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >

    <!-- Overlay -->
    <div class="bg-black bg-opacity-60 p-10 rounded-xl text-center">

      <h1 class="text-4xl font-bold mb-6">
        Leave Management System
      </h1>

      <p class="mb-6 text-lg">
        Manage employee leaves efficiently
      </p>

      <div class="space-x-4">
        <button @click="goEmployee"
          class="bg-white text-black px-5 py-2 rounded hover:bg-gray-200">
          Employee Login
        </button>

        <button @click="goEmployer"
          class="bg-blue-600 px-5 py-2 rounded hover:bg-blue-700">
          Employer Login
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import bgImage from "../assets/bg.jpeg";

const router = useRouter();

const goEmployee = () => {
  router.push("/employee-login");
};

const goEmployer = () => {
  router.push("/employer-login");
};
</script>