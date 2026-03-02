<script lang="ts" setup>
// FIXME: Проверить файл

import { useData } from "vitepress";
import { VPLink } from "vitepress/theme";
import type { IThemeConfigNav } from "../../../types";

const { theme: themeConfig, page } = useData();

const nav: IThemeConfigNav[] = themeConfig.value?.nav ?? [];

const groups: IThemeConfigNav[] = nav.filter(
  (item) => "items" in item && Array.isArray(item.items),
);

const currentPath = () =>
  "/" + page.value.relativePath.replace(/\.md$/, "").replace(/\/index$/, "");

const norm = (p: string) =>
  decodeURI(p)
    .replace(/[?#].*$/, "")
    .replace(/(?:(^|\/)index)?\.(?:md|html)$/, "$1")
    .replace(/\/$/, "") || "/";

const isActive = (item: { link: string }) => {
  const current = currentPath();
  const n = norm(item.link);
  return current === n || (n !== "/" && current.startsWith(n + "/"));
};
</script>

<template>
  <div class="vp-navbar">
    <nav
      v-if="groups.length"
      aria-labelledby="main-nav-aria-label"
      class="navbar"
    >
      <fieldset v-for="(group, gKey) in groups" :key="gKey" class="fieldset">
        <legend class="legend">{{ group.text }}</legend>
        <div class="link-wrapper">
          <VPLink
            v-for="(item, key) in group.items"
            :key="key"
            :href="item.link"
            :class="[
              'link',
              'theme-default',
              item.theme && 'theme-' + item.theme,
              isActive(item) && 'route-link-active',
            ]"
          >
            {{ item.text }}
          </VPLink>
        </div>
      </fieldset>
    </nav>
  </div>
</template>

<style scoped>
.vp-navbar {
  padding: 10px;
  background-color: #f0f0f0;
}

.navbar {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
}

.fieldset {
  margin: 0;
  padding: 10px;
  padding-top: 0;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background-color: #fff;
}

.legend {
  font-size: 12px;
  font-weight: 600;
  color: #2c3e50;
}

.link-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

.link {
  display: block;
  width: auto;
  padding: 5px 6px;
  line-height: 1;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
  border-radius: 5px;
  transition: opacity 0.7s;
  cursor: pointer;
}
.link:hover {
  opacity: 0.7;
}
.link.route-link-active {
  outline: 2px solid #fff !important;
  background-color: rgba(0, 0, 0, 0.7) !important;
  border: 1px solid rgba(0, 0, 0, 0.7) !important;
  color: #fff !important;
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

<style scoped>
.link.theme-default {
  color: rgb(35, 44, 46);
  background-color: rgba(225, 225, 225, 0.3);
  border: 1px solid rgba(219, 219, 219, 0.9);
}
.link.theme-react {
  color: rgb(43, 116, 132);
  background-color: rgba(43, 216, 255, 0.3);
  border: 1px solid rgba(43, 216, 255, 0.9);
}
.link.theme-node {
  color: rgb(85, 103, 45);
  background-color: rgba(133, 190, 5, 0.3);
  border: 1px solid rgba(133, 190, 5, 0.9);
}
.link.theme-js {
  color: rgb(104, 95, 43);
  background-color: rgba(232, 212, 77, 0.3);
  border: 1px solid rgba(232, 212, 77, 0.9);
}
.link.theme-vue {
  color: rgb(34, 83, 61);
  background-color: rgba(62, 178, 127, 0.3);
  border: 1px solid rgba(62, 178, 127, 0.9);
}
.link.theme-html {
  color: rgb(195, 99, 58);
  background-color: rgba(208, 90, 39, 0.1);
  border: 1px solid rgba(222, 96, 42, 0.2);
}
.link.theme-primary {
  color: rgb(159, 159, 159);
  background-color: rgba(231, 234, 198, 0.4);
  border: 1px solid #e2e2e2;
}
.link.theme-secondary {
  color: rgb(173, 173, 173);
  background-color: #fff;
  border: 1px solid #ededed;
}
.link.theme-accent {
  color: rgb(100, 100, 100);
  background-color: #fff;
  border: 1px solid rgba(0, 201, 167, 0.6);
  outline: 1px solid rgba(0, 201, 167, 0.6);
}
.link.theme-actual {
  color: rgb(100, 100, 100);
  background-color: #fff;
  border: 1px solid rgba(245, 224, 66, 1);
  outline: 1px solid rgba(245, 224, 66, 1);
}
.link.theme-tech {
  color: rgb(199, 90, 209);
  background-color: rgba(212, 15, 230, 0.1);
  border: 1px solid #e2e2e2;
}
.link.theme-theory {
  color: rgb(136, 136, 136);
  background-color: rgba(233, 233, 233, 0.3);
  border: 1px solid rgb(216, 216, 216);
}
</style>
