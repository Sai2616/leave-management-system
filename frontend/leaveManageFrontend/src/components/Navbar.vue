<template>
  <div class="bg-gray-800 text-white p-4 flex justify-between">
    <h1 class="font-bold">Leave Manager</h1>

    <button @click="logout" class="bg-red-500 px-3 py-1 rounded">
      Logout
    </button>
  </div>
</template>

<script setup>
const logout = () => {
  localStorage.removeItem("token");
  location.href = "/";
};
</script>