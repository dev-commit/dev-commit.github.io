<template>
  <span :class="['code', theme]">
    <slot>Default</slot>
  </span>
</template>

<script setup lang="ts">
interface Props {
  theme: "text" | "light" | "important" | "accent" | "flat" | "item" | "commet";
}

defineProps<Props>();
</script>

<style scoped>
.code {
  font-family: monospace;
  padding: 0 5px;
  border-radius: 3px;
  line-height: 1.4em;
  font-size: 14px;
}

.text {
  border: 1px solid;
  border-color: #dfe1bf;
  background-color: #f0f1e1;
  color: rgb(var(--color-orange));
}
.light {
  background-color: rgb(var(--color-white));
  color: rgb(var(--color-orange));
  box-shadow: 0.1px 0.1px 5px 1px rgba(var(--color-black), 0.15);
}
.important {
  background-color: rgba(var(--color-crimson), 0.8);
  border: 1px solid rgba(var(--color-crimson), 0.9);
  color: rgb(var(--color-white));
}
.accent {
  background-color: rgba(var(--color-sea-green-dark), 0.7);
  border: 1px solid rgba(var(--color-sea-green-dark), 0.9);
  color: rgb(var(--color-white)) !important;
}
.flat {
  color: rgb(var(--color-sea-green-dark));
}
.item {
  background: rgba(var(--color-sea-green-dark), 0.2);
  color: rgb(var(--color-sea-green-dark));
}
.comment {
  color: rgba(var(--color-gray-70));
}
</style>
