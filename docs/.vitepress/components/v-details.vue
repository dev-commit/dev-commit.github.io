<template>
  <details class="v-details">
    <summary class="v-summary" v-html="title"></summary>
    <div class="v-content">
      <slot>Default</slot>
    </div>
  </details>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style scoped>
:root {
  --color-violet-medium: 98, 65, 234; /* #6241ea */
  --color-brown: 179, 183, 104; /* #b3b768 */
}

.v-details {
  --color: rgba(var(--color-violet-medium), 0.5);

  border: 1px solid rgba(var(--color-brown), 0.4);
  overflow: auto;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: rgba(var(--color-brown), 0.1);
  cursor: pointer;
}

.v-summary {
  margin: 0;
  padding: 10px;
  background-color: rgb(var(--color-violet-medium), 0.1);
  font-weight: 500;
  color: var(--color);
}
.v-summary::-webkit-details-marker {
  margin-right: 10px;
  color: var(--color);
}
.v-summary::marker {
  margin-right: 10px;
  color: var(--color);
}

.v-content {
  padding: 10px;
}
</style>
