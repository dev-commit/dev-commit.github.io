<template>
  <span>
    <span class="icon" v-if="marker === '+'">✅</span>
    <span class="icon" v-if="marker === '-'">🅾️</span>
    <span class="icon" v-if="marker === '*'">⭐️</span>
    <slot>Default</slot>
  </span>
</template>

<script setup lang="ts">
type MarkerType = "+" | "-" | "*";

interface Props {
  marker: MarkerType;
}

defineProps<Props>();
</script>

<style scoped>
.icon {
  margin-right: 6px;
}
</style>
