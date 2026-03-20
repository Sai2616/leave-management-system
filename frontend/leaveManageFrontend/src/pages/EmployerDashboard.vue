<template>
  <div class="flex min-h-screen bg-gray-100">
    
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-1">
      <Navbar />

      <div class="p-6">
        <h2 class="text-2xl font-bold mb-6">All Leave Requests</h2>

        <!-- Table -->
        <div class="bg-white rounded-xl shadow overflow-hidden">
          <table class="w-full text-left">
            
            <!-- Header -->
            <thead class="bg-gray-200">
              <tr>
                <th class="p-3">Employee</th>
                <th class="p-3">Leave Type</th>
                <th class="p-3">Status</th>
                <th class="p-3">Action</th>
              </tr>
            </thead>

            <!-- Body -->
            <tbody>
              <tr 
                v-for="leave in leaves" 
                :key="leave._id"
                class="border-t hover:bg-gray-50 transition"
              >
                <td class="p-3 font-medium">
                  {{ leave.userId?.name }}
                </td>

                <td class="p-3">
                  {{ leave.leaveType }}
                </td>

                <td class="p-3">
                  <StatusBadge :status="leave.status" />
                </td>

                <td class="p-3">
                  <button 
                    @click="updateStatus(leave._id, 'approved')"
                    class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Approve
                  </button>

                  <button 
                    @click="updateStatus(leave._id, 'rejected')"
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import StatusBadge from "../components/StatusBadge.vue";

const leaves = ref([]);

// 📌 Fetch all leave requests
const getAllLeaves = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("http://localhost:5000/api/leave/all", {
      headers: {
        Authorization: token,
      },
    });

    const data = await res.json();
    leaves.value = data;
  } catch (err) {
    console.error("Error fetching leaves:", err);
  }
};

// 📌 Approve / Reject
const updateStatus = async (id, status) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`http://localhost:5000/api/leave/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ status }),
    });

    const data = await res.json();
    alert(data.msg);

    // Refresh data
    getAllLeaves();
  } catch (err) {
    console.error("Error updating status:", err);
  }
};

// 🚀 Load data on page load
onMounted(() => {
  getAllLeaves();
});
</script>