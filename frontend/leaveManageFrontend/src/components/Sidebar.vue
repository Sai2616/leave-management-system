<template>
  <div class="w-60 bg-gray-900 text-white min-h-screen p-4">
    <h2 class="text-lg font-bold mb-4">Menu</h2>

    <div v-if="role === 'employee'">
      <p @click="$router.push('/dashboard')" class="cursor-pointer mb-2">Dashboard</p>
      <p @click="$router.push('/apply')" class="cursor-pointer">Apply Leave</p>
    </div>

    <div v-else>
      <p @click="$router.push('/employer')" class="cursor-pointer">All Requests</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const role = ref("");

const token = localStorage.getItem("token");

if (token) {
  const payload = JSON.parse(atob(token.split(".")[1]));
  role.value = payload.role;
}
</script>