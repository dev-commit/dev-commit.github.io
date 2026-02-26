<script setup lang="ts">
import VPSidebarItems from "@theme/VPSidebarItems.vue";
</script>

<template>
  <aside class="vp-sidebar">
    <VPSearch />
    <VPSidebarItems />
  </aside>
</template>

<style lang="scss">
.vp-sidebar {
  flex-shrink: 0;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  border-right: 1px solid var(--c-border);
  background-color: var(--c-bg-sidebar);
  font-size: 15px;
  scrollbar-color: var(--c-brand) var(--c-border);
  scrollbar-width: thin;
  position: relative;

  .search-box {
    display: block;
    margin: 0;
    margin-top: 10px;
    padding: 8px 12px;
    & input {
      width: 100%;
      box-sizing: border-box;
    }
    .suggestions {
      position: fixed;
      left: 12px;
      top: 42px;
      overflow-y: auto;
      z-index: 100;
      border: 1px solid #b7b7b7;
      font-size: 14px;
    }
  }
}

.vp-sidebar-items {
  padding: 0;
}
</style>
