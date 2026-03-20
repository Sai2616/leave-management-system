<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-800">
    
    <div class="bg-white p-8 rounded-xl shadow-lg w-96">
      <h2 class="text-2xl font-bold text-center mb-6">Employer Signup</h2>

      <!-- Name -->
      <input v-model="name" placeholder="Name"
        class="border p-3 mb-3 w-full rounded" />

      <!-- Email -->
      <input v-model="email" placeholder="Email"
        class="border p-3 mb-3 w-full rounded" />

      <!-- Password -->
      <input v-model="password" type="password" placeholder="Password"
        class="border p-3 mb-4 w-full rounded" />

      <!-- Button -->
      <button @click="handleSignup"
        class="bg-gray-900 hover:bg-black text-white w-full py-3 rounded">
        Signup
      </button>

      <!-- Login link -->
      <p class="text-center mt-4 text-sm">
        Already registered?
        <span @click="$router.push('/employer-login')"
          class="text-gray-800 cursor-pointer font-semibold">
          Login
        </span>
      </p>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { signup } from "../services/api";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();

const handleSignup = async () => {
  if (!name.value || !email.value || !password.value) {
    alert("All fields required");
    return;
  }

  const res = await signup({
    name: name.value,
    email: email.value,
    password: password.value,
    role: "employer", // 🔥 FIXED ROLE
  });

  if (res.msg === "User registered successfully") {
    alert("Signup successful");
    router.push("/employer-login");
  } else {
    alert(res.msg);
  }
};
</script>