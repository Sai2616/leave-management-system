<template>
  <div class="flex min-h-screen bg-gray-100">
    
    <Sidebar />

    <div class="flex-1">
      <Navbar />

      <div class="p-6">
        <h2 class="text-xl font-bold mb-4">Apply Leave</h2>

        <div class="bg-white p-6 rounded-xl shadow w-96">
          
         <select 
  v-model="leaveType"
  class="border p-2 w-full mb-3 rounded"
>
  <option disabled value="">Select Leave Type</option>
  <option value="Sick Leave">Sick Leave</option>
  <option value="Casual Leave">Casual Leave</option>
  <option value="Earned Leave">Earned Leave</option>
  <option value="Maternity Leave">Maternity Leave</option>
  <option value="Paternity Leave">Paternity Leave</option>
</select>

          <input v-model="startDate" type="date"
            class="border p-2 w-full mb-3 rounded" />

          <input v-model="endDate" type="date"
            class="border p-2 w-full mb-3 rounded" />

          <textarea v-model="reason"
            placeholder="Reason"
            class="border p-2 w-full mb-3 rounded"></textarea>

          <button @click="applyLeave"
            class="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded">
            Submit
          </button>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

const leaveType = ref("");
const startDate = ref("");
const endDate = ref("");
const reason = ref("");

const applyLeave = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/leave/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      leaveType: leaveType.value,
      startDate: startDate.value,
      endDate: endDate.value,
      reason: reason.value,
    }),
  });

  const data = await res.json();
  alert(data.msg);
};
</script>