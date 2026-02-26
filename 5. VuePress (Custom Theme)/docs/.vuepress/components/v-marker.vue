<template>
  <span>
    <span v-if="marker === '+'">✅</span>
    <span v-if="marker === '-'">🅾️</span>
    <span v-if="marker === '*'">⭐️</span>
  </span>
</template>

<script setup lang="ts">
type MarkerType = "+" | "-" | "*";

interface Props {
  marker: MarkerType;
}

defineProps<Props>();
</script>

<style scoped></style>
