<template>
  <span :class="['badge', theme]">
    <slot>Default</slot>
  </span>
</template>

<script setup lang="ts">
interface Props {
  theme: "blue" | "green" | "orange" | "red" | "lime" | "gray";
}

defineProps<Props>();
</script>

<style scoped>
.badge {
  font-size: 14px;
  font-weight: 700;
  min-width: 80px;
  padding: 6px 15px;
  text-align: center;
  border-radius: 3px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  color: #fff;
}

.blue {
  background-color: #61affe;
}
.green {
  background-color: #49cc90;
}
.orange {
  background-color: #fca130;
}
.red {
  background-color: #f93e3e;
}
.lime {
  background-color: #50e3c2;
}
.gray {
  background-color: #ababab;
}
</style>
