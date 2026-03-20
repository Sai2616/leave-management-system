<template>
  <div class="p-4">
    <h2 class="text-xl mb-4">Dashboard</h2>

    <button @click="$router.push('/apply')" class="bg-green-500 text-white p-2 mr-2">
      Apply Leave
    </button>

    <button @click="getMyLeaves" class="bg-blue-500 text-white p-2">
      View My Leaves
    </button>

    <div v-if="leaves.length" class="mt-4">
      <h3 class="font-bold">My Leaves:</h3>

      <div v-for="leave in leaves" :key="leave._id" class="border p-2 mt-2">
        <p><b>Type:</b> {{ leave.leaveType }}</p>
        <p><b>Status:</b> {{ leave.status }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const leaves = ref([]);

const getMyLeaves = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/leave/my", {
    headers: {
      Authorization: token,
    },
  });

  const data = await res.json();
  leaves.value = data;
};
</script>