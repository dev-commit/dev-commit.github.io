<script setup lang="ts">
// FIXME: Проверить файл

import { ref, watch, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useSidebar } from "vitepress/theme";
import VPBackdrop from "vitepress/dist/client/theme-default/components/VPBackdrop.vue";
import VPLocalNav from "vitepress/dist/client/theme-default/components/VPLocalNav.vue";
import VPContent from "vitepress/dist/client/theme-default/components/VPContent.vue";
import VPFooter from "vitepress/dist/client/theme-default/components/VPFooter.vue";

import VPNavbar from "./VPNavbar.vue";
import VPSidebar from "./VPSidebar.vue";

const DefaultLayout = DefaultTheme.Layout;

// mobile-first: пока не измерили экран, считаем мобильную версию (< 960px)
const isDesktop = ref(false);

onMounted(() => {
  const mq = window.matchMedia("(min-width: 961px)");
  isDesktop.value = mq.matches;
  const handler = () => {
    isDesktop.value = mq.matches;
  };
  mq.addEventListener("change", handler);
  onUnmounted(() => mq.removeEventListener("change", handler));
});

const { frontmatter, theme: themeConfig } = useData();
const {
  isOpen: isSidebarOpen,
  close: closeSidebar,
  open: openSidebar,
  hasSidebar,
} = useSidebar();
const route = useRoute();

const touchStart = { x: 0, y: 0 };
function onTouchStart(e: TouchEvent) {
  touchStart.x = e.changedTouches[0].clientX;
  touchStart.y = e.changedTouches[0].clientY;
}
function onTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - touchStart.x;
  const dy = e.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) openSidebar();
    else closeSidebar();
  }
}

watch(() => route.path, closeSidebar);

const showLayout = computed(() => frontmatter.value.layout !== false);
const shouldShowNavbar = computed(
  () =>
    frontmatter.value.navbar !== false &&
    (themeConfig.value?.nav?.length ?? true),
);
const containerClass = computed(() => [
  "vp-theme-container",
  "vp-theme-container--desktop",
  {
    "no-navbar": !shouldShowNavbar.value,
    "no-sidebar": !hasSidebar.value,
    "sidebar-open": isSidebarOpen.value,
  },
  frontmatter.value.pageClass,
]);
</script>

<template>
  <template v-if="showLayout">
    <!-- Десктоп: структура как в VuePress (sidebar | navbar + content) -->
    <div
      v-if="isDesktop"
      :class="containerClass"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
    >
      <VPBackdrop
        class="backdrop vp-sidebar-mask"
        :show="isSidebarOpen"
        @click="closeSidebar"
      />
      <VPSidebar>
        <template #sidebar-nav-before
          ><slot name="sidebar-nav-before"
        /></template>
        <template #sidebar-nav-after
          ><slot name="sidebar-nav-after"
        /></template>
      </VPSidebar>
      <div class="vp-content">
        <VPNavbar v-if="shouldShowNavbar" />
        <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />
        <VPContent :key="route.path">
          <template #page-top><slot name="page-top" /></template>
          <template #page-bottom><slot name="page-bottom" /></template>
          <template #not-found><slot name="not-found" /></template>
          <template #home-hero-before
            ><slot name="home-hero-before"
          /></template>
          <template #home-hero-info-before
            ><slot name="home-hero-info-before"
          /></template>
          <template #home-hero-info><slot name="home-hero-info" /></template>
          <template #home-hero-info-after
            ><slot name="home-hero-info-after"
          /></template>
          <template #home-hero-actions-after
            ><slot name="home-hero-actions-after"
          /></template>
          <template #home-hero-image><slot name="home-hero-image" /></template>
          <template #home-hero-after><slot name="home-hero-after" /></template>
          <template #home-features-before
            ><slot name="home-features-before"
          /></template>
          <template #home-features-after
            ><slot name="home-features-after"
          /></template>
          <template #doc-footer-before
            ><slot name="doc-footer-before"
          /></template>
          <template #doc-before><slot name="doc-before" /></template>
          <template #doc-after><slot name="doc-after" /></template>
          <template #doc-top><slot name="doc-top" /></template>
          <template #doc-bottom><slot name="doc-bottom" /></template>
          <template #aside-top><slot name="aside-top" /></template>
          <template #aside-outline-before
            ><slot name="aside-outline-before"
          /></template>
          <template #aside-outline-after
            ><slot name="aside-outline-after"
          /></template>
          <template #aside-ads-before
            ><slot name="aside-ads-before"
          /></template>
          <template #aside-ads-after><slot name="aside-ads-after" /></template>
          <template #aside-bottom><slot name="aside-bottom" /></template>
        </VPContent>
      </div>
      <VPFooter />
    </div>

    <!-- Мобильный: базовый layout VitePress -->
    <DefaultLayout v-else>
      <template #nav-bar-title-before
        ><slot name="nav-bar-title-before"
      /></template>
      <template #nav-bar-title-after
        ><slot name="nav-bar-title-after"
      /></template>
      <template #nav-bar-content-before
        ><slot name="nav-bar-content-before"
      /></template>
      <template #nav-bar-content-after
        ><slot name="nav-bar-content-after"
      /></template>
      <template #nav-screen-content-before
        ><slot name="nav-screen-content-before"
      /></template>
      <template #nav-screen-content-after
        ><slot name="nav-screen-content-after"
      /></template>
      <template #sidebar-nav-before
        ><slot name="sidebar-nav-before"
      /></template>
      <template #sidebar-nav-after><slot name="sidebar-nav-after" /></template>
      <template #page-top><slot name="page-top" /></template>
      <template #page-bottom><slot name="page-bottom" /></template>
      <template #doc-before><slot name="doc-before" /></template>
      <template #doc-after><slot name="doc-after" /></template>
      <template #doc-top><slot name="doc-top" /></template>
      <template #doc-bottom><slot name="doc-bottom" /></template>
      <template #doc-footer-before><slot name="doc-footer-before" /></template>
      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
      <template #aside-outline-before
        ><slot name="aside-outline-before"
      /></template>
      <template #aside-outline-after
        ><slot name="aside-outline-after"
      /></template>
      <template #layout-top><slot name="layout-top" /></template>
      <template #layout-bottom><slot name="layout-bottom" /></template>
    </DefaultLayout>
  </template>
  <Content v-else />
</template>

<style scoped>
.vp-theme-container--desktop {
  display: flex;
  height: 100vh;
}

.vp-content {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
</style>
