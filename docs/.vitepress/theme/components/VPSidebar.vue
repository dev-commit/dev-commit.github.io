<script lang="ts" setup>
// FIXME: Проверить файл

import { ref, watch } from "vue";
import { useSidebar } from "vitepress/theme";
import VPSidebarGroup from "vitepress/dist/client/theme-default/components/VPSidebarGroup.vue";
import VPLocalSearchBox from "vitepress/dist/client/theme-default/components/VPLocalSearchBox.vue";
import VPNavBarSearchButton from "vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue";

const { sidebarGroups, hasSidebar } = useSidebar();
const groupKey = ref(0);
watch(
  sidebarGroups,
  () => {
    groupKey.value += 1;
  },
  { deep: true },
);

const showSearchModal = ref(false);
</script>

<template>
  <aside v-if="hasSidebar" class="vp-sidebar">
    <div class="vp-sidebar-search">
      <VPLocalSearchBox
        v-if="showSearchModal"
        @close="showSearchModal = false"
      />
      <VPNavBarSearchButton
        class="vp-sidebar-search-trigger"
        @click="showSearchModal = true"
      />
    </div>
    <nav class="vp-sidebar-items" aria-labelledby="sidebar-aria-label">
      <span class="visually-hidden" id="sidebar-aria-label">
        Sidebar Navigation
      </span>
      <slot name="sidebar-nav-before" />
      <VPSidebarGroup :items="sidebarGroups" :key="groupKey" />
      <slot name="sidebar-nav-after" />
    </nav>
  </aside>
</template>

<style scoped>
.vp-sidebar {
  flex-shrink: 0;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  border-right: 1px solid var(--vp-c-divider);
  background-color: var(--vp-sidebar-bg-color, var(--vp-c-bg-soft));
  font-size: 15px;
  scrollbar-color: var(--vp-c-brand-1) var(--vp-c-divider);
  scrollbar-width: thin;
  position: relative;
  padding-top: 12px;
}

.vp-sidebar-search {
  padding: 0 16px 12px;
  position: relative;
}
.vp-sidebar-search-trigger {
  width: 100%;
  height: 40px;
  border-radius: 8px;
}
.vp-sidebar-search-trigger :deep(.DocSearch-Button-Keys) {
  display: none;
}

.vp-sidebar-items {
  padding: 0 16px 24px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
