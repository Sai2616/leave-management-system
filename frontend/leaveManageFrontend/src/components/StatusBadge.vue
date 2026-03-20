<template>
  <span :class="badgeClass" class="px-2 py-1 rounded text-white">
    {{ status }}
  </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["status"]);

const badgeClass = computed(() => {
  if (props.status === "approved") return "bg-green-500";
  if (props.status === "rejected") return "bg-red-500";
  return "bg-yellow-500";
});
</script>