<template>
     

  <div class="min-h-screen flex items-center justify-center bg-blue-500">
    <div class="bg-white p-8 rounded-xl w-96 shadow">
      <h2 class="text-xl font-bold mb-4 text-center">Employee Login</h2>

      <input v-model="email" placeholder="Email" class="border p-2 w-full mb-3" />
      <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-3" />

      <button @click="handleLogin"
        class="bg-blue-600 text-white w-full p-2 rounded">
        Login
      </button>

      <p class="text-center mt-3">
        New user?
        <span @click="$router.push('/employee-signup')" class="text-blue-600 cursor-pointer">
          Signup
        </span>
      </p>
    </div>
  </div>
      
</template>

<script setup>
import { ref } from "vue";
import { login } from "../services/api";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  const res = await login({
    email: email.value,
    password: password.value,
  });

  if (res.token && res.user.role === "employee") {
    localStorage.setItem("token", res.token);
    router.push("/dashboard");
  } else {
    alert("Invalid Employee credentials");
  }
};
</script>