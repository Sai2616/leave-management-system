<template>
  <div class="p-4">
    <h2 class="text-xl mb-4">Signup</h2>

    <input v-model="name" placeholder="Name" class="border p-2 mb-2 w-full" />
    <input v-model="email" placeholder="Email" class="border p-2 mb-2 w-full" />
    <input v-model="password" type="password" placeholder="Password" class="border p-2 mb-2 w-full" />

    <select v-model="role" class="border p-2 mb-2 w-full">
      <option value="employee">Employee</option>
      <option value="employer">Employer</option>
    </select>

    <button @click="handleSignup" class="bg-green-500 text-white p-2 w-full">
      Signup
    </button>

    <p @click="$router.push('/')" class="mt-2 text-blue-500 cursor-pointer">
      Go to Login
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signup } from "../services/api";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const role = ref("employee");

const router = useRouter();

const handleSignup = async () => {
  const res = await signup({
    name: name.value,
    email: email.value,
    password: password.value,
    role: role.value,
  });

  if (res.msg === "User registered successfully") {
    alert("Signup successful");
    router.push("/");
  } else {
    alert(res.msg);
  }
};
</script>