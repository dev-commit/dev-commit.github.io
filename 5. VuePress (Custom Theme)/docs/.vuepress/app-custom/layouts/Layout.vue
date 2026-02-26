<script setup lang="ts">
/// <reference path="../../env.d.ts" />
// FIXME: Cursor. Не проверялся
// @ts-ignore
import { useScrollPromise } from "@theme/useScrollPromise";
// @ts-ignore
import { useSidebarItems } from "@theme/useSidebarItems";
// @ts-ignore
import { useThemeLocaleData } from "@theme/useThemeData";

import VPHome from "@theme/VPHome.vue";
import VPNavbar from "@theme/VPNavbar.vue";
import VPPage from "@theme/VPPage.vue";
import VPSidebar from "@theme/VPSidebar.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { usePageData, usePageFrontmatter, useRouter } from "vuepress/client";

const page = usePageData();
const frontmatter = usePageFrontmatter();
const themeLocale = useThemeLocaleData();

const shouldShowNavbar = computed(
  () =>
    frontmatter.value.navbar !== false && themeLocale.value.navbar !== false,
);

const sidebarItems = useSidebarItems();
const isSidebarOpen = ref(false);

const touchStart: { x: number; y: number } = { x: 0, y: 0 };

const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
};

const onTouchStart = (e: TouchEvent): void => {
  touchStart.x = e.changedTouches[0].clientX;
  touchStart.y = e.changedTouches[0].clientY;
};

const onTouchEnd = (e: TouchEvent): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x;
  const dy = e.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) toggleSidebar(true);
    else toggleSidebar(false);
  }
};

const enableExternalLinkIcon = computed(
  () =>
    frontmatter.value.externalLinkIcon ??
    themeLocale.value.externalLinkIcon ??
    true,
);

const containerClass = computed(() => [
  {
    "no-navbar": !shouldShowNavbar.value,
    "no-sidebar": !sidebarItems.value.length,
    "sidebar-open": isSidebarOpen.value,
    "external-link-icon": enableExternalLinkIcon.value,
  },
  frontmatter.value.pageClass,
]);

let unregisterRouterHook: (() => void) | undefined;
onMounted(() => {
  const router = useRouter();
  unregisterRouterHook = router.afterEach(() => toggleSidebar(false));
});
onUnmounted(() => {
  unregisterRouterHook?.();
});

const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;
</script>

<template>
  <div
    class="vp-theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="vp-sidebar-mask" @click="toggleSidebar(false)" />

    <slot name="sidebar">
      <VPSidebar>
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </VPSidebar>
    </slot>

    <div class="vp-content">
      <slot name="navbar">
        <VPNavbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
          <template #before>
            <slot name="navbar-before" />
          </template>
          <template #after>
            <slot name="navbar-after" />
          </template>
        </VPNavbar>
      </slot>

      <slot name="page">
        <VPHome v-if="frontmatter.home" />
        <Transition
          v-else
          name="fade-slide-y"
          mode="out-in"
          @before-enter="onBeforeEnter"
          @before-leave="onBeforeLeave"
        >
          <VPPage :key="page.path">
            <template #top>
              <slot name="page-top" />
            </template>
            <template #content-top>
              <slot name="page-content-top" />
            </template>
            <template #content-bottom>
              <slot name="page-content-bottom" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </VPPage>
        </Transition>
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-slide-y-enter-active,
.fade-slide-y-leave-active {
  transition: all 0.2s ease;
}
.fade-slide-y-enter-from,
.fade-slide-y-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
