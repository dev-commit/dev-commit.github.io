<template>
  <span>
    <span v-for="(item, i) in items" :key="i">
      <span v-html="getTag(item)" />
      <template v-if="i !== items.length - 1">
        <span v-html="getSymbol()" />
      </template>
    </span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  items: string[];
  keys?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  keys: false,
});

const getSymbol = (): string => {
  const symbol = props.keys ? "+" : "➝";
  return `\u00A0${symbol}\u00A0\u00A0`;
};

const getTag = (item: string): string => {
  const className = props.keys ? "u-code-text" : "u-code-light";
  return `<span class="${className}">${item}</span>`;
};
</script>

<style scoped>
:deep(.u-code-text),
:deep(.u-code-light) {
  font-family: monospace;
  padding: 0 5px;
  border-radius: 3px;
  line-height: 1.4em;
  font-size: 14px;
}
:deep(.u-code-text) {
  border: 1px solid;
  border-color: #dfe1bf;
  background-color: #f0f1e1;
  color: rgb(var(--color-orange));
}
:deep(.u-code-light) {
  background-color: rgb(var(--color-white));
  color: rgb(var(--color-orange));
  box-shadow: 0.1px 0.1px 5px 1px rgba(var(--color-black), 0.15);
}
</style>
