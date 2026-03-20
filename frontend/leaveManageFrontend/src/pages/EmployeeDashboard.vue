<template>
  <div class="flex">
    <Sidebar />
    
    <div class="flex-1">
      <Navbar />

      <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Employee Dashboard</h2>

        <button @click="$router.push('/apply')"
          class="bg-green-500 text-white px-4 py-2 rounded">
          Apply Leave
        </button>

        <button @click="getLeaves"
          class="bg-blue-500 text-white px-4 py-2 ml-3 rounded">
          My Leaves
        </button>

        <div v-if="leaves.length" class="mt-5">
          <div v-for="leave in leaves" :key="leave._id"
            class="bg-white p-4 shadow rounded mb-3">
            
            <p><b>Type:</b> {{ leave.leaveType }}</p>
            <p><b>Status:</b>
              <StatusBadge :status="leave.status"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import StatusBadge from "../components/StatusBadge.vue";

const leaves = ref([]);

const getLeaves = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/leave/my", {
    headers: { Authorization: token }
  });

  leaves.value = await res.json();
};
</script>