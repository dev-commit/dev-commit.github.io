<template>
  <details class="v-details">
    <summary v-html="title"></summary>
    <slot></slot>
  </details>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style>
:root {
  --color-violet-medium: 98, 65, 234; /* #6241ea */
  --color-brown: 179, 183, 104; /* #b3b768 */
}

.v-details {
  --color: rgba(var(--color-violet-medium), 0.5);

  padding: 5px;
  border: 1px solid rgba(var(--color-brown), 4);
  overflow: auto;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: rgba(var(--color-brown), 0.1);
  cursor: pointer;
}
.v-details summary {
  padding: 10px;
  background-color: rgb(var(--color-violet-medium), 0.1);
}
.v-details summary::-webkit-details-marker {
  margin-right: 10px;
  color: var(--color);
}
.v-details summary::marker {
  margin-right: 10px;
  color: var(--color);
}
.v-details summary {
  font-weight: 500;
  color: var(--color);
}
</style>
